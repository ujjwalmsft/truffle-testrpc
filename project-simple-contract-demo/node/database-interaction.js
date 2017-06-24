// https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query-nodejs

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var util = require('util');
var restify = require('restify');

var server = restify.createServer({
    name: 'database-interaction-server'
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

// Routing
server.get('/getRecords', getRecords);
server.get('/addRecord/:contractName/:contractAddress/:partyA/:partyB', addRecord);
server.get('/updateRecord/:contractAddress/:settlementStatus', updateRecord);
server.get('/deleteRecord/:contractAddress', deleteRecord);

// Create connection to database
var config = {
    userName: 'xxx',
    password: 'xxx',
    server: 'xxx.database.windows.net',
    options: {
        database: 'xxx',
        encrypt: true
    }
}

var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connection established!");
    }
});

function getRecords(req, res, next) {
    request = new Request(
        "SELECT * FROM Contracts",
        function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(rowCount + ' row(s) returned');
                res.send(records);
            }
        }
    );

    var records = [];
    request.on('row', function (columns) {
        var record = {};
        columns.forEach(function (column) {
            record[column.metadata.colName] = column.value;
        });
        records.push(record);
    });

    connection.execSql(request);
}

function addRecord(req, res, next) {
    var contractName = req.params.contractName;
    var contractAddress = req.params.contractAddress;
    var partyA = req.params.partyA;
    var partyB = req.params.partyB;
    var settlementStatus = false;

    var query = util.format("INSERT INTO Contracts (ContractName, ContractAddress, PartyA, PartyB, SettlementStatus) VALUES ('%s', '%s', '%s', '%s', '%s')", contractName, contractAddress, partyA, partyB, settlementStatus);
    request = new Request(
        query,
        function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(rowCount + ' row(s) inserted');
                res.send(rowCount + ' row(s) inserted');
            }
        }
    );
    connection.execSql(request);
}

function updateRecord(req, res, next) {
    var contractAddress = req.params.contractAddress;
    var settlementStatus = req.params.settlementStatus;

    var query = util.format("UPDATE Contracts SET SettlementStatus = '%s' WHERE ContractAddress = '%s'", settlementStatus, contractAddress);
    console.log(query);
    request = new Request(
        query,
        function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(rowCount + ' row(s) updated');
                res.send(rowCount + ' row(s) updated');
            }
        }
    );
    connection.execSql(request);
}

function deleteRecord(req, res, next) {
    var contractAddress = req.params.contractAddress;

    var query = util.format("DELETE FROM Contracts WHERE ContractAddress = '%s'", contractAddress);
    request = new Request(
        query,
        function (err, rowCount, rows) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(rowCount + ' row(s) deleted');
                res.send(rowCount + ' row(s) deleted');
            }
        }
    );
    connection.execSql(request);
}
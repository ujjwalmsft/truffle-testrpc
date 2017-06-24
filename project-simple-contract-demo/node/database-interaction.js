// https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query-nodejs

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var util = require('util');
var restify = require('restify');

var server = restify.createServer({
  name: 'database-interaction-server'
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// Routing
server.get('/getRecords', function(req, res, next) {
  var responseObject = getRecords();
  console.log(responseObject);
  res.send(responseObject);
  next();
});
server.get('/addRecord', addRecord);
server.get('/updateRecord', updateRecord);
server.get('/deleteRecord', deleteRecord);
//server.head('/hello/:name', respond);

// Create connection to database
var config = {
  userName: 'xxx',
  password: 'xxx',
  server: 'xxx',
  options: {
      database: 'xxx',
      encrypt: true
  }
}

//getRecords();
//addRecord("Contract4", "0x14", "partyA4", "partyB4");
//deleteRecord('0x14');
//updateRecord('0x13', 'true');

var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    }
    else{
        console.log("Connection established!");
    }
});

function getRecords(){
    request = new Request(
        "SELECT * FROM Contracts",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
        }
    );
    
    request.on('row', function(columns) {
        var returnObject = {};
        columns.forEach(function(column) {
          console.log("%s\t%s", column.metadata.colName, column.value);
        });  
    });
    connection.execSql(request);
}

function addRecord(contractName, contractAddress, partyA, partyB) {
  var query = util.format("INSERT INTO Contracts (ContractName, ContractAddress, PartyA, PartyB) VALUES ('%s', '%s', '%s', '%s')", contractName, contractAddress, partyA, partyB);
  request = new Request(
    query,
    function(err, rowCount, rows) {
      console.log(rowCount + ' row(s) inserted');
    }
  );
  connection.execSql(request);
}

function updateRecord(contractAddress, status){
  var query = util.format("UPDATE Contracts SET SettlementStatus = '%s' WHERE ContractAddress = '%s'", status, contractAddress);
  console.log(query);
  request = new Request(
      query,
      function(err, rowCount, rows) {
          console.log(rowCount + ' row(s) updated');
      }
  );
  connection.execSql(request);
}

function deleteRecord(contractAddress){
  var query = util.format("DELETE FROM Contracts WHERE ContractAddress = '%s'", contractAddress);
  request = new Request(
      query,
      function(err, rowCount, rows) {
          console.log(rowCount + ' row(s) returned');
      }
  );
  connection.execSql(request);
}

function closeConnection () {
  connection.close();
}
(function(){
    var app = angular.module("contract-demo");
    
    var CreateContractController = function($scope){
        $scope.submitContract = function(contractName, partyA, partyB) {
            var message = "Contract '" + contractName +  "' submitted between " + partyA + " and " + partyB;
            alert(message);
        }
    };

    app.controller("CreateContractController", CreateContractController);
}());
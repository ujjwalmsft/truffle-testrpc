(function(){
    var databaseInteraction = function($http, $log){
        var getContracts = function(){
            //...
        };

        var addContract = function(){
            //...
        };

        return {
            getContracts: getContracts
        };
    }

    var module = angular.module("contract-demo");
    module.factory("databaseInteraction", databaseInteraction);
}());
(function(){
    var app = angular.module("contract-demo");
    
    var HomeController = function($scope){
        $scope.header = "Hello!";
    };

    app.controller("HomeController", HomeController);
}());
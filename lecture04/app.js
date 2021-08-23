( function () {
  'use strict';
  angular.module("MyFirstApp",[])
  .controller("MyFirstController", function($scope){
    $scope.name = "sandy";
    $scope.sayHello = function (){
      return "hello coursera!";
    }
  });
})();

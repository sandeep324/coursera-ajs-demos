(function () {
    'use strict';

    angular.module("CounterModule", [])
    .controller("CounterController",CounterController);

    CounterController.$inject = ['$scope'];

    function CounterController($scope) {

        $scope.countOnce = 0;
        $scope.regularCounter = 0;
        $scope.name = "sandy";

        $scope.showNoOfWatchers = function () {
            console.log("# of watchers : "+$scope.$$watchersCount);
        }
        $scope.onceCounter = function() {
            $scope.countOnce = 1;
        }

        $scope.counter =function(){
            $scope.regularCounter++;
        }

        $scope.$watch(function(){
            console.log("Digest loop fired");
        })

        /* $scope.$watch("countOnce", function (newvalue, oldValue) {
            console.log("once counter old value : "+oldValue);
            console.log("once counter new value : "+newvalue);
        });

        $scope.$watch("regularCounter", function (newvalue, oldValue) {
            console.log("regularCounter  old value : "+oldValue);
            console.log("regularCounter  new value : "+newvalue);
        }); */
    }
     


})();
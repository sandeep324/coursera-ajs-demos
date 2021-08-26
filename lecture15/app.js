(function () {
    'use strict';

    angular.module("DigestApplyApp", [])
    .controller("DigestApplyController",CounterController);

    CounterController.$inject = ['$scope'];

    function CounterController($scope) {
        $scope.regularCounter = 0;
      

        /* $scope.counter =function(){
            $scope.regularCounter++;
        } */

        /* $scope.counter =function(){
            setTimeout(function(){          // counter wont get incremneted by angular in html 
                                        //beacuse this whole thing gets outside of angular context
                $scope.regularCounter++;
                console.log("Counter got incremented");
            },1000)
           
        } */

       /*  $scope.counter =function(){
            setTimeout(function(){         
                $scope.regularCounter++;
                console.log("Counter got incremented");     // problems : exceptions throen by above piece of code not visible to angular
                $scope.$digest();   // we are kicking manually digest loop here 
            },1000)
           
        }  */

          $scope.counter =function(){
            setTimeout(function(){ 
                $scope.$apply( function(){
                               
                $scope.regularCounter++;
                console.log("Counter got incremented");   
                });
      
            },1000)
           
        }  

        // however it resolves issue. it is always better practice to use angilar equivalent fuction 
        //exist in angular or not. if exist use it. - ex - $timeout
   
    }
     


})();
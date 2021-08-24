(function () {
    

    angular.module("CustomerFilters",[])
    .controller("CustomFilterController",CustomFilterController)
    .filter("love",LoveFilterFactory)
    .filter("truth",TruthFilter);

    CustomFilterController.$inject = ['$scope','loveFilter'];

    function CustomFilterController($scope,loveFilter){

        $scope.hello = "hello.. i like Angular JS";

        $scope.sayHello = function() {
            return loveFilter($scope.hello);
        }
    }


    function LoveFilterFactory() {
        return function(input) {

            input = input.replace("like", "Love");
            return input;

        }
        
    }
    function TruthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;

        }
        
    }


})();
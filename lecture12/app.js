(
    function () {
        angular.module("FilterModule",[])
        .controller("FilterCOntroller",FilterCOntroller);
        FilterCOntroller.$inject = ['$scope','$filter'];

        function FilterCOntroller($scope,$filter) {
            $scope.name = "sandeep";
            $scope.bookPrice = 20;

            $scope.nameInController = $filter('uppercase')("Sandy")
            $scope.bookPriceInController = $filter('currency')("20","Rs",4)
            
        }



    }
)();
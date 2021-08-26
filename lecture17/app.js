(function () {
    'use strict';
    angular.module("NgRepeatApp",[])
    .controller("NgRepeatController",NgRepeatController);
    NgRepeatController.$inject = ["$scope"];

    function NgRepeatController($scope) {
        $scope.itemList1 = ["C","C++","C#","Java","Python"];
        $scope.itemList2 = [
            {book:"C",price:100},
            {book:"C++",price:200},
            {book:"C#",price:300},
            {book:"Java",price:500},
            {book:"Python",price:400}
        ];
        $scope.itemName;
        $scope.itemPrice;
        $scope.AddToItemList2 = function () {
            var NewItem = {book: $scope.itemName,price: $scope.itemPrice};
            $scope.itemList2.push(NewItem);
        }
    }
    

})();
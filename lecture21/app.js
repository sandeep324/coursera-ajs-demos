(function () {
    'use strict';
    angular.module("MyApp",[])
    .controller("ShoppingListCotroller1",ShoppingListCotroller1)
    .controller("ShoppingListCotroller2",ShoppingListCotroller2)
    .factory("ShoppingListFactory",ShoppingListFactory);

    ShoppingListCotroller1.$inject = ['ShoppingListFactory'];
    ShoppingListCotroller2.$inject = ['ShoppingListFactory'];

    function ShoppingListCotroller1(ShoppingListFactory) {
        var ShoppingListService = ShoppingListFactory();
        var list1 =this;
        list1.itemName = "";
        list1.quantity = "";

        list1.items = ShoppingListService.getItems();
        list1.addItemsToList = function () {
            try {
                ShoppingListService.addItemsToList(list1.itemName,list1.quantity);
            } catch (error) {
                list1.errorMessage = error.message;
            }
            
        }
        list1.removeItem = function (indexToRemove) {
            ShoppingListService.removeItem(indexToRemove);
            list1.errorMessage = "";
        }
    }
    function ShoppingListCotroller2(ShoppingListFactory) {
        var ShoppingListService = ShoppingListFactory(3);
        var list2 =this;
        list2.itemName = "";
        list2.quantity = "";

        list2.items = ShoppingListService.getItems();
        list2.addItemsToList = function () {
            try {
                ShoppingListService.addItemsToList(list2.itemName,list2.quantity);
            } catch (error) {
                list2.errorMessage = error.message;
            }
            
        }
        list2.removeItem = function (indexToRemove) {
            ShoppingListService.removeItem(indexToRemove);
            list2.errorMessage = "";
        }
    }

    function ShoppingListService(maxItems) {
        var service = this;
        var items = [];
        service.getItems = function getItems() {
            return items;
        }
        service.addItemsToList = function addItemsToList(itemName,quantity) {

            if((maxItems === undefined )|| ((maxItems !== undefined )&& (items.length < maxItems))){
                var Item = {itemName: itemName,quantity: quantity};
                items.push(Item);
            }else{
                throw new Error ("Max " +maxItems+ " Reached");
            }
        }
        service.removeItem = function (indexToRemove) {
            items.splice(indexToRemove,1);
        }

        
    }

    function ShoppingListFactory() {
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);
        }
        return factory;
    }
})();

(function () {
    'use strict';
    angular.module("MyApp",[])
    .controller("ShoppingListCotroller1",ShoppingListCotroller1)
    .provider("ShoppingListService",ShoppingListServiceProviderMethod)
    .config(Config);

    ShoppingListCotroller1.$inject = ['ShoppingListService'];
    Config.$inject = ['ShoppingListServiceProvider'];

    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.defaults.maxItems = 3;
    }

    function ShoppingListCotroller1(ShoppingListService) {
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

    function ShoppingListServiceProviderMethod() {
        var providerInstance = this;
        providerInstance.defaults = {maxItems: 10};
        
        providerInstance.$get = function () {
            return new ShoppingListService(providerInstance.defaults.maxItems);
        }
    }
})();

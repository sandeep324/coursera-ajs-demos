(function () {
    'use strict';
    angular.module("MyApp",[])
    .controller("ItemListAddController",ItemListAddController)
    .controller("ItemListShowController",ItemListShowController)
    .service("ItemService",ItemService);

    ItemListAddController.$inject = ['ItemService'];
    ItemListShowController.$inject = ['ItemService'];

    function ItemListAddController(ItemService) {
        var itemAdder = this;
        itemAdder.item = "";
        itemAdder.quantity = ""
        itemAdder.addItemToList = function () {
            ItemService.addItemToList(itemAdder.item, itemAdder.quantity);
        } 
    }
    function ItemListShowController(ItemService) {
        var itemShow = this;
        itemShow.getItems = ItemService.getItems();
        itemShow.removeItem = function(indexItem) {
            ItemService.removeItem(indexItem);
        }
    }
    
    function ItemService() {
        var service = this;
        var itemList = [];
        service.addItemToList =  function (itemName,quantity) {
            var Item = {item: itemName, quantity: quantity};
            itemList.push(Item);
        }
        service.getItems = function () {
            return itemList;
        }
        service.removeItem = function (indexItem) {
            itemList.splice(indexItem,1);
        }
    }
})();
(function () {
    var app = angular.module('todolist', []);
    app.controller('ListController', function () {

        this.item = {};
        var preDefinedItems = [{
            name: "Test 1"
            }, {
            name: "Test 2"
            }, {
            name: "Test 3"
            }];

        var loadItemList = localStorage.getItem("yuan0037-items");
        if (loadItemList != null)  {
            if (JSON.parse(loadItemList).length > 0) {
                this.items = JSON.parse(loadItemList);
            } else {
                this.items = preDefinedItems;
            }
        } else {
            this.items = preDefinedItems;
        }
        console.log(this.items);

        this.addItem = function () {
            this.items.push(this.item);
            this.item = {};
        };

        this.removeItem = function (index) {
            this.items.splice(index, 1);
            localStorage.setItem("yuan0037-items", JSON.stringify(this.items));            
        };
    });


})();
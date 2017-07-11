var app = angular.module('list', []);

app.controller('listController', function(DataService){

    this.name = "AngularJS Todo list"

    this.mylist = {};

    this.data = DataService.data;

    this.submitItem = function(){
        DataService.data.unshift({
            item: this.mylist.item
        })

    this.mylist = {};     
    }

})


app.service('DataService', function() {
    
    this.data = [];

});





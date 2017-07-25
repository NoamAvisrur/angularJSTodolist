app.component('listComponent', {
  template: `<div>
                 <ul>
                     <li class="item_preview" ng-show="clist.mylist.item">{{clist.mylist.item}}</li>
                     <item-component
                         listitem="clist.listdata[$index]"  on-update="clist.updateItem(item, $index)" on-delete="clist.deleteItem(item)" ng-repeat="singleItem in clist.listdata"
                     </item-component>
                 </ul>
                 <div class="list_details" ng-show="clist.listdata.length">
                     <span>you have {{clist.listdata.length}} tasks</span>
                 <div>
             </div>`,
  bindings: {
       listdata: "=",
       mylist: "="
  },
  controller: function() {
    
    this.deleteItem = function(item){
        console.log(item);
        this.listdata.splice(this.listdata.indexOf(item), 1);
    }
    
    this.updateItem = function(item, $index){
        console.log(item);
        this.listdata[$index] = item;
    }
     
  },
  controllerAs: 'clist'
});
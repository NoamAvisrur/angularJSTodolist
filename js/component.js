app.component('listComponent', {
  template: `<div>
                 <ul>
                     <li class="item_preview" ng-show="clist.mylist.item">{{clist.mylist.item}}</li>
                     <li class="item" ng-repeat="singleItem in clist.listdata" ng-show="clist.listdata">
                          <span ng-show='!show' ng-click="show = !show">{{singleItem.item}}<span class="date">{{clist.getDate()}}</span></span>
                          <form class="editList" ng-submit="show = !show">
                              <input ng-show="show" type="text" ng-model='singleItem.item'>
                              <input type=submit>
                          </form>
                          <button ng-click="clist.deleteItem($index)">&#10006;</button>
                     </li>
                 </ul>
                 <div class="list_details" ng-show="clist.listdata.length">
                     <span>you have {{clist.listdata.length}} tasks</span>
                 <div>
             </div>`,
  bindings: {
       test: "=",
       listdata: "=",
       mylist: "="
  },
  controller: function($element) {
    this.i = 0;
    
    this.getDate = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        }
        var CommentDate = ' ('+dd+'/'+mm+'/'+yyyy+')';
        return CommentDate;
    }
    
    this.deleteItem = function($index){
        this.listdata.splice($index, 1);
    }
     
  },
  controllerAs: 'clist'
});
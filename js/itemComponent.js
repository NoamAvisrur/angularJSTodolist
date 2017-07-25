app.component('itemComponent', {
  template: `
                <li class="item">
                     <span ng-dblclick="citem.edit($event)">{{citem.listitem}}</span>
                     <button ng-click="citem.onDelete({item: this.listitem})">&#10006;</button>
                </li>`,
  bindings: {
       listitem: "<",
       onDelete : "&",
       onUpdate : "&"
  },
  controller: function($scope, $compile, $element) {
     
      this.edit = function(e){
          var oldItem = e.target.textContent;
          e.target.remove();
          var input = angular.element('<input>').attr({
              type: 'text',
              class: 'edit_item',
              value: oldItem,
              'ng-blur': "citem.blur($event)"
          });
          $element.find('li').prepend(input);
          $compile(input)($scope);
      }  
      
      this.blur = function(e){
          this.listitem = e.target.value;
          e.target.remove();
          var span = angular.element('<span>').attr({
              'ng-bind': 'citem.listitem',
              'ng-dblclick': 'citem.edit($event)'
          });
          this.onUpdate({item: this.listitem});
          $element.find('li').prepend(span);
          $compile(span)($scope);
      }     
  },
  controllerAs: 'citem'
});


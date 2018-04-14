var app = angular.module('gre', []);

var GScope;
app.controller('MainCtrl', function($scope) {
  GScope = $scope;
  //  $scope.date = '19/03/2013';
  // $scope.items = [{name :"10/09/2013"},{name :"10/09/2013"}];
  $scope.gre = greWords;
  $scope.greWordList = [];
  for (var key in $scope.gre) {
      $scope.greWordList.push(key) 
  }
});


app.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'dd/mm/yy',
                    onSelect:function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});

app.directive('autocomplete', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
             element.autocomplete({

                source2: function (req, res){
                    console.log(req.term);
                    scope.meaning = scope.gre[req.term];
                    console.log(scope.meaning);
                    return scope.meaning;
               },
               minLength:1,
                source3: scope.greWordList,

                source: function(request, response) {
                    var filteredArray = $.map(scope.greWordList, function(item) {
                        if( item.startsWith(request.term)){ return item; }
                        else { return null; }
                    });
                    response(filteredArray);
                },
                select:function (event,ui) {
                  console.log(ui);
                  scope.meaning = scope.gre[ui.item.value];
                  ngModelCtrl.$setViewValue(ui.item);
                  scope.$apply();
                }
              });
                
            
        }
    }
});




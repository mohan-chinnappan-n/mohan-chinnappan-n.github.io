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

  //$scope.showResources = true;
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
                        scope.term = null;
                        if( item.toUpperCase().startsWith(request.term.toUpperCase())){  return item; }
                        else { scope.term = request.term; return null; }
                    });
                    response(filteredArray);
                    scope.$apply();
                },
                select:function (event,ui) {
                  //console.log(ui);
                  scope.term = null;
                  scope.selectedWord = ui.item.value;
                  var meaningUsage = scope.gre[ui.item.value].split('|');

                  scope.meaning = meaningUsage[0];
                  scope.usage = meaningUsage[1];

                  ngModelCtrl.$setViewValue(ui.item);
                  scope.$apply();
                }
              });


        }
    }
});

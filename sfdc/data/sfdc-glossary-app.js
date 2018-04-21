var app = angular.module('app', []);

var query = location.search.substr(1);
var result = {};
query.split("&").forEach(function(part) {
  var item = part.split("=");
  result[item[0]] = decodeURIComponent(item[1]);
});



var GScope;
app.controller('MainCtrl', function($scope) {
  GScope = $scope;


  //  $scope.date = '19/03/2013';
  // $scope.items = [{name :"10/09/2013"},{name :"10/09/2013"}];
  //console.log(greWords);
  $scope.sfdc = Object.assign(sfdcWords, eaWords)
  $scope.sfdcWordList = [];
  for (var key in $scope.sfdc) {
      $scope.sfdcWordList.push(key)
  }
  if ( result.f ) {
    $scope.selectedWord = $scope.auto = result.f.charAt(0).toUpperCase() + result.f.slice(1);
    $scope.meaning = $scope.sfdc[ $scope.auto];
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
                    //console.log(req.term);
                    scope.meaning = scope.sfdc[req.term];
                    console.log(scope.meaning);
                    return scope.meaning;
               },
               minLength:1,
                source3: scope.sfdcWordList,

                source: function(request, response) {
                    var filteredArray = $.map(scope.sfdcWordList, function(item) {
                        scope.term = null;
                        if( item.toUpperCase().includes(request.term.toUpperCase())){  return item; }
                        else { scope.term = request.term; return null; }
                    });
                    response(filteredArray);
                    scope.$apply();
                },
                select:function (event,ui) {
                  //console.log(ui);
                  scope.term = null;
                  scope.selectedWord = ui.item.value;
                  var meaningUsage = scope.sfdc[ui.item.value].split('|');

                  scope.meaning = meaningUsage[0];
                  scope.usage = meaningUsage[1];

                  ngModelCtrl.$setViewValue(ui.item);
                  scope.$apply();
                }
              });


        }
    }
});

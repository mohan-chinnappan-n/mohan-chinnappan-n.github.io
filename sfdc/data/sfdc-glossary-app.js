/**

app file
author: mohan.chinnappan.n

**/


var app = angular.module('app',  ['ui.utils', 'chart.js']);

var query = location.search.substr(1);
var result = {};
query.split("&").forEach(function(part) {
  var item = part.split("=");
  result[item[0]] = decodeURIComponent(item[1]);
});

var GScope;
app.controller('MainCtrl', function($scope) {
  GScope = $scope;
  $scope.trialhead = false;
  $scope.topics = ['SFDC', 'Einstein Analytics (EA)', 'Shield', 'SFDX', 'Financial Services Cloud (FSC)',
                'AWS',
                'DB',
                'Farming',
                'Plumbing',
                'HouseWiring',

                 'EN',
                 'Music']
                 ;
  $scope.sfdc = Object.assign(sfdcWords, eaWords, shieldWords, dxWords, fcWords,
                              dbWords,
                              awsWords,
                              farmingWords,
                              plumbingWords,
                              houseWiringWords,

                              greWords,
                              musicWords
                          );

  $scope.sfdcCounts = [
       Object.keys(sfdcWords).length,
       Object.keys(eaWords).length,
       Object.keys(shieldWords).length,
       Object.keys(dxWords).length,
       Object.keys(fcWords).length,

       Object.keys(dbWords).length,
       Object.keys(awsWords).length,
       Object.keys(farmingWords).length,
       Object.keys(plumbingWords).length,
       Object.keys(houseWiringWords).length,

       Object.keys(greWords).length,
       Object.keys(musicWords).length,



  ]

  $scope.sfdcWordList = [];
  $scope.myList = [];
  for (var key in $scope.sfdc) {
      $scope.sfdcWordList.push(key)
  }
  if ( result.f ) {
    $scope.selectedWord = $scope.auto = result.f.charAt(0).toUpperCase() + result.f.slice(1);
    $scope.meaning = $scope.sfdc[ $scope.auto];
  }

  $scope.fillinItem = function(item) {
    $scope.auto = item;
  }

  $scope.showTrialhead = function() {
    if ($scope.auto.label.startsWith('SFDC')) $scope.trialhead= true;
    else  $scope.trialhead= true;
  }
  $scope.selectTopic = function(topic) {
    if (topic == 'Einstein Analytics (EA)') topic = 'EA';
    if (topic == 'Financial Services Cloud (FSC)') topic = 'FSC';
    $scope.auto = topic + ":";
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
                    //console.log(scope.meaning);
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
                  scope.selectedWord2 = ui.item.value.replace(/:/,' : ');
                  scope.myList.push(scope.selectedWord);
                  var meaningUsage = scope.sfdc[ui.item.value].split('|');

                  scope.meaning = meaningUsage[0];
                  scope.usage = meaningUsage[1];

                  ngModelCtrl.$setViewValue(ui.item);
                  //scope.showTrialhead();
                  scope.$apply();
                }
              });


        }
    }
});

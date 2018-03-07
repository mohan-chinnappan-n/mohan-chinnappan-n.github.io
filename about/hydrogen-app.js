//{author:'mohan.chinnappan.n@gmail.com', version:'0.10'}
var app = angular.module('mohansun.notes', ['ui.bootstrap']);

app.controller('myCtrl', function ($scope, $window) {

      $scope.myInterval = 5000;
        var slides = $scope.slides = [];
          $scope.addSlide = function(index) {
                  var newWidth = 600 + slides.length + 1;
                  slides.push({
                                image: '/img/fuel-cell-cars/' + index + '.png',
                                text: ['About','About','About','About'][slides.length % 4] + ' ' +
                                  ['Hydrogen Fuel Cell Car - Mirai', 'Hydrogen Fuel Cell Car - Mirai', 'Hydrogen Fuel Cell Car - Mirai', 'Hydrogen Fuel Cell Car - Mirai'][slides.length % 4]
                              });
            };
            for (var i=1; i<16; i++) {
                $scope.addSlide(i);
              }

});

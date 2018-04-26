var GScope;
// refer: http://plnkr.co/edit/PL7HvK1FY2ycuOrBbBTA?p=preview
// http://embed.plnkr.co/0iY5Qn/
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'addressFormatter']);

angular.module('addressFormatter', []).filter('address', function () {
 return function (input) {
     return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
 };
});

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
 GScope = $scope;

 $scope.objectAPIName = 'Rider_History__b';
 $scope.objectLabel = 'Rider History';
 $scope.objectPluralLabel = 'Rider History';

 $scope.indexAPIName = 'Rider_History_Index';
 $scope.indexLabel = 'Rider History Index';

$scope.prepString  = function() {
  var gd = $scope.gridOptions.data
  //console.log(gd);

  var fieldPermissions = "";
  var indexes = "";
  indexes +=
  '\n<indexes>'
  +'\n  <fullName>' + $scope.indexAPIName + '</fullName>'
  +'\n  <label>' + $scope.indexLabel + '</label>'
  var fields = "";

  gd.forEach(function(field){
    //console.log(field);
    fields +=
    '\n<fields>'
    +'\n  <fullName>' + field.fullName + '</fullName>'
    +'\n  <label>' + field.label + '</label>'
    +'\n  <required>' + field.required + '</required>'
    +'\n  <type>' + field.type + '</type>'

  ;
  if (field.length !== undefined)    fields += '\n  <length>' + field.length + '</length>'
  if (field.unique !== undefined)    fields += '\n  <unique>' + field.unique + '</unique>'
  if (field.scale !== undefined)     fields +='\n  <scale>' + field.scale + '</scale>';
  if (field.precision !== undefined) fields +='\n  <precision>' + field.precision + '</precision>'
  fields +=  '\n </fields>';
  //console.log(fields);

 //=== indexes
   if (field.indexed) {
     indexes +='\n <fields>\n'
       + '\n<name>' + field.fullName + '</scale>'
       + '\n<sortDirection>' + field.indexed + '</sortDirection>'
       + '\n</fields>'
       ;
  }
  if (field.readable || field.editable) {
    fieldPermissions +=
  '\n<fieldPermissions>' +
  '\n<field>' + $scope.objectAPIName + '.' + field.fullName + '</field>'
   if (field.readable) fieldPermissions += '\n<readable>true</readable>' ;
   if (field.editable) fieldPermissions += '\n<editable>true</editable>' ;
 }

});

  $scope.packagexml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n' +
  '    <types>\n' +
  '        <members>*</members>\n' +
  '        <name>CustomObject</name>\n' +
  '    </types>\n' +
  '    <types>\n' +
  '        <members>*</members>\n' +
  '        <name>PermissionSet</name>\n' +
  '    </types>\n' +
  '    <version>41.0</version>\n' +
  '</Package>\n'
  ;
  $scope.fields = fields;
  $scope.indexes = indexes;

  $scope.objectXML =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">\n' +
  '<deploymentStatus>Deployed</deploymentStatus>\n' +

  '<label>'  + $scope.objectLabel + '</label>\n' +
  '<pluralLabel>' + $scope.objectPluralLabel + '</pluralLabel>\n'

  + $scope.fields
  + $scope.indexes
  + '\n</indexes>'
  +'\n</CustomObject>'
  ;

  $scope.permissionsetXMl =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">\n'
  + fieldPermissions
  + '\n</PermissionSet>'
  ;

}



 $scope.createZipFile = function () {
    $scope.prepString();

    var zip = new JSZip();
    zip.file('package.xml', $scope.packagexml)
    var objects = zip.folder("objects");
    objects.file( $scope.objectAPIName + ".object", $scope.objectXML );
    var permissionsets = zip.folder("permissionsets");
    permissionsets.file($scope.objectAPIName.replace(/__b/,'') + ".permissionset",  $scope.permissionsetXMl );


    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // see FileSaver.js
        saveAs(content, $scope.objectAPIName.replace(/__b/,'') + "_package.zip");
    });
 }

 $scope.gridOptions = {
   rowHeight: 25,
   enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
 };

 $scope.storeFile = function( gridRow, gridCol, files ) {
   // ignore all but the first file, it can only select one anyway
   // set the filename into this column
   gridRow.entity.filename = files[0].name;

   // read the file and set it into a hidden column, which we may do stuff with later
   var setFile = function(fileContent){
     gridRow.entity.file = fileContent.currentTarget.result;
     // put it on scope so we can display it - you'd probably do something else with it
     $scope.lastFile = fileContent.currentTarget.result;
     $scope.$apply();
   };
   var reader = new FileReader();
   reader.onload = setFile;
   reader.readAsText( files[0] );
 };

 $scope.gridOptions.columnDefs2 = [
   { name: 'id', enableCellEdit: false, width: '10%' },
   { name: 'name', displayName: 'Name (editable)', width: '20%' },
   { name: 'age', displayName: 'Age' , type: 'number', width: '10%' },
   { name: 'gender', displayName: 'Gender', editableCellTemplate: 'ui-grid/dropdownEditor', width: '20%',
     cellFilter: 'mapGender', editDropdownValueLabel: 'gender', editDropdownOptionsArray: [
     { id: 1, gender: 'male' },
     { id: 2, gender: 'female' }
   ] },
   { name: 'registered', displayName: 'Registered' , type: 'date', cellFilter: 'date:"yyyy-MM-dd"', width: '20%' },
   { name: 'address', displayName: 'Address', type: 'object', cellFilter: 'address', width: '30%' },
   { name: 'address.city', displayName: 'Address (even rows editable)', width: '20%',
        cellEditableCondition: function($scope){
        return $scope.rowRenderIndex%2
        }
   },
   { name: 'isActive', displayName: 'Active', type: 'boolean', width: '10%' },
   { name: 'pet', displayName: 'Pet', width: '20%', editableCellTemplate: 'ui-grid/dropdownEditor',
     editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', editDropdownIdLabel: 'value'
   },
   { name: 'filename', displayName: 'File', width: '20%', editableCellTemplate: 'ui-grid/fileChooserEditor',
     editFileChooserCallback: $scope.storeFile }
 ];


    $scope.gridOptions.columnDefs = [
      { name: 'fullName', enableCellEdit: true, width: '15%' },
      { name: 'label', displayName: 'Label', width: '15%' },
      { name: 'type', displayName: 'Type' , type:'string', width: '10%',
      cellTemplate: '<select  ng-model="row.entity.type">' +
                  '<option value="Text">Text</option>' +
                  '<option value="Number">Number</option>' +
                  '<option value="Date">Date</option>' +
                  '<option value="DateTime">DateTime</option>' +
                  '</select>'


       },
      { name: 'length', displayName: 'Length' , type: 'number', width: '8%' },
      { name: 'precision', displayName: 'Precision' , type: 'number', width: '8%' },
      { name: 'scale', displayName: 'Scale' , type: 'number', width: '5%' },

      { name: 'required', displayName: 'Required' , type: 'boolean', width: '8%',
      cellTemplate: '<input type="checkbox" ng-model="row.entity.required">'
    },



      { name: 'unique', displayName: 'Unique' , type: 'boolean', width: '8%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.unique">'
      },

      { name: 'readable', displayName: 'Readable' , type: 'boolean', width: '8%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.readable">'

      },
      { name: 'editable', displayName: 'Editable' , type: 'boolean', width: '8%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.editable">'


       },

      { name: 'indexed', displayName: 'Indexed' , type: 'string', width: '10%',
          cellTemplate: '<select  ng-model="row.entity.indexed"><option value="DESC">DESC</option><option value="ASC">ASC</option></select>'

      }







    ];

$scope.msg = {};

$scope.gridOptions.onRegisterApi = function(gridApi){
         //set gridApi on scope
         $scope.gridApi = gridApi;
         gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
           $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
           $scope.$apply();
         });
       };

 $http.get('./data/bigobjects/bigobjectsDef.json')
   .success(function(data) {
     $scope.gridOptions.data = data;
   });
}])

.filter('boolean', function() {
 var booleanHash = {
   true: 'true',
   false: 'false'
 };

 return function(input) {
   if (!input){
     return '';
   } else {
     return genderHash[input];
   }
 };
})
;

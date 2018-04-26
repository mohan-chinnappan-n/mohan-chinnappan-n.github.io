/*
 author: mohan chinnappan
 Apr 2018
*/
var GScope;
// refer: http://plnkr.co/edit/PL7HvK1FY2ycuOrBbBTA?p=preview
// http://embed.plnkr.co/0iY5Qn/
var app = angular.module('app', ['ngTouch',
'ui.grid',
'ui.grid.edit',
'ui.grid.cellNav',

'ui.grid.selection',
'ui.grid.exporter',
'ui.grid.resizeColumns',
'ui.grid.pagination',

'ui.grid.importer',
'ui.grid.autoFitColumns',

 'addressFormatter']);


angular.module('addressFormatter', []).filter('address', function () {
 return function (input) {
     return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
 };
});

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
 GScope = $scope;

 $scope.apiVersion = 41;

 $scope.consumeKey = '3MVG9zlTNB8o8BA1OFO2Hhl692YjoPxmPwuvEgolJr5HCOUUMzufXb18pkYPKPnRguMKKJpL2Lw==';
 $scope.secret = '189652109001009322';
 $scope.oauthRedirectUrl = 'https://mohan-chinnappan-n.github.io/sfdc/redirect.html';

 $scope.objectLabel = 'Rider History';
 $scope.objectAPIName = $scope.objectLabel.replace(/[ ]/g,'_') + '__b';
 $scope.objectPluralLabel =  $scope.objectLabel + 's';

 $scope.indexLabel = 'Rider History Index';
 $scope.indexAPIName =  $scope.indexLabel.replace(/[ ]/g,'_');

 $scope.updateAPIName = function(){
   //alert('updateAPIName')
   $scope.objectAPIName = $scope.objectLabel.replace(/[ ]/g,'_') + '__b';
   $scope.objectPluralLabel = $scope.objectLabel;
 }

 $scope.updateIndexAPIName = function(){
   //alert('updateAPIName')
   $scope.indexAPIName = $scope.indexLabel.replace(/[ ]/g,'_') ;
 }
 $scope.sfdcLogin = function() {
   alert('sfdcLogin');
   console.log(jsforce);
   jsforce.browser.init({ clientId: [$scope.consumeKey], redirectUri: [$scope.oauthRedirectUrl] });
   jsforce.browser.on('connect', function(conn) {
     alert('connect')
      conn.query('SELECT Id, Name FROM Account', function(err, res) {
       if (err) { return alert(err); }

  });
});
 }



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
    +'\n\t  <fullName>' + field.fullName + '</fullName>'
    +'\n\t  <label>' + field.label + '</label>'
    +'\n\t  <required>' + field.required + '</required>'
    +'\n\t  <type>' + field.type + '</type>'

  ;
  if (field.length !== undefined)    fields += '\n\t  <length>' + field.length + '</length>'
  if (field.unique !== undefined)    fields += '\n\t  <unique>' + field.unique + '</unique>'
  if (field.scale !== undefined)     fields +='\n\t  <scale>' + field.scale + '</scale>';
  if (field.precision !== undefined) fields +='\n\t  <precision>' + field.precision + '</precision>'
  fields +=  '\n </fields>';
  //console.log(fields);

 //=== indexes
   if (field.indexed) {
     indexes +='\n <fields>\n'
       + '\n\t<name>' + field.fullName + '</scale>'
       + '\n\t<sortDirection>' + field.indexed + '</sortDirection>'
       + '\n</fields>'
       ;
  }
  if (field.readable || field.editable) {
    fieldPermissions +=
  '\n<fieldPermissions>' +
  '\n\t<field>' + $scope.objectAPIName + '.' + field.fullName + '</field>'
   if (field.readable) fieldPermissions += '\n\t<readable>true</readable>' ;
   if (field.editable) fieldPermissions += '\n\t<editable>true</editable>' ;
  fieldPermissions += '\n</fieldPermissions>';
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
  '    <version>' + $scope.apiVersion + '.0' + '</version>\n' +
  '</Package>\n'
  ;
  $scope.fields = fields;
  $scope.indexes = indexes;

  $scope.objectXML =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">\n' +
  '\t<deploymentStatus>Deployed</deploymentStatus>\n' +

  '\t<label>'  + $scope.objectLabel + '</label>\n' +
  '\t<pluralLabel>' + $scope.objectPluralLabel + '</pluralLabel>\n'

  + $scope.fields
  + $scope.indexes
  + '\n\t</indexes>'
  +'\n\t</CustomObject>'
  ;

  $scope.permissionsetXMl =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">\n'
  + fieldPermissions
  + '\n</PermissionSet>'
  ;

}



 $scope.validateFields = function() {
   //console.log($scope.objectAPIName)
  if ($scope.objectAPIName == undefined     || $scope.objectAPIName.length === 0) { alert('Object API Name is required!'); return null; }
  if ($scope.objectLabel == undefined       || $scope.objectLabel.length === 0)   { alert('Object Label is required!'); return null; }
  if ($scope.objectPluralLabel == undefined || $scope.objectPluralLabel.length === 0) { alert('Object Plural Label is required!'); return null; }

  if ($scope.indexAPIName == undefined || $scope.indexAPIName.length === 0) { alert('Index API Name is required!'); return null; }
  if ($scope.indexLabel == undefined   || $scope.indexLabel.length === 0 )  { alert('Index Label is required!'); return null; }

 }
 $scope.createZipFile = function () {
    var result = $scope.validateFields();
    if (result === null) return;
    $scope.prepString();

    var zip = new JSZip();
    zip.file('package.xml', $scope.packagexml)
    var objects = zip.folder("objects");
    objects.file( $scope.objectAPIName + ".object", $scope.objectXML );
    var permissionsets = zip.folder("permissionsets");
    permissionsets.file($scope.objectAPIName.replace(/__b/,'') + ".permissionset",  $scope.permissionsetXMl );


    zip.generateAsync({type:"blob"})
    .then(function(content) {
        $scope.packageDownloaded = true;
        saveAs(content, $scope.objectAPIName.replace(/__b/,'') + "_package.zip");
    });
 }

 $scope.gridOptions = {
   //rowHeight: 25
   //,enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
   enableColumnAutoFit: true,
   enableColumnResizing: true,
   enableFiltering: true,

   enableRowSelection: true,
   enableColumnMenus: true,
   enableRowHeaderSelection: true,

 };

 $scope.addNewItem=function() {
      $scope.gridOptions.data.push( { fullName: 'Test add ', label: 'Test add' });
    };

    $scope.insertNewItem=function() {
      var currentSelection = $scope.gridApi.selection.getSelectedRows();
      //console.log(currentSelection.length);
      if (currentSelection.length !== 1) {
        alert('Maker sure that you have selected one row for deletion!')
        return;
      }
      var row = currentSelection[0];

      var index = $scope.gridOptions.data.indexOf(row);
      $scope.gridOptions.data.splice(index, 0,  { fullName: 'Test insert ', label: 'Test insert' });
    };


    $scope.deleteRow=function() {
      var currentSelection = $scope.gridApi.selection.getSelectedRows();
      //console.log(currentSelection.length);
      if (currentSelection.length !== 1) {
        alert('Maker sure that you have selected one row for deletion!')
        return;
      }
      var row = currentSelection[0];
      console.log(row)
      var index = $scope.gridOptions.data.indexOf(row);
      $scope.gridOptions.data.splice(index,1);
      //$scope.apply();
    };



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

//======
}])

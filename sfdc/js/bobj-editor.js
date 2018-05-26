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

'ui.select',

'addressFormatter']);


angular.module('addressFormatter', []).filter('address', function () {
 return function (input) {
     return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
 };
});

app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
 GScope = $scope;

 $scope.apiVersion = 42;

$scope.CLIENT_ID='3MVG9zlTNB8o8BA0.U1.lKvWEVqJaJd9mstFQeMsjVt61sMuRtDn9E7AFEtPFCZK76XJtxTyY4kDdvvCGIVrd';
$scope.REDIRECT_URL='https://mohan-chinnappan-n.github.io/sfdc/redirect.html';
$scope.RESPONSE_TYPE="token";
if (window.localStorage.urlParams !== undefined) {
  //alert('test')
  $scope.oauth2Parms = JSON.parse(window.localStorage.urlParams)
}



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
       + '\n\t<name>' + field.fullName + '</name>'
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
  + '\n<label>' + $scope.objectLabel + ' Permission Set</label>\n'
  + '\n</PermissionSet>'
  ;

}


// rest
$scope.restGet = function(url) {

  var headers = {
    "Authorization": "Bearer " + $scope.oauth2Parms.access_token,
    'Content-Type' : 'application/json'
  };
  if (url === undefined) url = $scope.oauth2Parms.instance_url + '/services/data/v' + $scope.apiVersion + '.0/';
  console.log(url);

  $http.jsonp(url, {
      headers: headers,
    }).then(function(result) {
        console.log(result);
    })
    .catch(function(err, status) {
      console.error(' error', err, status);
    });
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
    //objects.file('package.xml', $scope.packagexml)
    var permissionsets = zip.folder("permissionsets");
    //permissionsets.file('package.xml', $scope.packagexml)

    permissionsets.file($scope.objectAPIName.replace(/__b/,'') + ".permissionset",  $scope.permissionsetXMl );
    $scope.packageZipFilename = $scope.objectAPIName.replace(/__b/,'') + "_package.zip";



    zip.generateAsync({type:"blob"})
    .then(function(content) {
        $scope.packageDownloaded = true;
        //alert('test')
        saveAs(content, $scope.packageZipFilename);
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

   //---

   enableGridMenu: true,
   enableSelectAll: true,

   exporterCsvFilename: 'bigobjects_def.csv',
   exporterPdfDefaultStyle: {
     fontSize: 9
   },
   exporterPdfTableStyle: {
     margin: [30, 30, 30, 30]
   },
   exporterPdfTableHeaderStyle: {
     fontSize: 10,
     bold: true,
     italics: true,
     color: 'red'
   },
   exporterPdfHeader: {
     text: "Big Object",
     style: 'headerStyle'
   },
   exporterPdfFooter: function(currentPage, pageCount) {
     return {
       text: currentPage.toString() + ' of ' + pageCount.toString(),
       style: 'footerStyle'
     };
   },
   exporterPdfCustomFormatter: function(docDefinition) {
     docDefinition.styles.headerStyle = {
       fontSize: 22,
       bold: true
     };
     docDefinition.styles.footerStyle = {
       fontSize: 10,
       bold: true
     };
     return docDefinition;
   },
   exporterPdfOrientation: 'portrait',
   exporterPdfPageSize: 'LETTER',
   exporterPdfMaxGridWidth: 500,
   exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location"))

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
        editableCellTemplate: 'uiSelect',
        editDropdownOptionsArray: [ 'Text'
           ,'Number'
           ,'Date'
           ,'DateTime'
           ,'Email'
           ,'Checkbox'
           ,'Currency'
           ,'Percent'
           ,'Phone'
           ,'TextArea'
           ,'URL'
            ]
      },

      { name: 'indexed', displayName: 'Indexed' , type: 'string', width: '10%',
        editableCellTemplate: 'uiSelect', editDropdownOptionsArray: [ 'DESC', 'ASC' ]
      },


      { name: 'required', displayName: 'Required' , type: 'boolean', width: '6%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.required">' },

      { name: 'length', displayName: 'Length' , type: 'number', width: '6%' },
      { name: 'precision', displayName: 'Precision' , type: 'number', width: '6%' },
      { name: 'scale', displayName: 'Scale' , type: 'number', width: '5%' },




      { name: 'unique', displayName: 'Unique' , type: 'boolean', width: '8%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.unique">'
      },

      { name: 'readable', displayName: 'Readable' , type: 'boolean', width: '8%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.readable">'

      },
      { name: 'editable', displayName: 'Editable' , type: 'boolean', width: '6%',
        cellTemplate: '<input type="checkbox" ng-model="row.entity.editable">'


       },








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
 $http.get('./data/bigobjects/bigobjectsDef.json?v=10')
   .success(function(data) {
     $scope.gridOptions.data = data;
   });

//======
}])

// dropdown support
. directive('uiSelectWrap', uiSelectWrap);
uiSelectWrap.$inject = ['$document', 'uiGridEditConstants'];
function uiSelectWrap($document, uiGridEditConstants) {
  return function link($scope, $elm, $attr) {
    $document.on('click', docClick);

    function docClick(evt) {
      if ($(evt.target).closest('.ui-select-container').length === 0) {
        $scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
        $document.off('click', docClick);
      }
    }
  };
}

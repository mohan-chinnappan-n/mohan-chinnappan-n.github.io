// md2html.js

// get those elements with the class 'md' 
//  convert their content from md to html
var eles = document.getElementsByClassName('md');
for(var i = 0; i < eles.length; i++) {
     var content = eles[i].innerHTML;
     eles[i].innerHTML =  converter.makeHtml(content);
}}

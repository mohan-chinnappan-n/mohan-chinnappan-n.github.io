// book.js
Split(['#menu', '#content'],  {sizes: [20, 80]});
var converter = new showdown.Converter();
var eles = document.getElementsByClassName('md');
for(var i = 0; i < eles.length; i++) {
         var content = eles[i].innerHTML;
         eles[i].innerHTML =  converter.makeHtml(content);
}



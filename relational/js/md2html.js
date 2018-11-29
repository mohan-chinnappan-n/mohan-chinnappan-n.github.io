// md2html.js

var query = location.search.substr(1);
var result = {};
query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
});
var ver = Math.floor(Math.random() * 5000);
var folder = 'md';
var file = folder + '/' + result.f + '.md?v=' + ver;
var converter = new showdown.Converter();
// --------
function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var content = rawFile.responseText;
                document.getElementById('html').innerHTML =  converter.makeHtml(content);
            }
        }
    }
    rawFile.send(null);
}
//-----------
readTextFile();

// slidereader.js
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var content = rawFile.responseText;
                  document.getElementById('source').innerHTML = content
                 }
            }
        }
    rawFile.send(null);
}


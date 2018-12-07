// bookreader.js
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var content = rawFile.responseText.replace(/\.md/g,'');
                var items = content.split('\n');
                items.forEach(function(item) {
                  if (item.trim().length !== 0) { 
                  // iframe
                  var elMd = document.createElement('iframe');
                  elMd.setAttribute('src','reader.html?f=' +item);
                  elMd.setAttribute('width','100%');
                  elMd.setAttribute('height','100%');
                  elMd.setAttribute('id',item);
                  document.getElementById('mds').append(elMd);
                  // toc li
                  var el =   document.createElement('li');
                  el.innerHTML = '<a href="#' + item + '">' + item + '</a>';
                  el.classList.add('list-group-item');
                  document.getElementById('toc').append(el);
                 }
                });
            }
        }
    }
    rawFile.send(null);
}



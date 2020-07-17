
    // based on the work from http://viz-js.com/
    // modifications: mohan.chinnappan.n

    /*
       dot - filter for drawing directed graphs

       neato - filter for drawing undirected graphs
       twopi - filter for radial layouts of graphs
       circo - filter for circular layout of graphs
       fdp - filter for drawing undirected graphs
       sfdp - filter for drawing large undirected graphs
       patchwork - filter for squarified tree maps
       osage - filter for array-based layouts

       */

          // set the url based on the select box selection
    function setUrl(elem) {
       //alert(elem.value);
       //console.log(result.f);
       var url = window.location.href.split('?')[0] + '?f=' + elem.value; 
       window.location.href = url;
    }

(function() {


    var editor = ace.edit("editor");
    editor.getSession().setMode("ace/mode/dot");

 
    var query = location.search.substr(1);
    var qresult = {};
    query.split("&").forEach(function(part) {
          var item = part.split("=");
          qresult[item[0]] = decodeURIComponent(item[1]);
    });
    //console.log(result.f);
    if (qresult.f === undefined) {
      qresult.f = 'unix';
    }

    // set the select box with requested file
    document.getElementById('samples').value = qresult.f;

    // reading the resource
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET",   './data/' + qresult.f + '.dot', false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var fileContent = rawFile.responseText;
                editor.setValue(fileContent);
            }
        }
    }
    rawFile.send(null);







var saveSrcButton = document.getElementById('save');
saveSrcButton.addEventListener('click', saveSourceToFile);

function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}

var saveGraphButton = document.getElementById('saveGraph');
saveGraphButton.addEventListener('click', saveGraphToFile);


var checker = document.getElementById('showRawOutput');
 
 // when unchecked or checked, run the function
checker.onchange = function(){
    if(this.checked){
      saveGraphButton.disabled = false;
    } else {
      saveGraphButton.disabled = true;
    }
}

// read file
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var contents = "";
  var reader = new FileReader();
  reader.onload = function(e) {
    contents = e.target.result;
    console.log(contents);
    editor.setValue(contents);
  };
  reader.readAsText(file);
}

document.getElementById('file-input').onchange = function(e) {
  readSingleFile(e);
}


// save to file
 function saveSourceToFile() {
    //var textToWrite = document.getElementById('textArea').innerHTML;
    
      var fileContent = editor.getValue();
      var textFileAsBlob = new Blob([ fileContent ], { type: 'text/plain' });
      var fileNameToSaveAs = "out.dot";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

  downloadLink.click();
}


 function saveGraphToFile() {
    //var textToWrite = document.getElementById('textArea').innerHTML;
    
    var fileContent = document.getElementById('text').innerHTML;
    fileContent = fileContent.replace(/&apos;/g, "'")
               .replace(/&quot;/g, '"')
               .replace(/&gt;/g, '>')
               .replace(/&lt;/g, '<')
               .replace(/&amp;/g, '&')
               ;
     var textFileAsBlob = new Blob([ fileContent ], { type: 'text/plain' });
     var fileNameToSaveAs = "out.svg";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

  downloadLink.click();
}



//======






    var beforeUnloadMessage = null;

    var resizeEvent = new Event("paneresize");
    Split(['#editor', '#graph'], {
      sizes: [25, 75],
      onDragEnd: function() { 
        var svgOutput = document.getElementById("svg_output");
        if (svgOutput != null) {
          svgOutput.dispatchEvent(resizeEvent);
        }
      }
    });
    
   var parser = new DOMParser();
    var worker;
    var result;

    function updateGraph() {
      if (worker) {
        worker.terminate();
      }

      document.querySelector("#output").classList.add("working");
      document.querySelector("#output").classList.remove("error");

      worker = new Worker("./worker.js");

     // pass the value from  the editor
      worker.onmessage = function(e) {
        document.querySelector("#output").classList.remove("working");
        document.querySelector("#output").classList.remove("error");
       
        // data fromt the editor
        result = e.data;
        
        updateOutput();
      }

      worker.onerror = function(e) {
        document.querySelector("#output").classList.remove("working");
        document.querySelector("#output").classList.add("error");
        
        var message = e.message === undefined ? "An error occurred while processing the graph input." : e.message;
        
        var error = document.querySelector("#error");
        while (error.firstChild) {
          error.removeChild(error.firstChild);
        }
        
        document.querySelector("#error").appendChild(document.createTextNode(message));
        
        console.error(e);
        e.preventDefault();
      }

      //======
      
      var params = {
        // editor content
        src: editor.getSession().getDocument().getValue(),
        // options selected
        options: {
          engine: document.querySelector("#engine select").value,
          format: document.querySelector("#format select").value
        }
      };
      
      // Instead of asking for png-image-element directly, which we can't do in a worker,
      // ask for SVG and convert when updating the output.
      
      if (params.options.format == "png-image-element") {
        params.options.format = "svg";
      }
      
      worker.postMessage(params);
    } // updateGraph
   
    
    //========

    function updateOutput() {
      var graph = document.querySelector("#output");

      var svg = graph.querySelector("svg");
      if (svg) {
        graph.removeChild(svg);
      }

      var text = graph.querySelector("#text");
      if (text) {
        graph.removeChild(text);
      }

      var img = graph.querySelector("img");
      if (img) {
        graph.removeChild(img);
      }
      
      if (!result) {
        return;
      }
      
      if (document.querySelector("#format select").value == "svg" && !document.querySelector("#raw input").checked) {
        var svg = parser.parseFromString(result, "image/svg+xml").documentElement;
        svg.id = "svg_output";
        graph.appendChild(svg);

        // zooming 
        panZoom = svgPanZoom(svg, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 0.1
        });

        svg.addEventListener('paneresize', function(e) {
          panZoom.resize();
        }, false);
        window.addEventListener('resize', function(e) {
          panZoom.resize();
        });
      } else if (document.querySelector("#format select").value == "png-image-element") {
        // use viz.js to convert the dot file into image
        var image = Viz.svgXmlToPngImageElement(result);
        // add that image
        graph.appendChild(image);
      } else {
        var text = document.createElement("div");
        text.id = "text";
        text.appendChild(document.createTextNode(result));
        graph.appendChild(text);
      }
    }

    // change handler for the editor
    editor.on("change", function() {
      updateGraph();
      beforeUnloadMessage = "Your changes will not be saved.";
    });
    
    window.addEventListener("beforeunload", function(e) {
      return beforeUnloadMessage;
    });
    
    document.querySelector("#engine select").addEventListener("change", function() {
      updateGraph();
    });

    document.querySelector("#format select").addEventListener("change", function() {
      if (document.querySelector("#format select").value === "svg") {
        document.querySelector("#raw").classList.remove("disabled");
        document.querySelector("#raw input").disabled = false;
      } else {
        document.querySelector("#raw").classList.add("disabled");
        document.querySelector("#raw input").disabled = true;
      }
      
      updateGraph();
    });

    document.querySelector("#raw input").addEventListener("change", function() {
      updateOutput();
    });
    
    updateGraph();

  })();
 

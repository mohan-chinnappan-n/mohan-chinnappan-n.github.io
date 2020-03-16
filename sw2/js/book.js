// book.js

// author: mohan chinnappan

(function() { 
   
    // set the titles 
    var title = document.getElementById('title');
    title.innerHTML = config.title;
    var appName = document.getElementById('appName');
    appName.innerHTML = config.title;
    var mainTopic = document.getElementById('mainTopic');
    mainTopic.innerHTML = config.title;
    var contentTitle = document.getElementById('contentTitle');
   contentTitle.innerHTML = config.title;
 


    Split(['#menu', '#content'],  {sizes: [20, 80]});
    var converter = new showdown.Converter();
    var eles = document.getElementsByClassName('md');
    for(var i = 0; i < eles.length; i++) {
             var content = eles[i].innerHTML;
             eles[i].innerHTML =  converter.makeHtml(content);
    }

})();


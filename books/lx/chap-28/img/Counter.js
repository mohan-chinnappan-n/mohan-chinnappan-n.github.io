// simple Counter lib

// singleton
window.counter = (function() {
   var value = 0;
   return { // returns 2 functions

       inc: function() {
            return ++value;
       },
       dec: function() {
        return --value;
       },
       getValue : function () {
           return value;
       }
   }
} () );

// non-singleton
window.counter2 = function() {
    var value = 0;
 
    return {
        inc : function() { return ++value; },
        dec : function() { return --value; },
        getValue: function () { return value; }
    };
    
 };



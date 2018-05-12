// Component Controller 
//  it can have handlers
//  Controller can make use of Helper
//  Help contains reusable methods the Controller can make use of
//  
//  -------------------Benefits of helper----------------------
/* Since Helper is shared across everything,
 *  it allows us to share and keep logic across of Controllers and Renderers in one place
 * 
 * It also helps us keep logic within Controllers and Renderers lean.
*/
//  --------------------------------------------------
//  
({
 
    
    // onclick handler for the button
    // brings in 'component' and 'helper'
    changeGreeting : function(component,helper) {
        
        // get the new Greeting from the helper
        var newGreeting = helper.getGreeting();
        // set this component variable (v.greeting) to the 'newGreeting'       
        component.set("v.greeting", newGreeting);
        
    }
    
})

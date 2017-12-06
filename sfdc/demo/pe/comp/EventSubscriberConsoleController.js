({
    onCometdLoaded : function (component, event, helper){
        var cometd = new org.cometd.CometD() // from cometd.js
        // set this cometd object in the component attribute
        component.set('v.cometd', cometd);
        if (component.get('v.sessionId') != null) {
            // let us connect to cometd
            helper.connectCometd(component)
        }

    },

    onInit : function(component, event, helper) {
        /*
         * component.set('v.notifications', [
            {  message: 'Furnace Power ON'},
            {  message: 'Furnace Power Off'},


        ]);
        */

         component.set('v.cometdSubscriptions',[]);
         component.set('v.notifications',[]);

         // disconnect cometd connection when leaving page
         window.addEventListener('unload', function(evt){
             helper.disconnectCometd(component)
         })

         // get the server-side apex @AuraEnabled method
         var action = component.get('c.getSessionId');
         // callback
         action.setCallback(this, function(res){
             // successful response?
             if (component.isValid() && res.getState() === 'SUCCESS') {
                 // store the sessionId in the component attribute
                 component.set('v.sessionId', res.getReturnValue());
                 // cometd client is available?
                 if (component.get('v.cometd') != null){
                     helper.connectCometd(component);
                 }
             } else {
                 console.error(res);
             }
         })
         // queue it for async execution
         $A.enqueueAction(action);


         helper.displayToast(component, 'succes', 'Ready to receive Furnace Power Notifictions');


     },

    onClear: function(component, event, helper) {
        component.set('v.notifications',[]);
    },

    onToggleMute: function(component, event, helper){
        var isMuted = component.get('v.isMuted');
        component.set('v.isMuted', !isMuted);
        helper.dispalyToast(compoent, 'success', "Notification: " + (!isMuted ? 'muted' : 'unmuted'))
    }



})

// Helper
// Helper provides reusable functions to the Controller
({
    getGreeting : function(cmp, helper) {
        // get a randomized greeting message
        var newGreetings= ["Bonjour!", "வணக்கம் ", " Buenos días", "Buon giorno!", " السلام علیکم", "ನಮಸ್ಕಾರ", "నమస్కారం " ];
        var rand = Math.floor((Math.random() * 6 ) );
        return newGreetings[rand];
        
    }
})

window.onload = function() {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        theme: 'purple',
        submitCallback: function() {
            conversationalForm.addRobotChatResponse("Alright, you are done.");
        }
    });
};
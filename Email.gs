function findCheckinEmail_(todayString, todayDay){
    const groupEmail = config.groupEmail;
    const inboxThreads = GmailApp.getInboxThreads();
    for (let i = 0; i < inboxThreads.length; i++) {
        const emailThread = inboxThreads[i];
        const toAddress = emailThread.getMessages()[0].getTo();
        let emailSubject = emailThread.getFirstMessageSubject();
        emailSubject = emailSubject.trim().toLowerCase();
        console.log(emailSubject)
        
        if((emailSubject == todayString || emailSubject == todayDay) && toAddress == groupEmail) {
            return emailThread
        }
        else {
            console.log("This is not the email I'm looking for!")
        }
    }
}

function replyToThread_(emailThread, myEmail, reply_message){
    const emailReplies = emailThread.getMessages();
    for(let j = 0; j < emailReplies.length; j++) {
        console.log(emailReplies[j].getFrom())
        if(emailReplies[j].getFrom() === myEmail){
            console.log("This script replied earlier")
            return "This script replied earlier";
        }
    }
    emailThread.replyAll(reply_message, {
      name: config.myName
    });
    console.log("replied")
    return "replied";
}
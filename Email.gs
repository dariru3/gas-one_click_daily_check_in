function findCheckinMail(todayString, todayDay){
    const inboxThreads = GmailApp.getInboxThreads();
    for (let i = 0; i < inboxThreads.length; i++) {
        const emailThread = inboxThreads[i];
        const toAddress = emailThread.getMessages()[0].getTo();
        const emailSubject = emailThread.getFirstMessageSubject();
        emailSubject = emailSubject.trim().toLowerCase();
        
        if((emailSubject == todayString || emailSubject == todayDay) && toAddress == "EditorialGroup <edit_all@link-cc.co.jp>") {
            return emailThread
        }
        else {
            console.warn("Check-in email not found!")
        }
    }
}

function replyToThread(emailThread, myEmail, reply_message){
    const emailReplies = emailThread.getMessages();
    for(let j = 0; j < emailReplies.length; j++) {
        if(emailReplies[j].getFrom() === myEmail){
            console.log("This script replied earlier");
            return;
        }
    }
    // emailThread.replyAll(reply_message);
    console.log("replied");
    return;
}
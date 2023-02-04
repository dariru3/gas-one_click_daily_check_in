function autoReply() {
  const myEmail = Session.getActiveUser().getEmail();
  console.log("email:", myEmail)
  const reply_message = "Good morning";
  let reply_flag = false;
  console.log("replied:", reply_flag)

  const inboxThreads = GmailApp.getInboxThreads();
  for (let i = 0; i < inboxThreads.length; i++) {
    const emailThread = inboxThreads[i];
    let emailSubject = emailThread.getFirstMessageSubject();
    emailSubject = emailSubject.trim().toLowerCase();
    const todayDay = new Date().toLocaleString('default', { weekday: 'long' }).toLowerCase();
    
    if(emailSubject == todayDay && !reply_flag) {
      emailThread.markUnimportant();
      const emailReplies = emailThread.getMessages();
      for(let j = 0; j < emailReplies.length; j++) {
        console.log("replies from:", emailReplies[j].getFrom())
        if(emailReplies[j].getFrom() === myEmail){
          reply_flag = true;
          console.log("This script replied earlier")
          return;
        }
      }
      emailThread.replyAll(reply_message);
      reply_flag = true;
      console.log("replied")
      return;
    }
  }
}

function autoReply() {
  const dayOff = checkCalendar();
  if(dayOff == true){
    return
  };

  const today = new Date();
  const todayDay = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const todayDate = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' });
  const todayString = todayDay + ' ' + todayDate;
  console.log(todayString)

  if(todayDay == "saturday" || todayDay == "sunday"){
    console.log("Have a nice weekend!")
    return
  }

  const myEmail = Session.getActiveUser().getEmail();
  console.log("email:", myEmail)
  const reply_message = "Good morning";

  const inboxThreads = GmailApp.getInboxThreads();
  for (let i = 0; i < inboxThreads.length; i++) {
    const emailThread = inboxThreads[i];
    let emailSubject = emailThread.getFirstMessageSubject();
    emailSubject = emailSubject.trim().toLowerCase();
    
    if(emailSubject == todayString || emailSubject == todayDay) {
      emailThread.markUnimportant();
      const emailReplies = emailThread.getMessages();
      for(let j = 0; j < emailReplies.length; j++) {
        console.log("replies from:", emailReplies[j].getFrom())
        if(emailReplies[j].getFrom() === myEmail){
          console.log("This script replied earlier")
          return;
        }
      }
      // emailThread.replyAll(reply_message);
      console.log("replied")
      return;
    }
  }
}

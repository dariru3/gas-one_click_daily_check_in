function autoReply() {
  const dayOff = checkCalendar();
  if(dayOff == true){
    console.log("Have a nice day off!")
    return
  };

  const today = new Date();
  const todayDay = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const todayDate = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' });
  const todayString = todayDay + ' ' + todayDate;
  console.log(todayString);

  if(todayDay == "sunday"){
    console.log("Have a nice weekend!");
    return
  }

  const myEmail = Session.getActiveUser().getEmail();
  console.log("email:", myEmail);
  const reply_message = "Good morning";

  const inboxThreads = GmailApp.getInboxThreads();
  for (let i = 0; i < inboxThreads.length; i++) {
    const emailThread = inboxThreads[i];
    let toAddress = emailThread.getMessages()[0].getTo();
    let emailSubject = emailThread.getFirstMessageSubject();
    emailSubject = emailSubject.trim().toLowerCase();
    
    if((emailSubject == todayString || emailSubject == todayDay) && toAddress == "EditorialGroup <edit_all@link-cc.co.jp>") {
      emailThread.markUnimportant();
      console.log("To:", toAddress);
      const emailReplies = emailThread.getMessages();
      for(let j = 0; j < emailReplies.length; j++) {
        console.log("replies from:", emailReplies[j].getFrom());
        if(emailReplies[j].getFrom() === myEmail){
          console.log("This script replied earlier");
          return;
        }
      }
      emailThread.replyAll(reply_message);
      console.log("replied");
      return;
    }
  }
}

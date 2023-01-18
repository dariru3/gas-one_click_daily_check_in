function autoReply() {
  const myEmail = Session.getActiveUser().getEmail();
  console.log("email:", myEmail)
  const reply = "Good morning";
  let replied = false;
  const threads = GmailApp.getInboxThreads();
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const subject = thread.getFirstMessageSubject();
    if(subject.trim().toLowerCase() == new Date().toLocaleString('default', { weekday: 'long' }).toLowerCase() && !replied) {
      const replies = thread.getMessages();
      for(let j = 0; j < replies.length; j++) {
        console.log("replies from:", replies[j].getFrom())
        if(replies[j].getFrom() === myEmail){
          replied = true;
          console.log("This script replied earlier")
          return;
        }
      }
      thread.replyAll(reply);
      replied = true;
      console.log("replied")
      return;
    }
  }
}

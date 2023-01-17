function autoReply() {
  const myEmail = Session.getActiveUser().getEmail();
  const reply = "Good morning";
  let replied = false;
  const threads = GmailApp.getInboxThreads();
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const subject = thread.getFirstMessageSubject();
    const replies = thread.getMessages();
    if(replied) {
      console.log("This script has already replied this session")
      continue;
    }
    for (let i = 0; i < replies.length; i++) {
        if(replies[i].getFrom() === myEmail){
            replied = true;
            console.log("This script replied earlier")
            break;
        }
    }
    if (subject.trim().toLowerCase() == new Date().toLocaleString('default', { weekday: 'long' }).toLowerCase() && !replied) {
      thread.replyAll(reply);
      replied = true;
      console.log("replied")
      return;
    }
  }
}

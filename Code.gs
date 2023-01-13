function autoReply() {
  const threads = GmailApp.getInboxThreads();
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const message = thread.getMessages()[0];
    const subject = message.getSubject();
    const reply = "Good morning";
    if (subject.trim().toLowerCase() == new Date().toLocaleString('default', { weekday: 'long' }).toLowerCase()) {
      console.log(thread.getFirstMessageSubject());
      console.log(message.getFrom());
      console.log(reply);
      thread.replyAll(reply);
      break;
    } else {
      continue
    }
  }
}

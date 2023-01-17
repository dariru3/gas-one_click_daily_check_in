function autoReply2_() {
  const threads = GmailApp.getInboxThreads();
  const greetings = [
    "Good morning",
    "Top of the morning",
    "Rise and shine",
    "Morning, sunshine",
    "Happy morning",
    "Mornin'",
    "Good day, morning",
    "Howdy, morning",
    "Well, morning",
    "Yo, morning"
  ];
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const message = thread.getMessages()[0];
    const subject = message.getSubject();
    let reply = "";
    if (subject.trim().toLowerCase() == new Date().toLocaleString('default', { weekday: 'long' }).toLowerCase()) {
      reply = greetings[Math.floor(Math.random() * 10)];
      console.log(reply);
      //thread.reply(reply);
      break;
    } else {
      continue;
    }
  }
}

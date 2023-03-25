function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function autoReply(reply_message) {
  const today = new Date();

  const myEmail = Session.getActiveUser().getEmail();
  const todayDay = getDayDate(today).day;
  const todayString = getDayDate(today).dateString;
  const checkinEmailThread = findCheckinEmail(todayString, todayDay);

  if (checkinEmailThread) {
    return replyToThread(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
}

function replyToThread(emailThread, myEmail, reply_message) {
  const emailReplies = emailThread.getMessages();
  for (let j = 0; j < emailReplies.length; j++) {
    if (emailReplies[j].getFrom() === myEmail) {
      return "This script replied earlier.";
    }
  }
  // emailThread.replyAll(reply_message);
  return "replied";
}

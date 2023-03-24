function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function autoReply() {
  const today = new Date();
  const myEmail = Session.getActiveUser().getEmail();
  const reply_message = "Good morning";
  const todayDay = getDayDate(today).day;
  const todayString = getDayDate(today).dateString;
  const checkinEmailThread = findCheckinEmail(todayString, todayDay);

  if (checkinEmailThread) {
    return replyToThread(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
}

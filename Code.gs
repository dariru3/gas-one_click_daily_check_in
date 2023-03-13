function autoReply() {
  const today = new Date();
  if(checkDayOff(today)){
    return
  };
  const myEmail = Session.getActiveUser().getEmail();
  const reply_message = "Good morning";
  const todayDay = getDayDate(today)[0];
  const todayString = getDayDate(today)[1];
  const checkinEmailThread = findCheckinEmail(todayString, todayDay);
  checkinEmailThread ? replyToThread(checkinEmailThread, myEmail, reply_message) : console.log("Check-in email thread not found.");
}

function autoReply() {
  const today = new Date();
  if(checkDayOff(today)){
    return
  };
  const myEmail = Session.getActiveUser().getEmail();
  const reply_message = "Good morning";
  const todayDay = getDayDate(today).day;
  const todayString = getDayDate(today).dateString;
  const checkinEmailThread = findCheckinEmail(todayString, todayDay);
  checkinEmailThread ? replyToThread(checkinEmailThread, myEmail, reply_message) : console.log("Check-in email thread not found.");
}

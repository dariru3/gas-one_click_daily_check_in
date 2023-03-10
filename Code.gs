function autoReply() {
  const today = new Date();
  const dayOff = checkCalendar(today);
  if(dayOff){
    return
  };

  const todayDay = getDayDate(today)[0];
  const todayString = getDayDate(today)[1];

  const myEmail = Session.getActiveUser().getEmail();
  const reply_message = "Good morning";
  const checkinEmailThread = findCheckinMail(todayString, todayDay);
  replyToThread(checkinEmailThread, myEmail, reply_message);
}

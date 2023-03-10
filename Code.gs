function autoReply() {
  const dayOff = checkCalendar();
  if(dayOff){
    return
  };

  const today = new Date();
  const todayDay = getDayDate(today)[0];
  const todayString = getDayDate(today)[1];

  const myEmail = Session.getActiveUser().getEmail();
  const reply_message = "Good morning";

  const emailThread = findCheckinMail(todayString, todayDay);
  
  replyToThread(emailThread, myEmail, reply_message);
}

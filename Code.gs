function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function autoReply(customMessage) {
  if (typeof customMessage == 'undefined') {
    customMessage = null;
  }
  const today = new Date();

  const myEmail = Session.getActiveUser().getEmail();
  console.log("My email:", myEmail);
  const todayDayPatterns = getDayDate_(today)
  console.log(todayDayPatterns)
  const checkinEmailThread = findCheckinEmail_(todayDayPatterns);
  const reply_message = customMessage || getGreetingBasedOnTime_();

  chatCheckin(reply_message);

  if (checkinEmailThread) {
    return replyToThread_(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
}

function getDayDate_(today){
  // today = new Date()
  const todayDay = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const todayDate = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' });
  const todayString = todayDay + ' ' + todayDate;
  const todayString2 = todayDay + ', ' + today.toLocaleString('en-US', { month: 'long', day: 'numeric'}).toLowerCase();
  const todayString3 = todayDay + ' ' + today.toLocaleString('en-US', { month: 'long', day: 'numeric'}).toLowerCase();
  console.log(todayDate, todayString, todayString2, todayString3)
  return [todayDay, todayString, todayString2, todayString3]
}

function getGreetingBasedOnTime_() {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
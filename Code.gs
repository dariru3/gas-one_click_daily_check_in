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
  const dayDate = todayDay + ' ' + todayDate;
  const dayCommaMonthDate = todayDay + ', ' + today.toLocaleString('en-US', { month: 'long', day: 'numeric'}).toLowerCase();
  const dayMonthDate = todayDay + ' ' + today.toLocaleString('en-US', { month: 'long', day: 'numeric'}).toLowerCase();
  console.log("day:", todayDay,"date:", todayDate, "day and date:", dayDate, "day, month date:", dayCommaMonthDate, "day month date:", dayMonthDate)
  return [todayDay, dayDate, dayCommaMonthDate, dayMonthDate]
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
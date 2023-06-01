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
  const todayDay = getDayDate_(today).day;
  const todayString = getDayDate_(today).dateString;
  const checkinEmailThread = findCheckinEmail_(todayString, todayDay);
  const reply_message = customMessage || getGreetingBasedOnTime_();

  chatCheckin(reply_message);

  if (checkinEmailThread) {
    return replyToThread_(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
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
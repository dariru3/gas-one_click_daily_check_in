function doGet() {
  return HtmlService.createHtmlOutputFromFile("index.html");
}

function autoReply(customMessage) {
  if (typeof customMessage == 'undefined') {
    customMessage = null;
  }
  const today = new Date();

  const myEmail = Session.getActiveUser().getEmail();
  const todayDay = getDayDate(today).day;
  const todayString = getDayDate(today).dateString;
  const checkinEmailThread = findCheckinEmail(todayString, todayDay);
  const reply_message = customMessage || getGreetingBasedOnTime();

  if (checkinEmailThread) {
    return replyToThread(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
}

function getGreetingBasedOnTime() {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
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

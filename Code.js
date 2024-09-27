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

  if (checkinEmailThread) {
    chatCheckin(reply_message);
    replyToThread_(checkinEmailThread, myEmail, reply_message);
  } else {
    return "Check-in email thread not found.";
  }
}

function getDayDate_(today){
  // today = new Date()
  const dayLong = today.toLocaleString('default', { weekday: 'long' }).toLowerCase(); // pattern 1
  const monthSlashDate_num = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }); // pattern 2
  const dayLongSpaceDateSlash_num = `${dayLong} ${monthSlashDate_num}`; // pattern 3
  const monthLongDateNum = today.toLocaleString('en-US', { month: 'long', day: 'numeric'}).toLowerCase();
  const dayLongCommaMonthLongDateNum = `${dayLong}, ${monthLongDateNum}`; // pattern 4
  const dayLongMonthLongDateNum = `${dayLong}, ${monthLongDateNum}`; // pattern 5
  console.log(`
  pattern 1: ${dayLong}
  pattern 2: ${monthSlashDate_num}
  pattern 3: ${dayLongSpaceDateSlash_num}
  pattern 4: ${dayLongCommaMonthLongDateNum}
  pattern 5: ${dayLongMonthLongDateNum}
  `)
  return [dayLong, monthSlashDate_num, dayLongSpaceDateSlash_num, dayLongCommaMonthLongDateNum, dayLongMonthLongDateNum]
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
function checkCalendar() {
  let dayOff = false;
  const calendar = CalendarApp.getDefaultCalendar();
  const today = new Date();

  if(today.getDay() == 0){
    console.log("Today is Sunday. Have anice day off!")
    dayOff = true
  }
  
  const events = calendar.getEventsForDay(today);
  for(const event of events){
    const dayOffEvents = ['有給', '祝日', 'ピットイン休暇']
    if(event.isAllDayEvent() == true && dayOffEvents.includes(event.getTitle())){
      console.log('Have a nice day off!')
      dayOff = true
    }
  }

  return dayOff
}

function getDayDate(today){
  const todayDay = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const todayDate = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' });
  const todayString = todayDay + ' ' + todayDate;

  return [todayDay, todayString]
}
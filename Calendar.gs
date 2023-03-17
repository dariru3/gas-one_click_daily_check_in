function checkDayOff(today) {
  const calendar = CalendarApp.getDefaultCalendar();

  if(today.getDay() == 0){
    console.log("Today is Sunday. Have a nice day off!")
    return true
  }
  
  const events = calendar.getEventsForDay(today);
  for(const event of events){
    const dayOffEvents = config.dayOffEvents;
    if(event.isAllDayEvent() == true && dayOffEvents.includes(event.getTitle())){
      console.log('Have a nice day off!')
      return true
    }
  }
}

function getDayDate(today){
  const todayDay = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const todayDate = today.toLocaleString('en-US', { month: 'numeric', day: 'numeric' });
  const todayString = todayDay + ' ' + todayDate;

  return { day: todayDay, dateString: todayString }
}
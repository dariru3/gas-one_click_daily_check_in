/**
 * Unused. 
 * BUG: Didn't catch day off.
 * Shouldn't be timed automated anyway.

function checkDayOff_(today) {
  const calendar = CalendarApp.getDefaultCalendar();

  if(today.getDay() == 0){
    console.log("Today is Sunday. Have a nice day off!")
    return true
  }
  
  const events = calendar.getEventsForDay(today);
  for(const event of events){
    console.log("event:", event.getTitle())
    const dayOffEvents = config.dayOffEvents;
    if(event.isAllDayEvent() == true && dayOffEvents.includes(event.getTitle())){
      console.log('Have a nice day off!')
      return true
    }
  }
  console.warn("Today is a work day")
}
*/
function checkCalendar() {
  const calendar = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const events = calendar.getEventsForDay(today);

  for(const event of events){
    console.log(event.getTitle())
    if(event.isAllDayEvent() == true && event.getTitle() == '有給'){
      console.log('Have a nice day off!')
      return
    }
  }

}

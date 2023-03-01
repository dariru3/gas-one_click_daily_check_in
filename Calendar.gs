function checkCalendar() {
  const calendar = CalendarApp.getDefaultCalendar();
  const today = new Date();
  // today.setDate(today.getDate()+1) // for testing
  const events = calendar.getEventsForDay(today);

  for(const event of events){
    // console.log(event.getTitle())
    const dayOff = ['有給', '祝日', 'ピットイン休暇']
    if(event.isAllDayEvent() == true && dayOff.includes(event.getTitle())){
      console.log('Have a nice day off!')
      return true
    }
  }

}

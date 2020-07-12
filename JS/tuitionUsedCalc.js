//* Take user inputs from HTML Dom element, <input id = 'day'> and <input id = 'hourofday'>
//? Could use some kind of JS method to get current day and time automatically? (will update everytime page refreshes/reloads)

//* Set a day constant for when the course finishes and when it starts (i.e. 3 month course => dayFinish = 90) 
//? In the future, can use 'datepicker' to set 'Finish date' and 'Start date' or another 'input' for user to set start and end date?

//* Set constant for 'Total tuition cost'
//? In the future, could change this to user input as well?

//* Based on end date + start date (constants) and current day + time (User inputs), this JS will calculate the 'Tuition Used' value based on the 'proportion of time used in course' and apply the same proportion to the 'Total tuition cost'. This value will be outputted to the HTML span element, <span id = 'tuition'>


function tuitionUsedCalc () {
  const currentDay = document.getElementById('day')
  console.log(currentDay)
}

tuitionUsedCalc()
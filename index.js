//Write your code here
// declearing and initializing an attendee objects
let attendee = {
  attendeeId: " T001",
  name: "Alice Smith",
  event: "JavaScript Confrence",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// function to log attendee name
function logAttendeeName (attendeeObj) {
  console.log(attendeeObj);
}

// function to log ticket price
function logTicketPrice (attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

// function to update ticket type



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
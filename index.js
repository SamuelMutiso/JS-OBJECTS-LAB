//Write your code here
// declearing and initializing an attendee objects
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// function to log attendee name
function logAttendeeName (attendeeObj) {
  console.log(attendeeObj.name);
}

// function to log ticket price
function logTicketPrice (attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

// function to update ticket type
function updateTicketType(attendeeObj, newType) {
  attendeeObj.ticketType = newType;
}

// function to ticket price
// this will take a new type but updates price
function updateTicketPrice(attendeeObj, newPrice) {
  attendeeObj.ticketPrice = newPrice;
}

// function to remove the event property
function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
}

// function to add a checked-in property
function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
}







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
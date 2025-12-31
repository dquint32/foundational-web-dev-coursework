"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: David Quintana
   Date: 11/16/2025

   Filename: lht_table.js
*/

// Step 4: Declare test date
let thisDay = new Date("October 1, 2021");

// Step 5: Create initial table HTML
let tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// Step 6: Declare endDate (14 days after thisDay)
let endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Step 7: Loop through eventDates array
for (let i = 0; i < eventDates.length; i++) {
   // Step 8: Create eventDate object
   let eventDate = new Date(eventDates[i]);
   let eventDay = eventDate.toDateString();
   let eventTime = eventDate.toLocaleTimeString();

   // Check if event falls within 14-day window
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + " at " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}

// Step 9: Close table
tableHTML += "</table>";

// Step 10: Insert table into eventList div
document.getElementById("eventList").innerHTML = tableHTML;

/* 
   Step 11: Code documented with comments.
   This script generates a table of events occurring within 14 days of October 1, 2021.
   It uses arrays eventDates, eventDescriptions, and eventPrices from lht_list.js.
*/

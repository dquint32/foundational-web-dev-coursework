"use strict";

/*
  New Perspectives on HTML5 and CSS3, 8th Edition
  Tutorial 10
  Case Problem 2

  Author: David Quintana
  Date: 11/16/2025

  Filename: vw_results.js

  Purpose:
  - Build the Minnesota congressional election report from data in vw_congminn.js
  - Generate tables per race with candidate details and percentage bar charts

  Data sources (from vw_congminn.js, do not modify):
  - raceTitle: string title for the report (e.g., "Minnesota Congressional Elections")
  - race: array of race names (length 8)
  - candidate: 2D array [race][3] of candidate names
  - party: 2D array [race][3] of party codes "D" | "R" | "I"
  - votes: 2D array [race][3] of vote counts (integers)

  Functions:
  - calcSum(value): callback to accumulate totalVotes
  - calcPercent(value, sum): returns percentage (0–100)
  - candidateRows(raceNum, totalVotes): returns HTML rows for candidates + bars
  - createBar(partyType): returns a single td cell styled by party class
*/

/* Global accumulator used by calcSum() within race loops */
let totalVotes = 0;

/* Callback function to add a value to the running totalVotes */
function calcSum(value) {
  totalVotes += value;
}

/* Calculate percentage for value out of sum (returns number, not formatted) */
function calcPercent(value, sum) {
  return (100 * value / sum);
}

/* Build the full report HTML */
let reportHTML = `<h1>${raceTitle}</h1>`;

/* Loop through each race to build its table */
for (let i = 0; i < race.length; i++) {
  // Reset total votes for this race
  totalVotes = 0;

  // Sum votes for the i-th race using forEach with calcSum
  votes[i].forEach(calcSum);

  // Start table with caption and header row
  reportHTML +=
    `<table>
      <caption>${race[i]}</caption>
      <tr>
        <th>Candidate</th>
        <th>Votes</th>
      </tr>`;

  // Add candidate rows (including percentage bars)
  reportHTML += candidateRows(i, totalVotes);

  // Close the table
  reportHTML += `</table>`;
}

/* Write the report to the first section element in the document */
document.querySelector("section").innerHTML = reportHTML;

/**
 * Return HTML rows for the three candidates in a race.
 * Includes candidate name (with party), vote total, percentage,
 * and a bar consisting of one cell per percentage point.
 *
 * @param {number} raceNum - index of the race in the race/candidate/party/votes arrays
 * @param {number} totalVotes - total votes cast in the race (for percentage calculations)
 * @returns {string} HTML string for three table rows
 */
function candidateRows(raceNum, totalVotes) {
  let rowHTML = "";

  // There are always three candidates per race (indices 0..2)
  for (let j = 0; j <= 2; j++) {
    const candidateName = candidate[raceNum][j];
    const candidateParty = party[raceNum][j];
    const candidateVotes = votes[raceNum][j];

    const candidatePercent = calcPercent(candidateVotes, totalVotes);

    // Candidate info cells: name (party) and votes (percent)
    rowHTML +=
      `<tr>
        <td>${candidateName} (${candidateParty})</td>
        <td>${candidateVotes.toLocaleString()} (${candidatePercent.toFixed(1)}%)</td>`;

    // Add one bar cell per percentage point (floored by loop)
    for (let k = 0; k < candidatePercent; k++) {
      rowHTML += createBar(candidateParty);
    }

    // Close the row
    rowHTML += `</tr>`;
  }

  return rowHTML;
}

/**
 * Create a single td cell styled by party class.
 * "D" -> class="dem"
 * "R" -> class="rep"
 * "I" -> class="ind"
 *
 * @param {string} partyType - "D" | "R" | "I"
 * @returns {string} HTML td element
 */
function createBar(partyType) {
  let barHTML = "";

  switch (partyType) {
    case "D":
      barHTML = `<td class='dem'></td>`;
      break;
    case "R":
      barHTML = `<td class='rep'></td>`;
      break;
    case "I":
      barHTML = `<td class='ind'></td>`;
      break;
    default:
      // Fallback for unexpected codes
      barHTML = `<td></td>`;
  }

  return barHTML;
}

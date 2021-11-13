// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/account_circle_white_24dp.svg';
import './images/plane-background.jpg';
import './images/user-icon.svg';

import {
  fetchSingleTravelerData, 
  fetchAllTrips, 
  fetchAllDestinations
} from './apiCalls';

import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import domUpdates from './domUpdates';

let traveler;
let userId = 44;

const fetchAll = () => {
  const singleTravelerDataPromise = fetchSingleTravelerData(userId);
  const allTripsDataPromise = fetchAllTrips();
  const allDestinationsDataPromise = fetchAllDestinations();
  
  Promise.all([singleTravelerDataPromise, allTripsDataPromise, allDestinationsDataPromise])
    .then(data => {
      const singleTravelerData = data[0];
      const allTripsData = data[1].trips;
      const allDestinationData = data[2].destinations;
      const tripsForTraveler = getTripsForTraveler(singleTravelerData, allTripsData, allDestinationData);
      traveler = new Traveler(singleTravelerData, tripsForTraveler);
      domUpdates.displayTravelerWelcomeMsg(traveler);
    })
}

const getTripsForTraveler = (singleTravelerData, allTripsData, allDestinationData) => {
  const allTripsForSingleTraveler = allTripsData
    .filter((trip) => trip.userID === singleTravelerData.id)
    .map((travelersTrip) => {
      const matchingTripDestination = findDestinationForTrip(travelersTrip, allDestinationData);
      return new Trip(travelersTrip, new Destination(matchingTripDestination));
    });
  return allTripsForSingleTraveler;
}

const findDestinationForTrip = (trip, allDestinationData) => {
  return allDestinationData.find((destination) => destination.id === trip.destinationID);
}

const getTotalTravelExpensesThisYear = (todaysDate = new Date(), allTripsForTraveler) => {
  //need to get the year from todaysDate
  //need to iterate over allTripsForTraveler and filter the ones whose year matches && status has to be approved
  //then use a reduce to calculate the total travel expenses for that year
  //return total cost
}

window.addEventListener('load', fetchAll);

const addNewTripButton = document.querySelector('#addNewTripButton');
addNewTripButton.addEventListener('click', () => {
  domUpdates.displayNewTripForm();
});

const pastTripsButton = document.querySelector('#pastTripsButton');
pastTripsButton.addEventListener('click', () => {
  domUpdates.displayPastTrips(traveler);
});


const presentTripsButton = document.querySelector('#presentTripsButton');
presentTripsButton.addEventListener('click', () => {
  domUpdates.displayPresentTrips(traveler);
});

const upcomingTripsButton = document.querySelector('#upcomingTripsButton');
upcomingTripsButton.addEventListener('click', () => {
  domUpdates.displayUpcomingTrips(traveler);
});

const pendingTripsButton = document.querySelector('#pendingTripsButton');
pendingTripsButton.addEventListener('click', () => {
  domUpdates.displayPendingTrips(traveler);
})
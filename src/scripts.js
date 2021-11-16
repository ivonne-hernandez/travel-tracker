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
  fetchAllDestinations,
} from './apiCalls';

import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import domUpdates from './domUpdates';

let traveler;
let allTrips;
let allDestinations;

const fetchAll = (userId) => {
  const singleTravelerDataPromise = fetchSingleTravelerData(userId);
  const allTripsDataPromise = fetchAllTrips();
  const allDestinationsDataPromise = fetchAllDestinations();
  
  Promise.all([singleTravelerDataPromise, allTripsDataPromise, allDestinationsDataPromise])
    .then(data => {
      const singleTravelerData = data[0];
      allTrips = data[1].trips;
      allDestinations = data[2].destinations;
      const tripsForTraveler = getTripsForTraveler(singleTravelerData, allTrips, allDestinations);
      traveler = new Traveler(singleTravelerData, tripsForTraveler);
      domUpdates.hideLoginPage();
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

const isValidUserLogin = () => {
  const usernameInput = document.querySelector('#usernameInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;
  const usernameSlice1 = usernameInput.slice(0,8);
  const usernameSlice2 = Number(usernameInput.slice(8, usernameInput.length));
  const isValidUserName = usernameSlice1 === `traveler` && 
    usernameSlice2 >= 1 && usernameSlice2 <= 50;
  const isValidPassword = passwordInput === `travel`;

  if (isValidUserName && isValidPassword) {
    return true;
  } else {
    return false;
  }
}

const displayLoginError = () => {
  const loginErrorMsg = document.querySelector('#loginErrorMsg');
  const usernameInput = document.querySelector('#usernameInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;
  const usernameSlice1 = usernameInput.slice(0,8);
  const usernameSlice2 = Number(usernameInput.slice(8, usernameInput.length));
  const isValidUserName = usernameSlice1 === `traveler` && 
    usernameSlice2 >= 1 && usernameSlice2 <= 50;
  const isValidPassword = passwordInput === `travel`;

  if (!isValidUserName || !isValidPassword) {
    loginErrorMsg.innerText = "Please enter a valid username and password";
  }
}

const hideLoginError = () => {
  const loginErrorMsg = document.querySelector('#loginErrorMsg');
  loginErrorMsg.innerText = "";
}

const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const usernameInput = document.querySelector('#usernameInput').value.split('');
  const userId = Number(usernameInput.slice(8, usernameInput.length).join(''));
  if (isValidUserLogin()) {
    hideLoginError();
    fetchAll(userId);
  } else {
    displayLoginError();
  }
})

const addNewTripButton = document.querySelector('#addNewTripButton');
addNewTripButton.addEventListener('click', () => {
  domUpdates.displayNewTripForm(traveler, allTrips, allDestinations);
});

const pastTripsButton = document.querySelector('#pastTripsButton');
pastTripsButton.addEventListener('click', () => {
  domUpdates.displayTrips(traveler.getPastTrips(), "Past");
});

const presentTripsButton = document.querySelector('#presentTripsButton');
presentTripsButton.addEventListener('click', () => {
  domUpdates.displayTrips(traveler.getPresentTrips(), "Present");
});

const upcomingTripsButton = document.querySelector('#upcomingTripsButton');
upcomingTripsButton.addEventListener('click', () => {
  domUpdates.displayTrips(traveler.getUpcomingTrips(), "Upcoming");
});

const pendingTripsButton = document.querySelector('#pendingTripsButton');
pendingTripsButton.addEventListener('click', () => {
  domUpdates.displayTrips(traveler.getPendingTrips(), "Pending");
});

const travelExpensesButton = document.querySelector('#travelExpensesButton');
travelExpensesButton.addEventListener('click', () => {
  domUpdates.displayTravelExpenses(traveler.getTravelExpensesForYear());
});
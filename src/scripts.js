// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import {
  fetchAllTravelersData,
  fetchSingleTravelerData, 
  fetchAllTrips, 
  fetchAllDestinations
} from './apiCalls';

import Traveler from './Traveler';

let tripsDataForTraveler;
let traveler;
let userId = 33;

const fetchAll = () => {
  const allTravelersDataPromise = fetchAllTravelersData();
  const singleTravelerDataPromise = fetchSingleTravelerData(userId);//need to pass in the userId
  const allTripsDataPromise = fetchAllTrips();
  const allDestinationsDataPromise = fetchAllDestinations();
  
  Promise.all([allTravelersDataPromise, singleTravelerDataPromise, allTripsDataPromise, allDestinationsDataPromise])
  .then(data => {
    tripsDataForTraveler = getTripsForTraveler(data[1], data[2]);
    instantiateTraveler(data[1], tripsDataForTraveler)
    // console.log(`allDestinationsDataPromise:`, data[3]);
  })
}

fetchAll();

const getTripsForTraveler = (singleTravelerData, allTripsData) => {
  const allTripsForSingleTraveler = allTripsData.trips
    .filter((trip) => trip.userID === singleTravelerData.id);
  return allTripsForSingleTraveler;
}

const instantiateTraveler = (travelerData, tripsForTraveler) => {
  traveler = new Traveler(travelerData, tripsForTraveler);
  console.log(traveler.trips)
}

// let destinations = [];
// fetch("http://localhost:3001/api/v1/destinations")
//   .then(response => response.json)
//   .then(data => {
//     destinations = data.destinations.map(destination => {
//       return new Destination(destination)
//     });
//   });
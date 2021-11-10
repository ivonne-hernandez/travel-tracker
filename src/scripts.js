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

const fetchAll = () => {
  const allTravelersDataPromise = fetchAllTravelersData();
  const singleTravelerDataPromise = fetchSingleTravelerData(1);//need to pass in the userId
  const allTripsDataPromise = fetchAllTrips();
  const allDestinationsDataPromise = fetchAllDestinations();
  
  Promise.all([allTravelersDataPromise, singleTravelerDataPromise, allTripsDataPromise, allDestinationsDataPromise])
  .then(data => {
    console.log(`allTravelersDataPromise:`, data[0]);
    console.log(`singleTravelerDataPromise:`, data[1]);
    console.log(`allTrips:`, data[2]);
    console.log(`allDestinationsDataPromise:`, data[3]);
  })
}

fetchAll();

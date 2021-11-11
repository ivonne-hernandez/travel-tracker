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
import TravelerRepository from './TravelerRepository';
let travelerRepository;
let traveler;

const fetchAll = () => {
  const allTravelersDataPromise = fetchAllTravelersData();
  const singleTravelerDataPromise = fetchSingleTravelerData(1);//need to pass in the userId
  const allTripsDataPromise = fetchAllTrips();
  const allDestinationsDataPromise = fetchAllDestinations();
  
  Promise.all([allTravelersDataPromise, singleTravelerDataPromise, allTripsDataPromise, allDestinationsDataPromise])
  .then(data => {
    instantiateNewTravelerRepository(data[0]);
    console.log(`singleTravelerDataPromise:`, data[1]);
    console.log(`allTrips:`, data[2]);
    console.log(`allDestinationsDataPromise:`, data[3]);
  })
}

fetchAll();

const instantiateNewTravelerRepository = (allTravelersData) => {
  travelerRepository = new TravelerRepository(allTravelersData.travelers);
  console.log(`allTravelersDataRepo:`, travelerRepository);
  const travelerTest = travelerRepository.getTravelerData(2);
  console.log(`travelerTest`,travelerTest)
}

const instantiateTraveler = (travelerRepository) => {
  travelerRepository = new TravelerRepository();
}
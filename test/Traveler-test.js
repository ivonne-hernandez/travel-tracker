import { expect } from "chai";
import Traveler from "../src/Traveler";
import Trip from "../src/Trip";
import Destination from "../src/Destination";

import {
  tripsForTraveler,
  pastTripsBasedOnTodaysDate,
  presentTripsBasedOnTodaysDate,
  upcomingTripsBasedOnTodaysDate,
  pendingTrips, 
  matchingTripDestinations
} from './Traveler-test-data';

describe('Traveler', () => {
  let traveler;
  let singleTravelerInformation;
  let allTripsForSingleTraveler = tripsForTraveler;
  let instantiatedTripsForTraveler;
  let allDestinationsForSingleTraveler = matchingTripDestinations;

  beforeEach(function() {
    singleTravelerInformation = {
      "id": 33,
      "name": "Selene Kleyn",
      "travelerType": "relaxer"
    }
    
    instantiatedTripsForTraveler = allTripsForSingleTraveler
      .map((trip) => {
        const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
        const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
        return instantiatedTrip;
    });
  
    traveler = new Traveler(singleTravelerInformation, instantiatedTripsForTraveler);
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should have a userId', function() {
    expect(traveler.userId).to.equal(33);
  });

  it('should have a name', function() {
    expect(traveler.name).to.equal("Selene Kleyn");
  });

  it('should have a travelerType', function() {
    expect(traveler.travelerType).to.equal("relaxer");
  });

  it('should have an array of trips', function() {
    const expected = tripsForTraveler.map(trip => {
      const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
      const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
      return instantiatedTrip;
    })
    expect(traveler.trips).to.deep.equal(expected);
  });

  it('should return the past trips based on today\'s date', function() {
    const expected = pastTripsBasedOnTodaysDate.map(trip => {
      const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
      const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
      return instantiatedTrip;
    });
    const result = traveler.getPastTrips(new Date("2021/11/12"));
    expect(result).to.deep.equal(expected);
  });

  it('should return the present trips based on today\'s date', function() {
    const expected = presentTripsBasedOnTodaysDate.map(trip => {
      const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
      const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
      return instantiatedTrip;
    });
    const result = traveler.getPresentTrips(new Date("2021/11/12"));
    expect(result).to.deep.equal(expected);
  });

  it('should return the upcoming trips based on today\'s date', function() {
    const expected = upcomingTripsBasedOnTodaysDate.map(trip => {
      const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
      const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
      return instantiatedTrip;
    });
    const result = traveler.getUpcomingTrips(new Date("2021/11/12"));
    expect(result).to.deep.equal(expected);
  });
  
  it('should return the pending trips', function() {
    const expected = pendingTrips.map(trip => {
      const matchingDestination = allDestinationsForSingleTraveler.find(destination => trip.destinationID === destination.id)
      const instantiatedTrip = new Trip(trip, new Destination(matchingDestination));
      return instantiatedTrip;
    });
    const result = traveler.getPendingTrips();
    expect(result).to.deep.equal(expected);
  });

  it('should return the total travel expenses for a given year', function() {
    const result = traveler.getTravelExpensesForYear(2021);
    expect(result).to.equal(16720);
  });
});


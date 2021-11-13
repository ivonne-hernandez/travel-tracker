import { expect } from "chai";
import Destination from "../src/Destination";
import Trip from "../src/Trip";


describe('Trip', () => {
  let tripData;
  let trip;
  let destinationData;
  let destination;

  beforeEach(function() {
    tripData = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    };

    destinationData = {
      "id": 49,
      "destination": "Castries, St Lucia",
      "estimatedLodgingCostPerDay": 650,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
      "alt": "aerial photography of rocky mountain under cloudy sky"
    };
    destination = new Destination(destinationData);
    trip = new Trip(tripData, destination);
  });

  it('should be a function', function() {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', function() {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it('should have a trip id', function() {
    expect(trip.id).to.equal(1);
  });

  it('should have number of travelers', function() {
    expect(trip.travelers).to.equal(1);
  });

  it('should have trip date', function() {
    expect(trip.date).to.equal("2022/09/16");
  });

  it('should have trip duration (in days)', function() {
    expect(trip.duration).to.equal(8);
  });

  it('should have a trip status', function() {
    expect(trip.status).to.equal("approved");
  });

  it('should have suggestedActivities', function() {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it('should have a destination', function() {
    expect(trip.destination).to.deep.equal(destinationData);
  });

  it('should calculate the total cost for a trip', function() {
    const result = trip.calculateCost();
    expect(result).to.equal(5819);
  });
  
});
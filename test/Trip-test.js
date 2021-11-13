import { expect } from "chai";
import Trip from "../src/Trip";

describe('Trip', () => {
  let tripData;
  let trip;

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
    trip = new Trip(tripData);
  });

  it('should be a function', function() {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', function() {
    expect(trip).to.be.an.instanceOf(Trip);
  });



});
import { expect } from "chai";
import Destination from "../src/Destination"

describe('Destination', () => {
  let destination;
  let destinationData;

  beforeEach(function() {
    destinationData = {
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    };

    destination = new Destination(destinationData)
  })
  
  it('should be a function', function() {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', function() {
    expect(destination).to.be.an.instanceOf(Destination);
  });

  
});
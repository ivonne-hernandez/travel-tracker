import { expect } from "chai";
import Traveler from "../src/Traveler";

describe('Traveler', () => {
  let traveler;
  let singleTravelerInformation;
  let tripsForTraveler;

  beforeEach(function() {
    singleTravelerInformation = {
      "id": 33,
      "name": "Selene Kleyn",
      "travelerType": "relaxer"
    }

    tripsForTraveler = [
      {
        "id": 12,
        "userID": 33,
        "destinationID": 33,
        "travelers": 6,
        "date": "2022/10/17",
        "duration": 6,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 30,
        "userID": 33,
        "destinationID": 29,
        "travelers": 1,
        "date": "2020/07/17",
        "duration": 5,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 57,
        "userID": 33,
        "destinationID": 17,
        "travelers": 2,
        "date": "2019/07/04",
        "duration": 20,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 118,
        "userID": 33,
        "destinationID": 19,
        "travelers": 5,
        "date": "2021/02/09",
        "duration": 5,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 136,
        "userID": 33,
        "destinationID": 24,
        "travelers": 5,
        "date": "2020/06/29",
        "duration": 20,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 157,
        "userID": 33,
        "destinationID": 41,
        "travelers": 1,
        "date": "2020/01/12",
        "duration": 11,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 164,
        "userID": 33,
        "destinationID": 25,
        "travelers": 4,
        "date": "2019/11/30",
        "duration": 7,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 178,
        "userID": 33,
        "destinationID": 40,
        "travelers": 2,
        "date": "2019/12/25",
        "duration": 16,
        "status": "approved",
        "suggestedActivities": []
      }
    ];

    traveler = new Traveler(singleTravelerInformation, tripsForTraveler);
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of User Repository', function() {
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
    expect(traveler.trips).to.deep.equal(tripsForTraveler);
  });
});


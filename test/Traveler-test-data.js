const tripsForTraveler = [
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
    "date": "2021/11/12",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 157,
    "userID": 33,
    "destinationID": 41,
    "travelers": 1,
    "date": "2021/11/12",
    "duration": 11,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 164,
    "userID": 33,
    "destinationID": 25,
    "travelers": 4,
    "date": "2022/11/30",
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
    "status": "pending",
    "suggestedActivities": []
  }
];

const pastTripsBasedOnTodaysDate = [
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
  }
];

const presentTripsBasedOnTodaysDate = [
  {
    "id": 136,
    "userID": 33,
    "destinationID": 24,
    "travelers": 5,
    "date": "2021/11/12",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 157,
    "userID": 33,
    "destinationID": 41,
    "travelers": 1,
    "date": "2021/11/12",
    "duration": 11,
    "status": "approved",
    "suggestedActivities": []
  }
];

const upcomingTripsBasedOnTodaysDate = [
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
    "id": 164,
    "userID": 33,
    "destinationID": 25,
    "travelers": 4,
    "date": "2022/11/30",
    "duration": 7,
    "status": "approved",
    "suggestedActivities": []
  }
];

const pendingTrips = [
  {
    "id": 178,
    "userID": 33,
    "destinationID": 40,
    "travelers": 2,
    "date": "2019/12/25",
    "duration": 16,
    "status": "pending",
    "suggestedActivities": []
  }
];

const matchingTripDestinations = [
  {
    "id": 33,
    "destination": "Brussels, Belgium",
    "estimatedLodgingCostPerDay": 1000,
    "estimatedFlightCostPerPerson": 110,
    "image": "https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "brown concrete gate"
  },
  {
    "id": 29,
    "destination": "Willemstad, Curaçao",
    "estimatedLodgingCostPerDay": 80,
    "estimatedFlightCostPerPerson": 1100,
    "image": "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
    "alt": "brightly colored buildings near body of water"
  },
  {
    "id": 17,
    "destination": "Jaipur, India",
    "estimatedLodgingCostPerDay": 30,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "a courtyard with trees and mountain in the distance"
  },
  {
    "id": 19,
    "destination": "Quito, Ecuador",
    "estimatedLodgingCostPerDay": 60,
    "estimatedFlightCostPerPerson": 500,
    "image": "https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "a city at night with cloudy, snowy mountains in the distance"
  },
  {
    "id": 24,
    "destination": "Vilnius, Lithuania",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 1100,
    "image": "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "alt": "overhead view of a city with a hot air balloon"
  },
  {
    "id": 41,
    "destination": "Montego Bay, Jamaica",
    "estimatedLodgingCostPerDay": 500,
    "estimatedFlightCostPerPerson": 100,
    "image": "https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "alt": "boats docked beside trees on river"
  },
  {
    "id": 25,
    "destination": "New York, New York",
    "estimatedLodgingCostPerDay": 175,
    "estimatedFlightCostPerPerson": 200,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people crossing the street during the day surrounded by tall buildings and advertisements"
  },
  {
    "id": 40,
    "destination": "La Isla Tortuga, Costa Rica",
    "estimatedLodgingCostPerDay": 600,
    "estimatedFlightCostPerPerson": 80,
    "image": "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80",
    "alt": "trees near seashore"
  }
];

module.exports = {
  tripsForTraveler,
  pastTripsBasedOnTodaysDate,
  presentTripsBasedOnTodaysDate,
  upcomingTripsBasedOnTodaysDate,
  pendingTrips, 
  matchingTripDestinations
}
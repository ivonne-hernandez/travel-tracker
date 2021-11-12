class Traveler {
  constructor(data, tripsForTraveler) {
    this.userId = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.trips = tripsForTraveler;
  }

  getPastTrips() {
    
  }
  
  getPresentTrips() {

  }

  getUpcomingTrips() {

  }

  getPendingTrips() {

  }
}
export default Traveler;
class Traveler {
  constructor(data, tripsForTraveler) {
    this.userId = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.trips = tripsForTraveler;
  }

  getPastTrips() {
    const todaysDate = new Date();
    const pastTrips = this.trips
    .filter(trip => {
      const tripDate = new Date(trip.date);
      return trip.status === `approved` && tripDate < todaysDate;
    })
    return pastTrips;
    //must be approved & be less than today's date
  }
  
  getPresentTrips() {
    //must be approved & include today's date
    //if "today" is within the start and end date (duration of the trip)
    //need to use new Date() to compare
  }

  getUpcomingTrips() {
    //must be approved & be greater than today's date
    //approved but compared to new Date() these dates
    //are bigger? i.e in the future
  }

  getPendingTrips() {
    //all status is pending
  }
}
export default Traveler;
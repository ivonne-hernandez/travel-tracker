class Traveler {
  constructor(data, tripsForTraveler) {
    this.userId = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.trips = tripsForTraveler;
  }

  getPastTrips(todaysDate = new Date()) {
    const pastTrips = this.trips
      .filter(trip => {
        const tripStartDate = new Date(trip.date);
        const milliSecsInOneDay = 1000 * 60 * 60 * 24;
        const tripDurationInDays = trip.duration;
        const tripEndDate = new Date(tripStartDate.valueOf() + milliSecsInOneDay * tripDurationInDays);
        return trip.status === `approved`
          && tripEndDate < todaysDate;
      });
    return pastTrips;
  }
  
  getPresentTrips(todaysDate = new Date()) {
    const presentTrips = this.trips
      .filter(trip => {
        const tripStartDate = new Date(trip.date);
        const milliSecsInOneDay = 1000 * 60 * 60 * 24;
        const tripDurationInDays = trip.duration;
        const tripEndDate = new Date(tripStartDate.valueOf() + milliSecsInOneDay * tripDurationInDays);
        return trip.status === `approved`
          && tripStartDate <= todaysDate
          && todaysDate <= tripEndDate;  
      })
    return presentTrips;
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
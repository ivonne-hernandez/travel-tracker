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
      });
    return presentTrips;
  }

  getUpcomingTrips(todaysDate = new Date()) {
    const upcomingTrips = this.trips.filter(trip => {
      const tripStartDate = new Date(trip.date);
      return trip.status === `approved` && todaysDate < tripStartDate;  
    });
    return upcomingTrips;
  }

  getPendingTrips() {
    const pendingTrips = this.trips.filter(trip => trip.status === `pending`);
    return pendingTrips;
  } 

  getTravelExpensesForYear(year = new Date().getFullYear()) {
    const totalExpensesForYear = this.trips
      .reduce((totalCost, trip) => {
        if (new Date(trip.date).getFullYear() === year) {
          totalCost += trip.calculateCost();
        }
        return totalCost;
      }, 0);
    return totalExpensesForYear;
  }
}
export default Traveler;
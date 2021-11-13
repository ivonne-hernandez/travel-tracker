class Trip {
  constructor(trip, destination) {
    this.id = trip.id;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.destination = destination;
  }

}

export default Trip;

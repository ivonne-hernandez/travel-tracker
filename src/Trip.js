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

  calculateCost() {
    const totalLodgingCost = this.destination.estimatedLodgingCostPerDay * this.duration;
    const totalFlightCost = this.destination.estimatedFlightCostPerPerson * this.travelers;
    const travelAgentsFeeIncluded = 1.10;
    const totalTripCost = (totalLodgingCost + totalFlightCost) * travelAgentsFeeIncluded;
    return Math.floor(totalTripCost);
  }
}

export default Trip;

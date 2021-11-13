let domUpdates = {
  mainContainer: document.querySelector('.main-container'),

  displayTravelerWelcomeMsg(traveler) {
    const welcomeTraveler = document.querySelector('#welcomeTravelerMsg');
    welcomeTraveler.innerText = `Welcome ${traveler.name}`
  },

  displayNewTripForm() {
    this.mainContainer.innerHTML = `
      <h2>Add New Trip</h2>
      <form id="newTripInputForm" class="new-trip-form">
        <div>
          <label for="date">Date</label>
          <input id="date" type="date">
        </div>
        <div>
          <label for="duration">Duration</label>
          <input id="duration" type="number">
        </div>
        <div>
          <label for="number-of-travelers">Number of Travelers</label>
          <input id="number-of-travelers" type="number">
        </div>
        <div>
          <label for="destination">Destination</label>
          <input id="destination" type="text">
        </div>
        <div>
          <label for="estimated-cost">Estimated Cost</label>
          <p id="estimated-cost" type="number">
        </div>
      </form>
    `;
  }, 

  displayPastTrips(traveler) {
    const travelersPastTrips = traveler.getPastTrips();
    this.mainContainer.innerHTML = "<h2>Past Trips:</h2>";
    if (!travelersPastTrips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>`;
    }

    travelersPastTrips.forEach((pastTrip) => {
      let suggestedActivitiesParagraph = '';
      if (pastTrip.suggestedActivities.length) {
        suggestedActivitiesParagraph = `
          <p>Suggested Activities: ${pastTrip.suggestedActivities}</p>
        `;
      }

      this.mainContainer.innerHTML += `
        <article class="trip-container">
          <p>Destination: ${pastTrip.destination.destination}</p>
          <p>Number of travelers: ${pastTrip.travelers}</p>
          <p>Date: ${pastTrip.date}</p>
          <p>Duration: ${pastTrip.duration} days</p>
          <p>Status: ${pastTrip.status}</p>
          ${suggestedActivitiesParagraph}
          <img class="destination-image" src=${pastTrip.destination.image} alt="${pastTrip.destination.alt}">
        </article>
      `;
    });
  },

  displayPresentTrips(traveler) {
    const travelersPresentTrips = traveler.getPresentTrips();
    this.mainContainer.innerHTML = "<h2>Present Trips:</h2>";
    if (!travelersPresentTrips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>`;
    }
    travelersPresentTrips.forEach((presentTrip) => {
      let suggestedActivitiesParagraph = '';
      if (presentTrip.suggestedActivities.length) {
        suggestedActivitiesParagraph = `
          <p>Suggested Activities: ${presentTrip.suggestedActivities}</p>
        `;
      }

      this.mainContainer.innerHTML += `
        <article class="trip-container">
          <p>Destination: ${presentTrip.destination.destination}</p>
          <p>Number of travelers: ${presentTrip.travelers}</p>
          <p>Date: ${presentTrip.date}</p>
          <p>Duration: ${presentTrip.duration} days</p>
          <p>Status: ${presentTrip.status}</p>
          ${suggestedActivitiesParagraph}
          <img class="destination-image" src=${presentTrip.destination.image} alt="${presentTrip.destination.alt}">
        </article>
      `;
    });
  },

  displayUpcomingTrips(traveler) {
    const travelersUpcomingTrips = traveler.getUpcomingTrips();
    this.mainContainer.innerHTML = "<h2>Upcoming Trips:</h2>";
    if (!travelersUpcomingTrips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>`;
    }
    travelersUpcomingTrips.forEach((upcomingTrip) => {
      let suggestedActivitiesParagraph = '';
      if (upcomingTrip.suggestedActivities.length) {
        suggestedActivitiesParagraph = `
          <p>Suggested Activities: ${upcomingTrip.suggestedActivities}</p>
        `;
      }

      this.mainContainer.innerHTML += `
        <article class="trip-container">
          <p>Destination: ${upcomingTrip.destination.destination}</p>
          <p>Number of travelers: ${upcomingTrip.travelers}</p>
          <p>Date: ${upcomingTrip.date}</p>
          <p>Duration: ${upcomingTrip.duration} days</p>
          <p>Status: ${upcomingTrip.status}</p>
          ${suggestedActivitiesParagraph}
          <img class="destination-image" src=${upcomingTrip.destination.image} alt="${upcomingTrip.destination.alt}">
        </article>
      `;
    });
  }, 

  displayPendingTrips(traveler) {
    const travelersPendingTrips = traveler.getPendingTrips();
    this.mainContainer.innerHTML = "<h2>Pending Trips:</h2>";
    if (!travelersPendingTrips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>`;
    }
    travelersPendingTrips.forEach((pendingTrip) => {
      let suggestedActivitiesParagraph = '';
      if (pendingTrip.suggestedActivities.length) {
        suggestedActivitiesParagraph = `
          <p>Suggested Activities: ${pendingTrip.suggestedActivities}</p>
        `;
      }

      this.mainContainer.innerHTML += `
        <article class="trip-container">
          <p>Destination: ${pendingTrip.destination.destination}</p>
          <p>Number of travelers: ${pendingTrip.travelers}</p>
          <p>Date: ${pendingTrip.date}</p>
          <p>Duration: ${pendingTrip.duration} days</p>
          <p>Status: ${pendingTrip.status}</p>
          ${suggestedActivitiesParagraph}
          <img class="destination-image" src=${pendingTrip.destination.image} alt="${pendingTrip.destination.alt}">
        </article>
      `;
    });
  }, 

  getTravelExpensesThisYear(traveler, thisYear) {
    const allTripsForTraveler = traveler.trips;
    const totalTravelExpensesThisYear = allTripsForTraveler
      .reduce((totalCost, trip) => {
        if (new Date(trip.date).getFullYear() === thisYear) {
          totalCost += trip.calculateCost();
        }
        return totalCost;
      }, 0);
      return totalTravelExpensesThisYear;
  },

  displayTravelExpenses(traveler, thisYear) {
    const totalTravelExpensesThisYear = this.getTravelExpensesThisYear(traveler, thisYear);
    this.mainContainer.innerHTML = `
      <h2>Total Travel Expenses for ${thisYear}:</h2>
      <p>$${Number(totalTravelExpensesThisYear).toFixed(2)} (10% fee included)</p>
    `;
  }

  
}

export default domUpdates;
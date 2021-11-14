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

  displayTrips(trips, type) {
    this.mainContainer.innerHTML = `<h2>${type} Trips:</h2>`;
    if (!trips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>`;
    }

    trips.forEach((trip) => {
      let suggestedActivitiesParagraph = '';
      if (trip.suggestedActivities.length) {
        suggestedActivitiesParagraph = `
          <p>Suggested Activities: ${trip.suggestedActivities}</p>
        `;
      }

      this.mainContainer.innerHTML += `
        <article class="trip-container">
          <p>Destination: ${trip.destination.destination}</p>
          <p>Number of travelers: ${trip.travelers}</p>
          <p>Date: ${trip.date}</p>
          <p>Duration: ${trip.duration} days</p>
          <p>Status: ${trip.status}</p>
          ${suggestedActivitiesParagraph}
          <img class="destination-image" src=${trip.destination.image} alt="${trip.destination.alt}">
        </article>
      `;
    });
  },

  displayTravelExpenses(totalTravelExpensesThisYear) {
    this.mainContainer.innerHTML = `
      <h2>Total Travel Expenses for ${new Date().getFullYear()}:</h2>
      <p>$${totalTravelExpensesThisYear.toFixed(2)} (10% fee included)</p>
    `;
  }

  
}

export default domUpdates;
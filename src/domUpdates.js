let domUpdates = {
  mainContainer: document.querySelector('.main-container'),

  displayPastTrips(traveler) {
    const travelersPastTrips = traveler.getPastTrips();
    this.mainContainer.innerHTML = "<h2>Past Trips:</h2>";

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
  }
}

export default domUpdates;
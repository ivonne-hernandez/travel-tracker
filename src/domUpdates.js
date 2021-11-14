import Destination from "./Destination";
import Trip from "./Trip";

let domUpdates = {
  mainContainer: document.querySelector('.main-container'),

  displayTravelerWelcomeMsg(traveler) {
    const welcomeTraveler = document.querySelector('#welcomeTravelerMsg');
    welcomeTraveler.innerText = `Welcome ${traveler.name}`
  },

  displayNewTripForm(allDestinations) {
    const listOfAllDestinationNames = allDestinations
      .map(destination => {
        const instantiatedDestination = new Destination(destination);
        return `<option value="${instantiatedDestination.id}">${instantiatedDestination.destination}</option>`;
      })
    this.mainContainer.innerHTML = `
      <h2>Add New Trip</h2>
      <form id="newTripInputForm" class="new-trip-form">
        <div>
          <label for="date">Date</label>
          <input id="dateInput" type="date">
        </div>
        <div>
          <label for="duration">Duration</label>
          <input id="durationInput" type="number">
        </div>
        <div>
          <label for="number-of-travelers">Number of Travelers</label>
          <input id="numberOfTravelersInput" type="number">
        </div>
        <div>
          <label for="destination">Destination</label>
          <select name="destination" id="destinationNameInput">
          ${listOfAllDestinationNames}
          </select>
        </div>
        <div>
          <label id="estimatedCost" for="estimated-cost">Estimated Cost</label>
        </div>
        <div>
          <button class="submit-trip-request-button" id="submitTripRequestButton" disabled>Submit Trip Request</button>
        </div>
      </form>
    `;
    
    this.addEventListenersForForm(allDestinations);
  }, 

  addEventListenersForForm(allDestinations) {
    const newTripInputForm = document.querySelector('#newTripInputForm');
    newTripInputForm.addEventListener('input', function() {
      if (domUpdates.areValidUserInputFields()) {
        domUpdates.getEstimatedTripCost(allDestinations);
      }
    });

    const submitTripRequestButton = document.querySelector('#submitTripRequestButton');
    submitTripRequestButton.addEventListener('click', function(event) {
      event.preventDefault();
      domUpdates.postNewTripRequest();
    });
  },

  areValidUserInputFields() {
    const dateInput = document.querySelector('#dateInput');
    const durationInput = document.querySelector('#durationInput');
    const numberOfTravelersInput = document.querySelector('#numberOfTravelersInput');
    const destinationNameInput = document.querySelector('#destinationNameInput');
    const submitTripRequestButton = document.querySelector('#submitTripRequestButton');

    const inputsAreNotEmpty = dateInput.value && durationInput.value && numberOfTravelersInput.value && destinationNameInput.value;
    const duration = Number(durationInput.value);
    const numberOfTravelers = Number(numberOfTravelersInput.value);
    if (inputsAreNotEmpty && duration > 0 && numberOfTravelers > 0) {
      submitTripRequestButton.disabled = false;
      return true;
    } else {
      submitTripRequestButton.disabled = true;
      return false;
    }
  },

  getEstimatedTripCost(allDestinations) {
    const duration = Number(document.querySelector('#durationInput').value);
    const numberOfTravelers = Number(document.querySelector('#numberOfTravelersInput').value);
    const destinationId = Number(document.querySelector('#destinationNameInput').value);
    const matchingTripDestination = allDestinations.find(destination => destinationId === destination.id);
    const tripForEstimationPurposesOnly = {
      "id": 1,
      "userID": 44,
      "destinationID": destinationId,
      "travelers": numberOfTravelers,
      "date": "2022/09/16",
      "duration": duration,
      "status": "pending",
      "suggestedActivities": []
    };
    const trip = new Trip(tripForEstimationPurposesOnly, new Destination(matchingTripDestination));
    const estimatedTripTotal = trip.calculateCost();

    this.displayEstimatedTripCost(estimatedTripTotal);
  },

  displayEstimatedTripCost(estimatedTripTotal) {
    const estimatedCost = document.querySelector('#estimatedCost');
    estimatedCost.innerHTML = `<p>Estimated Cost: $${estimatedTripTotal.toLocaleString()} (10% fee included)</p>`;
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

  //We also need a submit trip request button that is disabled at the same time as the "est cost button"
// Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
  //once the "submit trip request" button is pressed (event listener on this button) there should be a POST request
  //and then a fetch call that will "refresh" the data s.t. the trip is now in the "Pending Trips" section
  
}






export default domUpdates;


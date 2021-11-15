import Destination from "./Destination";
import Trip from "./Trip";
import {
  postNewTrip
} from './apiCalls';

let domUpdates = {
  mainContainer: document.querySelector('.main-container'),
  loginContainer: document.querySelector('.login-container'),
  h1Container: document.querySelector('.h1-container'),
  navContainer: document.querySelector('.nav-container'),
  
  hideLoginPage() {
    this.loginContainer.classList.add('hidden');
    this.mainContainer.classList.remove('hidden');
    this.h1Container.classList.remove('hidden');
    this.navContainer.classList.remove('hidden');
  },  

  displayTravelerWelcomeMsg(traveler) {
    const welcomeTraveler = document.querySelector('#welcomeTravelerMsg');
    welcomeTraveler.innerText = `Welcome ${traveler.name}`
  },

  displayNewTripForm(traveler, allTrips, allDestinations) {
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
    
    this.addEventListenersForForm(traveler, allTrips, allDestinations);
  }, 

  addEventListenersForForm(traveler, allTrips, allDestinations) {
    const newTripInputForm = document.querySelector('#newTripInputForm');
    newTripInputForm.addEventListener('input', function() {
      if (domUpdates.areValidUserInputFields()) {
        domUpdates.getEstimatedTripCost(allDestinations);
      }
    });

    const submitTripRequestButton = document.querySelector('#submitTripRequestButton');
    submitTripRequestButton.addEventListener('click', function(event) {
      event.preventDefault();
      domUpdates.submitNewTripRequest(traveler, allTrips, allDestinations);
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
    estimatedCost.innerHTML = `<p>Estimated Cost: $${estimatedTripTotal.toFixed(2)} (10% travel agent fee included)</p>`;
  },

  submitNewTripRequest(traveler, allTrips, allDestinations) {
    const maxTripId = Math.max(...allTrips.map(trip => trip.id));
    const numberOfTravelers = Number(document.querySelector('#numberOfTravelersInput').value);
    const dateInput = document.querySelector('#dateInput').value.split('-').join('/');
    const duration = Number(document.querySelector('#durationInput').value);
    const destinationId = Number(document.querySelector('#destinationNameInput').value);
    
    const newTrip = {
      "id": maxTripId + 1,
      "userID": traveler.userId,
      "destinationID": destinationId,
      "travelers": numberOfTravelers,
      "date": dateInput,
      "duration": duration,
      "status": "pending",
      "suggestedActivities": [] 
    }
    
    return postNewTrip(newTrip)
      .then(response => {
        const matchingTripDestination = allDestinations.find(destination => destination.id === response.newTrip.destinationID);
        traveler.trips.push(new Trip(response.newTrip, new Destination(matchingTripDestination)));
        allTrips.push(response.newTrip);
    
        this.displayTripRequestSuccess();
      })
  },

  displayTripRequestSuccess() {
    this.mainContainer.innerHTML = `
    <p>Your new trip request has been successfully submitted.</p> 
    <p>Its status is pending travel agent approval.</p>
    `;
  },

  displayTrips(trips, type) {
    this.mainContainer.innerHTML = `<h2>${type} Trips:</h2>`;
    if (!trips.length) {
      this.mainContainer.innerHTML += `
        <p>Nothing to see here.</p> 
        <p>Go book a new trip to get away today!</p>
      `;
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
      <p>$${totalTravelExpensesThisYear.toFixed(2)} (10% travel agent fee included)</p>
    `;
  }
}

export default domUpdates;


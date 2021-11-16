export let fetchSingleTravelerData = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
}
//where<id> will be a number of a traveler’s id from login
export let fetchAllTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
}

export let fetchAllDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
}

export let postNewTrip = (newTrip) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify(newTrip),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}
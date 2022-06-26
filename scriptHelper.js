
require('isomorphic-fetch');

function addDestinationInfo(pickedPlanet) {

        const div = document.getElementById("missionTarget")
        div.innerHTML = `
          <h2>Mission Destination</h2>
            <ol>
                <li>Name:${pickedPlanet.name} </li>
                <li>Diameter:${pickedPlanet.diameter} </li>
                 <li>Star: ${pickedPlanet.star}</li>
                 <li>Distance from Earth: ${pickedPlanet.distance}</li>
                 <li>Number of Moons:${pickedPlanet.moons} </li>
             </ol>
             <img src=${pickedPlanet.image}>
        
        
        
        
        
        `;        
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty"
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
    
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||  validateInput(cargoMass) === "Empty") {
      alert("All fields are required!");
      event.preventDefault()
        
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
      alert("Make sure to enter valid information for each field!")
      event.preventDefault()
    }          

        }

async function myFetch() {
    let planetsReturned;
    let json = []
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       json = response.json()
    });
       
    return json;
}

function pickPlanet(planets) {
  planets =  Math.floor(Math.random()*6)
  return planets
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

        const div = document.getElementById("missionTarget")
        div.innerHTML = `
          <h2>Mission Destination</h2>
            <ol>
                <li>Name:${json.name} </li>
                <li>Diameter:${json.diameter} </li>
                 <li>Star: ${json.star}</li>
                 <li>Distance from Earth: ${json.distance}</li>
                 <li>Number of Moons:${json.moons} </li>
             </ol>
             <img src=${json.image}>
        
        
        
        
        
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){

        }
    )});

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

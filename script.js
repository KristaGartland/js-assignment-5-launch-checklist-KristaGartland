// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
   let form = document.getElementById("launchForm");
   let list = document.getElementById("faultyItems");
  
   
        form.addEventListener("submit", function(event){
            let pilot = form.querySelector("input[name=pilotName]");
            let copilot = form.querySelector("input[name=copilotName]");
            let fuelLevel = form.querySelector("input[name=fuelLevel]");
            let cargoMass = form.querySelector("input[name=cargoMass]");
           formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
           event.preventDefault();
        })

        form.addEventListener("submit", function(event){
            let pilotStatus = document.getElementById("pilotStatus")
            let copilotStatus = document.getElementById("copilotStatus")
            let faultyItems = document.getElementById("faultyItems")
            let fuelLevelStatus = document.querySelector("input[name=fuelLevel]")
            let cargoMassStatus = document.querySelector("input[name=cargoMass]")
            let launchStatus = document.getElementById("launchStatus")
            let fuelLevelText = document.getElementById("fuelStatus")
            let cargoMassText = document.getElementById("cargoStatus")


            pilotStatus.innerHTML = document.querySelector("input[name=pilotName]")
            copilotStatus.innerHTML = document.querySelector("input[name=copilotName]")
          
        if (fuelLevelStatus.value < 10000){
            faultyItems.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            launchStatus.innerHTML = "Shuttle not ready for launch"
            fuelLevelText.innerHTML = "Fuel level too low for launch"
        } else if (cargoMassStatus.value > 10000){
            faultyItems.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            launchStatus.innerHTML = "Shuttle not ready for launch"
            cargoMassText.innerHTML = "Cargo mass too high for launch"
        } else {
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"
        }


        })







});


window.addEventListener("load", function() {
 
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let pickedPlanet = pickPlanet(listedPlanets)
    addDestinationInfo(listedPlanets[pickedPlanet])
   })
   
   let form = document.getElementById("launchForm");
   let list = document.getElementById("faultyItems");
  
   
        form.addEventListener("submit", function(event){
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");
           formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
        
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
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");


            pilotStatus.innerHTML = `${pilot.value} is ready for launch`
            copilotStatus.innerHTML = `${copilot.value} is ready for launch`
          
        if (fuelLevelStatus.value < 10000){
            faultyItems.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            launchStatus.innerHTML = "Shuttle not ready for launch"
            fuelLevelText.innerHTML = "Fuel level too low for launch"
            event.preventDefault()
        } else if (cargoMassStatus.value > 10000){
            faultyItems.style.visibility = 'visible'
            launchStatus.style.color = 'red'
            launchStatus.innerHTML = "Shuttle not ready for launch"
            cargoMassText.innerHTML = "Cargo mass too high for launch"
            event.preventDefault()
        } else {
            faultyItems.style.visibility = 'hidden'
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"
            event.preventDefault()
        }


        })





event.preventDefault()

});
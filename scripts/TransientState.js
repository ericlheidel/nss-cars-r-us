// Set up the transient state data structure and provide inital values
const TransientState = {
    "paintsId": 0,
    "interiorsId": 0,
    "technologiesId": 0,
    "wheelsId": 0,
    "typesId": 0,
}


// Functions to modify each property of transient state
// When the change happens, these functions are the ones that accept the id (integer) -->
// and pass it to the Transient State Data
export const setPaintsType = (chosenPaintsType) => {
    TransientState.paintsId = chosenPaintsType
    console.log(TransientState)
}

export const setInteriorsType = (chosenInteriorsType) => {
    TransientState.interiorsId = chosenInteriorsType
    console.log(TransientState)
}

export const setTechnologiesType = (chosenTechnologiesType) => {
    TransientState.technologiesId = chosenTechnologiesType
    console.log(TransientState)
}

export const setWheelsType = (chosenWheelsType) => {
    TransientState.wheelsId = chosenWheelsType
    console.log(TransientState)
}

export const setVehiclesType = (chosenVehicleType) => {
    TransientState.typesId = chosenVehicleType
    console.log(TransientState)
}


// Function to convert transient state to permanent state
export const SaveChanges = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(TransientState)
    }

    const response = await fetch("http://localhost:9000/orders", postOptions)

    TransientState.paintsId = 0
    TransientState.interiorsId = 0
    TransientState.technologiesId = 0
    TransientState.wheelsId = 0
    TransientState.typesId = 0

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}



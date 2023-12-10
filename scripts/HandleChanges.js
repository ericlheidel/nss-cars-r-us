import { setInteriorsType, setPaintsType, setTechnologiesType, setVehiclesType, setWheelsType } from "./TransientState.js"


// These functions WILL BE EXECUTED when the user changes which menu item  is selected
// these functions will pass the id (integer) of the change target to the functions -->
// that modify the Transient State Data
export const handlePaintTypeChange = (changeEvent) => {
    if (changeEvent.target.id === "paints") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setPaintsType(convertedToInteger)
    }
}

export const handleInteriorsTypeChange = (changeEvent) => {
    if (changeEvent.target.id === "interiors") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setInteriorsType(convertedToInteger)
    }
}

export const handleTechnologiesTypeChange = (changeEvent) => {
    if (changeEvent.target.id === "technologies") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setTechnologiesType(convertedToInteger)
    }
}

export const handleWheelsTypeChange = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setWheelsType(convertedToInteger)
    }
}

export const handleVehiclesTypeChange = (changeEvent) => {
    if (changeEvent.target.id === "types") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVehiclesType(convertedToInteger)
    }
}
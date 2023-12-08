import { setInteriorsType, setPaintsType, setTechnologiesType, setWheelsType } from "./TransientState.js"


// These functionss WILL BE EXECUTED when the user changes which menu item  is selected
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
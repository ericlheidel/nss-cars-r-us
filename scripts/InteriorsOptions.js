export const InteriorsOptions = async () => {
    const response = await fetch("http://localhost:9000/interiors")
    const interiors = await response.json()

    let interiorsOptionsHMTL = `
        <select id="interiors">
            <option value="0">Select an interior material</option>`

    const interiorsOptionsSectionArray = interiors.map(
        (interior) => {
            return `
                <option value="${interior.id}">${interior.type}</option>`
        }
    )

    interiorsOptionsHMTL += interiorsOptionsSectionArray.join("\n")

    interiorsOptionsHMTL += `</select>`

    return interiorsOptionsHMTL
}
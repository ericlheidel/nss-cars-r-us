export const WheelsOptions = async () => {
    const response = await fetch("http://localhost:9000/wheels")
    const wheels = await response.json()

    let wheelsOptionsHTML = `
        <select id="wheels">
            <option value="0">Select a wheel style</option>`

    const wheelsOptionsSectionArray = wheels.map(
        (wheel) => {
            return `
                <option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    wheelsOptionsHTML += wheelsOptionsSectionArray.join("\n")

    wheelsOptionsHTML += `</select>`

    return wheelsOptionsHTML
}
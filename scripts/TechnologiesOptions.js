export const TechologiesOptions = async () => {
    const response = await fetch("http://localhost:9000/technologies")
    const technologies = await response.json()

    let technologiesOptionsHTML = `
        <select id="technologies">
            <option value="0">Select a technology package</option>`

    const technologiesOptionsSectionArray = technologies.map(
        (technology) => {
            return `
                <option value="${technology.id}">${technology.type}</option>`
        }
    )

    technologiesOptionsHTML += technologiesOptionsSectionArray.join("\n")

    technologiesOptionsHTML += `</select>`

    return technologiesOptionsHTML
}
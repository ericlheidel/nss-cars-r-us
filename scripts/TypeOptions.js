export const TypesOptions = async () => {
    const response = await fetch("http://localhost:9000/types")
    const types = await response.json()

    let typesOptionsHTML = `
        <select id="types">
            <option value="0">Select a vehicle type</option>`

    const typesOptionsStringArray = types.map(
        (type) => {
            return `
                    <option value="${type.id}">${type.type}</option>`
        }
    )
    
    typesOptionsHTML += typesOptionsStringArray.join("")

    typesOptionsHTML += `</select>`

    return typesOptionsHTML
}
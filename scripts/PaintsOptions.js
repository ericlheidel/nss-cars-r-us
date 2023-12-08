export const PaintsOptions = async () => {
    const response = await fetch("http://localhost:9000/paints")
    const paints = await response.json()

    let paintsOptionsHTML = `
        <select id="paints">
            <option value="0">Select a paint color</option>`

    const paintsOptionsSectionArray = paints.map(
        (paint) => {
            return `
                <option value="${paint.id}">${paint.color}</option>`
        }
    )

    paintsOptionsHTML += paintsOptionsSectionArray.join("\n")

    paintsOptionsHTML += `</select>`

    return paintsOptionsHTML
}
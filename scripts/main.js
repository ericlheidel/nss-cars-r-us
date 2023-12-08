import { DisplayOrders } from "./DisplayOrders.js"
import {
    handleInteriorsTypeChange,
    handlePaintTypeChange,
    handleTechnologiesTypeChange,
    handleWheelsTypeChange
            } from "./HandleChanges.js"
import { InteriorsOptions } from "./InteriorsOptions.js"
import { PaintsOptions } from "./PaintsOptions.js"
import { OrderButton } from "./PlaceOrder.js"
import { TechologiesOptions } from "./TechnologiesOptions.js"
import { WheelsOptions } from "./WheelsOptions.js"

const container = document.querySelector("#container")


const render = async () => {

    // These EventListeners are listening for a change, when there is a change -->
    // The function will be called --> 
    // The function called will push the id of the target into an integer -->
    // and pass it through to the function that will set the Transient Data State
    document.addEventListener("change", handlePaintTypeChange)
    document.addEventListener("change", handleInteriorsTypeChange)
    document.addEventListener("change", handleTechnologiesTypeChange)
    document.addEventListener("change", handleWheelsTypeChange)

    const paintsHTML = await PaintsOptions()
    const interiorsHTML = await InteriorsOptions()
    const wheelsHTML = await WheelsOptions()
    const technologiesHTML = await TechologiesOptions()
    const orderButtonHTML = OrderButton()
    const displayOrdersHTML = await DisplayOrders()

    container.innerHTML = `
        <article class="options__article__top">
            <section class="paints__section options">
                <h2 class="options__label">Paints</h2>
                ${paintsHTML}
            </section>
            <section class="interiors__section options">
                <h2 class="options__label">Interiors</h2>
                ${interiorsHTML}
            </section>
        </article>
        <article class="options__article__bottom">
            <section class="wheels__section options">
                <h2 class="options__label">Wheels</h2>
                ${wheelsHTML}
            </section>
            <section class="technologies__section options">
                <h2 class="options__label">Technologies</h2>
                ${technologiesHTML}
            </section>
        </article>
        <article class="order__btn__article">
            <section class="order__btn__section">
                ${orderButtonHTML}
            </section>
        </article>
        <article class="orders__list">
                ${displayOrdersHTML}
        </article>`
}

document.addEventListener("newOrderCreated", event => {
    console.log(event)
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()
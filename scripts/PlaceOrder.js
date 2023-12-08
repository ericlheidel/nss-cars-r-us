import { SaveChanges } from "./TransientState.js";

const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "order__btn") {
        SaveChanges()
    }
}

export const OrderButton = () => {
    document.addEventListener("click", handleOrderButtonClick)
    
    return `<button id="order__btn">Place Car Order</button>`
}
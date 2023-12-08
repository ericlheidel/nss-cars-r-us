export const DisplayOrders = async () => {
    const response = await fetch("http://localhost:9000/orders?_expand=paints&_expand=interiors&_expand=wheels&_expand=technologies")
    const orders = await response.json()

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.paints.price + order.interiors.price + order.wheels.price + order.technologies.price
            return`
                <section class="orders__section">
                    <div class="order">Order #${order.id}: ${order.paints.color} car with ${order.wheels.type} wheels, ${order.interiors.type}, and the ${order.technologies.type} for a total cost of <b>${orderPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}</b>.
                </section>`
        }
    )

    return ordersHTML.join("\n")
}
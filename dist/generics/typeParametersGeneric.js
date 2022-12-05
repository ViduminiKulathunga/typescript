"use strict";
function genericFunction(valeOne, valTwo) {
    return { valeOne, valTwo };
}
genericFunction(3, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
let loginUser = (name, email, isPaid) => { };
let login = (name, email, isPaid = true) => { };
addTwo(5);
getUpper("Vidumini");
signUp("Vidumini", "vidu@gmail.com", true);
loginUser("Vidumini", "vidu@gmail.com", false);
login("Vidumini", "vidu@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return true;
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderpam", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg);
}

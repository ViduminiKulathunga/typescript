"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) { };
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
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
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderpam", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg);
}

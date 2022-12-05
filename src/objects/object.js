"use strict";
exports.__esModule = true;
var User = {
    name: "Vidumini",
    email: "vidu@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Vidumini", isPaid: false });
var newUSer = { name: "Vidumini", isPaid: false, email: "user@gmail.com" };
createUser(newUSer);
function createCourse() {
    return { name: "Vidumini", isPaid: false };
}

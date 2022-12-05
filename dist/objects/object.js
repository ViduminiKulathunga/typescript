"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "Vidumini",
    email: "vidu@gmail.com",
    isActive: true,
};
function createUser({ name, isPaid }) { }
createUser({ name: "Vidumini", isPaid: false });
let newUSer = { name: "Vidumini", isPaid: false, email: "user@gmail.com" };
createUser(newUSer);
function createCourse() {
    return { name: "Vidumini", isPaid: false };
}

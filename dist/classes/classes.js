"use strict";
class Person {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "";
        this._courseCount = 1;
    }
    get getEmail() {
        return `Email apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than one!");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("Token Deleted.");
    }
}
const person1 = new Person("vidu@gmail.com", "Vidumini");

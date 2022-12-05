"use strict";
class TakesPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 10;
    }
}
//const person = new TakesPhoto("test", "test");
class Instagram extends TakesPhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("working");
    }
}
const person = new Instagram("test", "test", 1);
person.getReelTime();

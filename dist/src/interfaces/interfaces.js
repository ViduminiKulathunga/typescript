"use strict";
const user = {
    dbId: 123,
    email: "vidu@gmail.com",
    id: 1,
    role: "admin",
    githubToken: "code1",
    discount: true,
    startTrial: () => "Trial Started",
    endTrial: () => {
        return "Success";
    },
    getCoupon: (name, value) => {
        return 10;
    },
};
user.googleId = "google";

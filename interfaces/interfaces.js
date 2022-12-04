var user = {
    dbId: 123,
    email: "vidu@gmail.com",
    id: 1,
    role: "admin",
    githubToken: "code1",
    discount: true,
    startTrial: function () { return "Trial Started"; },
    endTrial: function () {
        return "Success";
    },
    getCoupon: function (name, value) {
        return 10;
    }
};
user.googleId = "google";

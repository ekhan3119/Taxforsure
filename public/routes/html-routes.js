var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });

    app.get("/jobs", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/jobs.html"));
    });


    app.get("/job2", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/job2.html"));
    });

    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};


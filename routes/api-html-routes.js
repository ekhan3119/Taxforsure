
var path = require("path");


module.exports = function (app) {


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // cms route loads cms.html
    app.get("/jobs", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/jobs.html"));
    });

    // blog route loads blog.html
    app.get("/job2", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/job2.html"));
    });

    // authors route loads author-manager.html
    app.get("/profile", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });

};

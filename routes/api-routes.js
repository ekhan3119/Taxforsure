var db = ("../model");

// Routes
// =============================================================
var db = require("../model");

module.exports = function (app) {
    app.get("/api/user_profile", function (req, res) {

        User.findAll({
            include: [db.taxforsure]
        }).then(function (User) {
            console.log(User);
            res.json(User);
        });
    });
    app.post("/api/user_profile", function (req, res) {
        console.log(req.body);

        db.User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastName,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode



        }).then(function (db) {
            res.json(dbUser);
        });
    });

    app.get("/api/jobs/:id", function (req, res) {

        db.Job.findOne({
            where: {
                id: req.params.id
            },
            include: [db.taxforsure]
        }).then(function (dbtaxforsure) {
            res.json(dbtaxforsure);
        });
    });

    app.post("/api/index", function (req, res) {
        db.Jobuser.create({
            where: {
                rate: req.body.rate,
                timeEntry: req.body.timeEntry
            }
        })

            .then(function (dbJobuser) {
                res.json(dbJobuser);
            });
    });

    app.delete("/api/jobs/:id", function (req, res) {
        db.jobs.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbjob) {
            res.json(dbjob);
        });
    });

};
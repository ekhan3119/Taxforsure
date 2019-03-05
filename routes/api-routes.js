var db = ("../models");

// Routes
// =============================================================
var db = require("../models");

module.exports = function (app) {
    app.get("/api/profile", function (req, res) {

        db.taxforsure.findAll({
            include: [db.taxforsure]
        }).then(function (dbtaxforsure) {
            console.log(dbtaxforsure)
            res.json(dbtaxforsure);
        });
    });
    app.post("/api/profile", function (req, res) {
        console.log(req.body);

        db.taxforsure.create({
            firstName: req.body.firstname,
            lastName: req.body.lastName,


        }).then(function (dbtaxforsure) {
            res.json(dbtaxfosure);
        });
    });

    app.get("/api/jobs/:id", function (req, res) {

        db.taxforsure.findOne({
            where: {
                id: req.params.id
            },
            include: [db.taxforsure]
        }).then(function (dbtaxforsure) {
            res.json(dbtaxforsure);
        });
    });

    /*  app.post("/api/taxforsure", function (req, res) {
         db.taxforsure.create(req.body).then(function (dbtaxforsure) {
             res.json(dbtaxforsure);
         });
     });
  */
    /*     app.delete("/api/taxforsure/:id", function (req, res) {
            db.taxforsure.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbtaxforsure) {
                res.json(dbtaxforsure);
            });
        });
     */
};
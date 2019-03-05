var db = ("../models");

// Routes
// =============================================================
var db = require("../models");

module.exports = function (app) {
    app.get("/api/taxforsure", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.taxforsure.findAll({
            include: [db.Post]
        }).then(function (dbtaxforsure) {
            res.json(dbtaxforsure);
        });
    });

    app.get("/api/taxforsure/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.taxforsure.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbtaxforsure) {
            res.json(dbtaxforsure);
        });
    });

    app.post("/api/taxforsure", function (req, res) {
        db.taxforsure.create(req.body).then(function (dbtaxforsure) {
            res.json(dbtaxforsure);
        });
    });

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
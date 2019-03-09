var db = require("../models");

module.exports = function (app) {
    app.get("/api/index", function (req, res) {
        db.Time.findAll({}).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    /*   app.get("/api/authors/:id", function(req, res) {
        // 2; Add a join to include all of the Author's Posts here
        db.Author.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(dbAuthor) {
          res.json(dbAuthor);
        });
      }); */

    app.post("/api/index", function (req, res) {
        db.Time.create({
            MonT: req.body.MonT,
            TueT: req.body.TueT,
            WedT: req.body.WedT,
            ThuT: req.body.ThurT,
            FriT: req.body.FriT,
            SatT: req.body.SatT,
            SunT: req.body.SunT

        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });


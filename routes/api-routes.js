
var db = require("../model");
var express = require('express');



module.exports = function (app, db) {


    app.get("/api/user_profile", function (req, res) {

        db.User.findAll({
            include: [db.Job]
        }).then(function (dbUser) {
            console.log(User);
            res.json(dbUser);
        });
    });
    app.get("/api/jobs/:id", function (req, res) {

        db.Job.findAll({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbJob) {
            res.json(dbJob);
        });
    });
    app.post("/api/profile", function (req, res) {
        console.log(req.body);

        db.User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastName,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode

        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });



    app.post("/api/index", function (req, res) {
        db.Userjob.create({
            where: {
                rate: req.body.rate,
                timeEntry: req.body.timeEntry
            }
        })

            .then(function (dbUserjob) {
                res.json(dbUserjob);
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
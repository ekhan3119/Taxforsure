
var db = require("../model")


module.exports = function (app) {

    app.get("/api/profile", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/profile/:id", function (req, res) {

        db.User.find({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            console.log('User');
            res.json(dbUser);
        });
    });



    app.post("/api/profile", function (req, res) {
        console.log(req.body);
        db.User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastName,
            email: req.body.email,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode

        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });





    app.put("/api/profile", function (req, res) {
        db.User.update({
            firstName: req.body.firstname,
            lastName: req.body.lastName,
            email: req.body.email,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        },
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUser) {
                res.json(dbUser);
            });
    });

    app.delete("/api/profile/:id", function (req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });


};
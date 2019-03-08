var db = require("../model")
module.exports = function (app) {
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


}

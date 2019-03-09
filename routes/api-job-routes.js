var db = require("../model")

module.exports = function (app) {
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
    app.put("/api/jobs/:id", function (req, res) {
        db.Job.update({
            where: {
                id: req.body.id,
                job_inckname: req.body.id
            }
        }).then(function (dbJob) {
            res.jason(dbJob);
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

}


require("dotenv").config();

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var axios = require("axios");
var bodyParser = require("body-parser");
var db = require("./model");
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function(err) {
        if (!err) {
            console.log("App listening on port: " + PORT);
        } else {
            console.log("Cann't connect to server");
        }
    });
});

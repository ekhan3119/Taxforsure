var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var passport = require('passport');
var session = require('express-session');
var moment = require('moment');

// Requiring our models for syncing
//var db = require("./models");
require('./config/passport')(passport); // configuration
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.session());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
/* require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app); */

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({}).then(function() {

require("./routes/auth")(app, passport);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
//});
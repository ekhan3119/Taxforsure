var GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = function (passport) {
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        done(err, { username: 'accime' });
        // User.findById(id, function (err, user) {
        //     done(err, user);
        // });
    });
    // Use the GoogleStrategy within Passport.
    //   Strategies in passport require a `verify` function, which accept
    //   credentials (in this case, a token, tokenSecret, and Google profile), and
    //   invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:8080/auth/google/callback",
        // passReqToCallback: true
    },
        function (accessToken, refreshToken, profile, done) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return done(err, user);
            // });
            // console.log('Request: ', request);
            console.log('Access Token: ', accessToken);
            console.log('Refresh Token: ', refreshToken);
            console.log('Profile: ', profile)
            console.log('Done: ', done)
            done(null, { username: 'accimeesterlin' });
        }
    ));

}
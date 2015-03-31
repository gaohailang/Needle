var CONFIG = require('../OathKeeper/frontend/gapi-needle.json');

var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var verifyHandler = function(token, tokenSecret, profile, done) {
    process.nextTick(function() {
        if (profile.emails && profile.emails[0] && profile.emails[0].value) {
            var email = profile.emails[0].value;
        }
        if (email.indexOf('@wandoujia.com') > -1) {
            done(null, profile);
        } else {
            done('Err, not in wandoujia domain');
        }
    });
};

passport.serializeUser(function(user, done) {
    done(null, user.uid);
});

passport.deserializeUser(function(uid, done) {
    done(null, 1111);
});

module.exports = {
    http: {
        customMiddleware: function(app) {
            console.log('Express midleware for passport');
            passport.use(new GoogleStrategy({
                clientID: CONFIG.clientID,
                clientSecret: CONFIG.clientSecret,
                callbackURL: '/needle/login/google/callback'
            }, verifyHandler));

            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};
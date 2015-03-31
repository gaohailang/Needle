/**
 * AuthController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require('passport');

module.exports = {

  index: function(req, res) {
    res.view();
  },

  // https://developers.google.com/
  // https://developers.google.com/accounts/docs/OAuth2Login#scope-param
  google: function(req, res) {
    passport.authenticate('google', { failureRedirect: '/login/google', scope: ['https://www.googleapis.com/auth/plus.profile.emails.read'] }, function(err, user) {
      if(user) {
        req.session.isLogin = true;
        res.redirect('/needle');
      } else {
        res.view('500');
        return;
      }
    })(req, res);
  }
};

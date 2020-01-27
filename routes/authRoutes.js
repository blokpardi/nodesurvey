const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get(
    '/auth/msid',
    passport.authenticate('windowslive', {
      scope: ['wl.signin', 'wl.basic']
    })
  );
  app.get('/auth/msid/callback', passport.authenticate('windowslive'));

  app.get('/api/current_user', (req, res) =>{
    res.send(req.user);
  });
};

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const WindowsLiveStrategy = require('passport-windowslive').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('id:', profile.id);
      new User({ userId: profile.id }).save();
    }
  )
);

passport.use(
  new WindowsLiveStrategy(
    {
      clientID: keys.msidClientID,
      clientSecret: keys.msidClientSecret,
      callbackURL: '/auth/msid/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('id:', profile.id);
      new User({ userId: profile.id }).save();
    }
  )
);

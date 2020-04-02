const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy   = passportJWT.Strategy;
const LocalStrategy = require('passport-local').Strategy;

const db = require("./models");
const User = db.User;

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    return User.findOne({ where: { email: email, password: password }, attributes: { exclude: ['password'] } })
      .then(user => {
        if(!user) {
          return done(null, false, {message: 'Invalid email or password.'});
        }
        return done(null, user.dataValues, {message: 'Logged In Successfully.'});
      }).catch(err => done(err));
  }
));

passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
  }, 
  function (jwtPayload, done) {  
    return User.findByPk(jwtPayload.id)
      .then(user => {
          return done(null, user);
      })
      .catch(err => {
          return done(err);
      });
  }
));
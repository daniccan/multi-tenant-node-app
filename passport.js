const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy   = passportJWT.Strategy;
const LocalStrategy = require('passport-local').Strategy;

const dbRepo = require('./models');

const common = require('./src/utils/common');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async function(request, email, password, done) {
    let dbKey = await common.getDBKeyFromRequest(request);
    const User = dbRepo[dbKey].User;
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
    secretOrKey: 'your_jwt_secret',
    passReqToCallback: true
  }, 
  async function (request, jwtPayload, done) {  
    let dbKey = await common.getDBKeyFromRequest(request);
    const User = dbRepo[dbKey].User;
    return User.findByPk(jwtPayload.id)
      .then(user => {
          return done(null, user);
      })
      .catch(err => {
          return done(err);
      });
  }
));

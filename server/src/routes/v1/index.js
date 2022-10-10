const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const urlRoute = require('./url.route');
const clientRoute = require('./client.route');
const urlCollectionRoute = require('./url-collection.route');
const callbackRoute = require('./callback.route');
const docsRoute = require('./docs.route');
const shareRoute = require('./share.route')
const historyRoute = require('./history.route')
const scheduleRoute = require('./schedule.route')
const config = require('../../config/config');

const router = express.Router();

// Routes available in production mode
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/url',
    route: urlRoute,
  },
  {
    path: '/tree',
    route: urlCollectionRoute,
  },
  {
    path: '/authorization',
    route: callbackRoute,
  },
  {
    path: '/client',
    route: clientRoute,
  },
  {
    path: '/share',
    route: shareRoute
  },
  {
    path: '/history',
    route: historyRoute
  },
  {
    path: '/schedule',
    route: scheduleRoute
  }
];

// Routes available only in development mode
const devRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;

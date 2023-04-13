const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const movies = require('./movies')
// const authRoutes = require('./auth');
// const userRoutes = require('./user');
// const messageRoutes = require('./message');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
movies(router);
// authRoutes(router);
// userRoutes(router);
// messageRoutes(router)

module.exports = router;

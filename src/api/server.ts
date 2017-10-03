import * as express from 'express'
import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { connect, connection } from "mongoose";

import { usersRoutes } from './routes/users';

import serverConfig from '../../src/config';

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// MongoDB Connection
connect(serverConfig.mongoURL, (error: any) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: connection
  })
}));

var router: Router = Router();
app.use('/api', router);

// Add all custom routes
usersRoutes(router);

// start app
app.listen(serverConfig.port, (error: any) => {
  if (!error) {
    console.log(`Application is running on port: ${serverConfig.port}!`);
  }
});

export default app;
import * as express from 'express'
import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { connect, connection } from "mongoose";
import * as session from 'express-session';
import * as mongoConnect from 'connect-mongo';

import { usersRoutes } from './routes/users';

import serverConfig from '../../src/config';

var MongoStore = mongoConnect(session);

// MongoDB Connection
connect(serverConfig.mongoURL, { useMongoClient: true }, (error: any) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
app.use('/api', require);

// Add all custom routes
usersRoutes(router);

// start app
app.listen(serverConfig.port, (error: any) => {
  if (!error) {
    console.log(`Application is running on port: ${serverConfig.port}!`);
  }
});

export default app;
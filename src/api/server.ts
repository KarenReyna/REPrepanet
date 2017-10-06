import * as express from 'express'
// import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { connect, connection } from "mongoose";
import * as session from 'express-session';
import * as mongoConnect from 'connect-mongo';

// import { usersRoutes } from './routes/users';

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

// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX
// We are authorizing all domains to be able to manage information via AJAX (this is just for development)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length");
  console.log("Test");
  if ('OPTIONS' == req.method){
    console.log("OPTIONS");
    res.send(200);
  }
  else{
    console.log("NEXT");
    next();
  }

});

app.use(bodyParser.urlencoded({ extended: true }));
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



// Add all custom routes
// usersRoutes(router);

var router = require('./routes/users');
app.use('/api', router);

// start app
app.listen(serverConfig.port, (error: any) => {
  if (!error) {
    console.log(`Application is running on port: ${serverConfig.port}!`);
  }
});

export default app;
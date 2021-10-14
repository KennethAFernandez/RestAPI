import http from 'http';
import express from 'express';
import log from './config/log';
import config from './config/config';
import mongoose from 'mongoose';
import Routes from './routes/user-routes';
import ErrorHandler from './errorHandler';


/** Create express server and define namespace */

const app = express();
const namespace = 'SERVER';

/** 
 * Using mongoose to connect to mongodb with values defined in the
 * config file & logging/ error handling
 * Need to update when coordinating databases for the schedule info.
 */

mongoose.connect(config.mongo.url, config.mongo.options).then(result => {
    log.info(namespace, 'Connected to Mongodb');
})
    .catch((error) => {
        log.error(namespace, error.message, error);
        process.exit();
    });

/**
 * Logging - outputs namespace, method, and url and on res finish
 * outputs status code as well 
*/

app.use((req, res, next) => {
    log.info(namespace, `[METHOD - ${req.method}], [URL] [${req.url}]`);
    res.on('finish', () => {
        log.info(namespace, `[STATUS - ${res.statusCode}]`);
    });
    next();
});

/**
 * urlencoded: middleware for parsing bodies from URL
 * json: middleware for parsing JSON objects
 */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** 
 * API - Allow resrouce sharing 
 */

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'x');
    res.header('Access-Control-Allow-Headers', 'Origin X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/**
 * Routes to home page, login page, registration page & cal. page
 * throw away routes to html pages -> Testing
 */

app.use('/user', Routes);

/** API uses errorHandler.ts */

app.use(ErrorHandler.errorHandler);

/** 
 * Create Server using http import 
 * import hostname & port from the config file
 */

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => log.info(namespace, `Running => ${config.server.hostname}:${config.server.port}`));

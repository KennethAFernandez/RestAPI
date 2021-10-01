// sudo npm i -g typescript
// COMPILE: [tsc file.ts]
// typescript config file: tsc --init
// npm init -y
// npm i express
// npm i -D typescript ts-node nodemon
// update package.json ("start", "dev", "build")
// npm run build compiles to .js file

import http from 'http';
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import log from './config/log';
import config from './config/config';
import dates from './routes/dates'
import mongoose, { mongo } from 'mongoose';

const app = express();
const namespace = 'Server';

/** Mongo */
// mongoose
//     .connect(config.mongo.url, config.mongo.options).then(result => {
//     log.info(namespace, 'Connected to Mongodb');
// })
//     .catch((error) => {
//         log.error(namespace, error.message, error);
//     });


/** Logging */
app.use((req, res, next) => {
    log.info(namespace, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        log.info(namespace, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], 
        STATUS - [${res.statusCode}]`);
    });

    next();
});

/** Request */
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('origin', '*');
    res.header('header', 'origin, x-req with, cotent-type, accept, authorization');

    if(req.method == 'OPTIONS'){
        res.header('methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
app.use('/sample', dates);

/** Error Handling */
app.use((req, res, next) => {
    const err = new Error('[NOT FOUND]');

    return res.status(404).json({
        message: err.message
    });
});

/** Create server */
const httpeServer = http.createServer(app);
httpeServer.listen(config.server.port, () => log.info(namespace, `Server running on ${config.server.hostname}:${config.server.port}`));
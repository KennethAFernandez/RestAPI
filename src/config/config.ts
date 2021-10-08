import dotenv from 'dotenv';

dotenv.config();

/** 
 * FROM => Node.js MongoDB Driver API documentation
 * useUnifiedTopology: Model all supporting topology types
 * with a single engine
 * useNewUrlParser: Enables url parser in core driver
 * socketTimeoutMS: TCP Socket timeout setting
 * keepAlive: TCP connection keep alive enabled
 * poolSize: Max. # of individual server pool (DISABLED)
 * autoIndex:
 * retryWrites:
 */

const MONGO_OPTIONS = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false,
    retryWrites: false,
    //poolSize: 50, 
};

/** 
 * Define mongo username, password and host from env. variables,
 * and set default values.(NEED TO BE UPDATED)
 */

const MONGO_USER = process.env.MONGO_USER || 'ynnek';

const MONGO_PW = process.env.MONGO_PW || 'Mongosecretpassword';

const MONGO_HOST = process.env.MONGO_URL || 'cluster0.ayfx1.mongodb.net/myFirstDatabse?retryWrites=true&w=majority';

/**
 * Define var MONGO with previously instantiated variables.
 */

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USER,
    pw: MONGO_PW,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_HOST}`
};

/**
 * Initialize port number and host name for testing purposes
 */

const PORT = process.env.PORT || 5000;

const HOST = process.env.HOST || 'localhost';

const SERVER = {
    hostname: HOST,
    port: PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

/**
 * Export config values for use in app.ts
 */

export default config;
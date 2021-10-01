import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50, 
    autoIndex: false,
    retryWrites: false
};

const MONGO_USER = process.env.MONGO_USERNAME || 'username';
const MONGO_PW = process.env.MONGO_PW || 'pw';
const MONGO_HOST = process.env.MONGO_URL || 'thing';
const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USER,
    pw: MONGO_PW,
    options: MONGO_OPTIONS,
    url: `mongodb://${MONGO_USER}:${MONGO_PW}:${MONGO_HOST}`
};

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

export default config;
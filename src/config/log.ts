const getTimeStamp = (): string => {
    return new Date().toISOString();
}

/** Functions 'info' and 'warn' to be used for logging purposes */

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] - [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] - [${namespace}] ${message}`);
        
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] - [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] - [ERROR] [${namespace}] ${message}`);
        
    }
};

export default {
    info,
    error,
};
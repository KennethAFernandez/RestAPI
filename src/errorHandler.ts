import { Request, Response, NextFunction} from 'express';

/** 
 * Simple error handler - might need to upate the controlers
 * since we are using this.
 * Match error message to name and output corresponding status code
 */

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error.name === 'UnauthorizedError') {
        return res.status(401).json({ message: error.message});
    }

    if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message});
    }

    // Bad request
    if (typeof(error) === 'string') {
        return res.status(400).json({ message: error});
    }
    // Internal server error
    return res.status(500).json({message: error.message});
}

export default { errorHandler };
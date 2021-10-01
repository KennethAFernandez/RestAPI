import { Request, Response, NextFunction} from 'express';
import log from '../config/log';
import Date from '../model/date';

const namespace = 'Sample'

const getDates = (req: Request, res: Response, next: NextFunction) => {
    log.info(namespace, 'sample check');

    return res.status(200).json({
        day: 'Today',
        month: 'This month',
        info: 'Tutoring Adam.'
    });

    Date.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                dates: results,
                count: results.length
            });
            
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { getDates };
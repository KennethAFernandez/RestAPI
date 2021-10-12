import mongoose, { Schema } from 'mongoose';
import schedule from '../interface/schedule-interface';
import log from '../config/log'

const ScheduleSchema: Schema = new Schema (
    {
        day: {
            type: Number
        },
        month: {
            type: String
        },
        time: {
            type: Number
        },
        extraInfo: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

ScheduleSchema.post<schedule>('save', function() {
    log.info('MONGO', 'Scheduled-Event-Created: ', this);
});
export default mongoose.model<schedule>('Event', ScheduleSchema);
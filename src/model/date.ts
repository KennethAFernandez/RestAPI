import mongoose, { Schema } from 'mongoose';
import DateVar from '../interface/date';


const DateSchema: Schema = new Schema (
    {
        day: { type: String }, 
        month: { tpye: String },
        info: { type: String }
    }, 
    {
        timestamps: true
    }
);

export default mongoose.model<DateVar>('Date', DateSchema);


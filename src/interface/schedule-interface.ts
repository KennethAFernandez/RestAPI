import { Document } from 'mongoose';

export default interface schedule extends Document {
    day: Number,
    month: Number,
    time: Number,
    extraInfo: String  
}
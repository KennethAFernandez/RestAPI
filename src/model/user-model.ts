import mongoose, { Schema } from 'mongoose';
import userInterface from '../interface/user-interface';
import log from '../config/log'

/** 
 * Defines values to be used in JSON blob being
 * sent to mongo. Need to update values with required = true/false
 * and unique = true/false
 * Import models?
 */

const UserSchema: Schema = new Schema (
    {
        firstName: { 
            type: String
        }, 
        lastName: { 
            type: String 
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    }, 
    {
        timestamps: true
    }
);

UserSchema.post<userInterface>('save', function () {
    log.info('MONGO', 'User-Created: ', this);
});
export default mongoose.model<userInterface>('User', UserSchema);


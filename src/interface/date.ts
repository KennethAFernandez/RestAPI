import { Document } from "mongoose";

export default interface DateVar extends Document {
    day: String;
    month: String;
    info: String;
}
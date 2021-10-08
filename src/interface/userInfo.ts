import { Document } from "mongoose";

/** 
 * Describes document we are going to be using within
 * mongoDB. Contains user name, email, pw.
 */

export default interface userInterface extends Document {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
}


import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    name: String,
    subject: String,
    message: String,
   
});

export default model("Message", MessageSchema);
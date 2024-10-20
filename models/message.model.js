import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    messageText: { type: String, required: true },
    receivedID: { type: String, required: true }
});

export const messageModel = mongoose.model("message", messageSchema)
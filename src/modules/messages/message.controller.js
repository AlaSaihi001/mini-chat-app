import { messageModel } from "../../../models/message.model.js";

export const createMessage = async (req, res) => {
    try {
        const { user, messageText, receivedID } = req.body;
        const message = await messageModel.create({ user, messageText, receivedID }); 
        res.json({ message: "Message sent", message });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const readMessage = async (req, res) => {
    try {
        const messages = await messageModel.find({ user: req.params.userId });
        res.status(200).json({ messages });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

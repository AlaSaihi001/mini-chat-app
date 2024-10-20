import express from "express";
import { createMessage, readMessage } from "./message.controller.js";

const messageRouter = express.Router();

messageRouter.post("/messages", createMessage);
messageRouter.get("/messages/:userId", readMessage);

export default messageRouter;
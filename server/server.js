import express from 'express';
import dotenv from 'dotenv';
// const express = require("express");
import { chats } from './data/data.js'
import { connectDB } from './config/dbPool.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import { notFound, errorHandler } from "./middleware/error.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT;
app.use(express.json()); //accept JSON data from client

//Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

app.get('/chat' , (req , res)=>{
   res.send(chats)
})

app.get('/chat/:id' , (req , res)=>{
    console.log(req.params.id)
    const singleChat = chats.find((c => c._id === req.params.id))
    res.send(singleChat)

})


app.listen(PORT, console.log(`Server started on PORT ${PORT}...`));
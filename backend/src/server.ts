import dotenv from 'dotenv'
// const { dotenv } = require('dotenv');

dotenv.config();

const { express } = require('express');
const { cors } = require('cors');
const { foodRouter } = require('./router/food.router');
const { userRouter } = require('./router/user.router');
const { dbConnect } = require('./configs/database.config');
const { orderRouter } = require('./router/order.router');

// import express from "express";
// import cors from "cors";
// import foodRouter from './router/food.router';
// import userRouter from "./router/user.router";

// import { dbConnect } from './configs/database.config';
// import orderRouter from './router/order.router';

dbConnect();
const app = express();
app.use(express.json());
// Front end -> localhost:4200
// Back end -> localhost:5000
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
  }))
app.use("/api/foods",foodRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)

const port =5000;
app.listen(port,()=>{
    console.log("website served on http://localhost:"+port)
})

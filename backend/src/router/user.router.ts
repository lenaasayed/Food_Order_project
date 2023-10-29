import {Router} from 'express';
import { sample_users } from '../data';
import jwt from "jsonwebtoken";
import asynceHandler from 'express-async-handler'
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs'

const router = Router();

router.get("/seed",asynceHandler(
   async (req,res)=>{
        const usersCount = await UserModel.countDocuments();
        if(usersCount>0){
            res.send("Seeds done");
            return;
        }
        await UserModel.create(sample_users);
        res.send("Seeds done");
    
    }
)) 

router.post("/login",asynceHandler(
   async  (req,res)=>{
        // destructure assignment
        const {email,password}= req.body;
        const user = await UserModel.findOne({email})
        // authentication and authorization
        // we will send user and token
        //token : it's encrypted text that will be sent to client and need to be saved there so the client should send it with each request 
        //then server will decrypt it and understand which user are doing that request 

            if(user && (await bcrypt.compare(password,user.password))){
                res.send(generateTokenResponse(user));
            }
            else{
                res.status(HTTP_BAD_REQUEST).send("User name or password not valid")
            }
    })
)

router.post("/register",asynceHandler(
    async  (req,res)=>{
         const {name,email,password,address}= req.body;
         const user = await UserModel.findOne({email})
             if(user){
                 res.status(HTTP_BAD_REQUEST) 
                .send('User is already exist, please login!');
                return;
             }
         const encryptedPassword = await bcrypt.hash(password,10);
         const newUser:User = {
            id:'',
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            // token:"",
            isAdmin: true,
         }
         const dbUser = await UserModel.create(newUser);
         res.send(generateTokenResponse(dbUser));

     })
 )
 
const generateTokenResponse =(user:any)=>{
    const token = jwt.sign({
       id:user.id,email:user.email,isAdmin:user.isAdmin
    },process.env.JWT_SECRET!,{expiresIn:"30d"});

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
}

export default router;

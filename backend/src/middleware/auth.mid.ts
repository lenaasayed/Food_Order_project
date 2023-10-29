import { HTTP_UN_AUTHORIZED } from "../constants/http_status";
import {verify} from "jsonwebtoken";


export default (req:any,res:any,next:any) =>{
    const token = req.headers.access_token as string ;
    if(!token) {
        // console.log("failed")
        return res.status(HTTP_UN_AUTHORIZED).send();
    }

    try{
        const decodedUser = verify(token,process.env.JWT_SECRET!)
        // console.log("try")
        // console.log(decodedUser)
        req.user = decodedUser;
    }
    catch{
        // console.log("catch")
        return res.status(HTTP_UN_AUTHORIZED).send();
    }

    return next();
}
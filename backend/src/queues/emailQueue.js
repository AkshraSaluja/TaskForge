import {Queue} from "bullmq";
import redisConfig from "../config/redis.js";

const emailQueue=new Queue("email",{ //email is the name for the queue 
    connection: redisConfig//{ 
        //connection is basically reddis connection configuration 
        // host: "127.0.0.1", // redis is running on our computer 
        // port:6379 //redis default port 
   // }
});

export default emailQueue; //allow other files to use this queue
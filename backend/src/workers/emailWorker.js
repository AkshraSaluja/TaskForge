import { Worker } from "bullmq";
import redisConfig from "../config/redis.js";
const emailWorker=new Worker(
    "email",
    async(job)=>{
        console.log("Processing job:",job.name);
        console.log("Email data",job.data);
        if (job.data.forceFail) {
            throw new Error("Simulated email service failure");
        }
        console.log(`Sending email to ${job.data.to}`);
    },
    {
        // connection:{
        //     host:"127.0.0.1",
        //     port:6379
        // }// this was hardcoded 
        connection: redisConfig
    }
);

console.log("Email worker started");

emailWorker.on("completed",(job)=>{
    console.log(`Job ${job.id} completed`);
});

emailWorker.on("failed",(job,error)=>{
    console.log(`Job ${job.id} failed :${error.message}`);
});


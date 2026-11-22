import { Worker } from "bullmq";
const emailWorker=new Worker(
    "email",
    async(job)=>{
        console.log("Processing job:",job.name);
        console.log("Email data",job.data);
        console.log(`Sending email to ${job.data.to}`);
    },
    {
        connection:{
            host:"127.0.0.1",
            port:6379
        }
    }
);

console.log("Email worker started");

emailWorker.on("completed",(job)=>{
    console.log(`Job ${job.id} completed`);
});

emailWorker.on("failed",(job,error)=>{
    console.log(`Job ${job.id} failed :${error.message}`);
});
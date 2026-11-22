import emailQueue from "./queues/emailQueue.js";

const job= await emailQueue.add("welcome-email",{ //adds a new job ,welcome-emal is job name and this object is job data 
    to:"test@example.com",
    subject:"Welcome to taskforge"
});
console.log("Job added:",job.id);
process.exit(0);
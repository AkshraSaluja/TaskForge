import express from "express";
import emailQueue from "../queues/emailQueue.js";

const router=express.Router();
router.post("/",async(req,res)=>{
    try{
        const{name,data}=req.body;
        if(!name || !data || !data.to ){
            return res.status(400).json({
                error:"Job name and recipient email are required"
            });
        }
        const job =await emailQueue.add(name,data);
        return res.status(201).json({
            message: "Job added successfully",
            jobId:job.id
        });
    } catch(error){
        console.log("Error adding jobs",error);
        return res.status(500).json({
            error:"Failed to add the job"
        });
    }
});

export default router;
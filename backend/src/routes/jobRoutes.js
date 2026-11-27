
import express from "express";
import emailQueue from "../queues/emailQueue.js";

const router = express.Router();

// Add a new job
router.post("/", async (req, res) => {
  const { name, data } = req.body;

  if (!name || !data || !data.to) {
    return res.status(400).json({
      success: false,
      message: "Job name and recipient email are required"
    });
  }

  const job = await emailQueue.add(name, data, {
    attempts: 4,
    backoff: {
      type: "exponential",
      delay: 2000
    }
  });

  res.status(201).json({
    success: true,
    message: "Job added successfully",
    jobId: job.id
  });
});

// Get job status
router.get("/:jobId", async (req, res) => {
  const { jobId } = req.params;

  const job = await emailQueue.getJob(jobId);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Job not found"
    });
  }

  const status = await job.getState();

  res.status(200).json({
    success: true,
    jobId: job.id,
    name: job.name,
    status,
    data: job.data
  });
});

export default router;

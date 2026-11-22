import express from 'express';
import jobRoutes from "./routes/jobRoutes.js"
const app = express();

app.use(express.json());
app.use("/api/jobs",jobRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'TaskForge API is running'
  });
});

export default app;

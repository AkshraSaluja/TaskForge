import express from 'express';
import jobRoutes from "./routes/jobRoutes.js"
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use("/api/jobs",jobRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success:true,
    status: 'ok',
    message: 'TaskForge API is running'
  });
});

// Centralized error handler (must be registered last)
app.use(errorMiddleware);
export default app;

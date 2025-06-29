import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectToMyDatabase from "./database/db.js";
import feedbackRouter from "./routes/feedbackRoutes.routes.js";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectToMyDatabase();

// Routes
app.use("/api/v1/feedback", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

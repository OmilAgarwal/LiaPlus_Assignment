import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required for feedback!"],
    },
    email: {
      type: String,
      required: [true, "Email is required for feedback!"],
    },
    text: {
      type: String,
      required: [true, "Feedback is required!"],
    },
    category: {
      type: String,
      enum: ["Suggestion", "Bug Report", "Feature Request"],
      default: "Suggestion",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);

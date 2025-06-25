import express from "express";

import {
  getFeedback,
  submitFeedback,
} from "../controllers/feedbackController.controller.js";

const router = express.Router();

router.route("/").get(getFeedback);
router.route("/").post(submitFeedback);

export default router;

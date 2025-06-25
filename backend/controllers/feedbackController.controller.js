import Feedback from "../models/feedback.model.js";

export const submitFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const { category, sort } = req.query;
    let query = category ? { category } : {};
    let feedback = await Feedback.find(query).sort(
      sort ? { createdAt: sort === "asc" ? 1 : -1 } : {}
    );
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

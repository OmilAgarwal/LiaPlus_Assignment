import React, { useState } from "react";
import axios from "axios";
import mascot2 from "../../assets/mascot2.png";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
    category: "Suggestion",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    try {
      await axios.post("http://localhost:5000/api/v1/feedback", form);
      setForm({ name: "", email: "", text: "", category: "Suggestion" });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-200 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Submit Your Feedback
          </h2>

          <input
            className="w-full p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className="w-full p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            className="w-full p-3 border border-indigo-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your feedback"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            required
          ></textarea>
          <select
            className="w-full p-3 border border-indigo-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="Suggestion" className="bg-yellow-100">
              Suggestion
            </option>
            <option value="Bug Report" className="bg-yellow-100">
              Bug Report
            </option>
            <option value="Feature Request" className="bg-yellow-100">
              Feature Request
            </option>
          </select>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold py-3 px-6 rounded hover:bg-pink-600 transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 font-medium mt-2">
              ✅ Feedback submitted successfully!
            </p>
          )}
        </form>

        <div className="md:w-1/3 flex justify-center">
          <img
            src={mascot2}
            alt="Mascot"
            className="w-64 h-auto drop-shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;

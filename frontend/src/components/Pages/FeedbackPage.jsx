import axios from "axios";
import React, { useEffect, useState } from "react";
import mascot from "../../assets/mascot.png";

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    let url = "http://localhost:5000/api/v1/feedback?";
    if (category) url += `category=${category}&`;
    if (sort) url += `sort=${sort}`;
    axios.get(url).then((res) => setFeedbacks(res.data));
  }, [category, sort]);

  // Determine the border class based on category
  const getBorderClass = (category) => {
    switch (category) {
      case "Suggestion":
        return "border-yellow-400";
      case "Bug Report":
        return "border-pink-500";
      case "Feature Request":
        return "border-indigo-500";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-indigo-100 px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Feedback Container */}
      <div className="w-full md:w-2/3 ml-[10%] bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">
          User Feedback
        </h2>

        {/* Filter and Sort */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">All Categories</option>
            <option>Suggestion</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
          </select>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Sort by</option>
            <option value="asc">Oldest First</option>
            <option value="desc">Newest First</option>
          </select>
        </div>

        {/* Feedback Cards */}
        {feedbacks.length === 0 ? (
          <p className="text-gray-600 text-center">No feedback found.</p>
        ) : (
          feedbacks.map((fb) => (
            <div
              key={fb._id}
              className={`mb-4 p-4 rounded-lg bg-indigo-50 border-l-4 shadow ${getBorderClass(
                fb.category
              )}`}
            >
              <p className="text-lg font-semibold text-slate-800">
                {fb.name}{" "}
                <span className="text-sm text-gray-500">({fb.email})</span>
              </p>
              <p className="italic text-yellow-600">{fb.category}</p>
              <p className="mt-2 text-slate-700">{fb.text}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(fb.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Mascot */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src={mascot}
          alt="Mascot"
          className="w-64 h-auto drop-shadow-2xl transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}

export default FeedbackPage;

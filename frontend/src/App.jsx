import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, FeedbackForm, FeedbackPage, Home, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/dashboard" element={<FeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-indigo-300 flex items-center justify-center px-4">
      <div className="bg-indigo-100 w-full max-w-5xl h-[75vh] p-12 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-500 mb-10">
          Welcome to the Feedback System
        </h1>

        <p className="text-slate-700 text-lg mb-4 max-w-2xl">
          Your opinion matter to us! This platform helps you{" "}
          <span className="text-pink-500 font-semibold">submit feedback</span>,
          report bugs, or suggest improvements — all in one place.
        </p>

        <p className="text-slate-700 text-md max-w-xl">
          Navigate to the{" "}
          <span className="text-yellow-500 font-semibold">Submit</span> page to
          share your experience or any problems that you faced with us. Or visit
          the <span className="text-yellow-500 font-semibold">Dashboard</span>{" "}
          to view what others have to say about us.
        </p>
      </div>
    </div>
  );
}

export default Home;

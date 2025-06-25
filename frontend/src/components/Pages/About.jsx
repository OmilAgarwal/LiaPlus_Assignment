import React from "react";
import mascot from "../../assets/mascot.png";

function About() {
  return (
    <div className="min-h-screen bg-indigo-300 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h1>
          <p className="text-slate-700 text-lg mb-4">
            Welcome to
            <span className="text-pink-500 font-semibold"> LiaPlus AI</span>,
            where we’re transforming the future of customer support and how
            businesses engage with their customers.
          </p>
          <p className="text-slate-700 text-lg mb-4">
            Our{" "}
            <span className="text-pink-500 font-semibold">
              AI-powered employees
            </span>
            are intelligent, multilingual, and action-driven, designed to
            deliver exceptional experiences at every touchpoint.
          </p>
          <p className="text-slate-700 text-lg mb-4">
            As leaders in{" "}
            <span className="text-pink-500 font-semibold">
              AI-driven voice technology
            </span>
            , we replace traditional IVR systems with smarter, more intuitive
            interactions, providing personalized and human-like experiences that
            boost satisfaction.
          </p>
          <p className="text-slate-700 text-lg">
            LiaPlus AI supports industries like{" "}
            <span className="text-pink-500 font-semibold">
              telecom, BFSI, e-commerce, hospitality, and healthcare
            </span>
            , helping them elevate communication and exceed customer
            expectations.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src={mascot}
            alt="Mascot"
            className="w-64 h-auto drop-shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

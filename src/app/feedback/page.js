'use client';

import React, { useState } from "react";
import RateStars from "../../components/RateStars";
import Footer from "../../components/Footer";

const Feedback = () => {
  const [rateFood, setRateFood] = useState(0);
  const [rateService, setRateService] = useState(0);
  const [rateVibe, setRateVibe] = useState(0);
  const [thoughts, setThoughts] = useState("");

  const submitFeedback = async() => {
    const feedbackData = {
      answerOne: rateFood,
      answerTwo: rateService,
      answerThree: rateVibe,
      answerFour: thoughts
    };

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(feedbackData)
    });

    if (response.ok) {
      console.log("Feedback submitted successfully");
      // Reset the state
      setRateFood(0);
      setRateService(0);
      setRateVibe(0);
      setThoughts("");
      alert("Thank you for your feedback!");
    } else {
      console.error("Failed to submit feedback");
      // Handle error here, potentially show an error message to the user
      alert("Failed to submit feedback, please try again.");
    }
  };

  return (
    <main className="flex justify-center mt-10 flex-col items-center">
      <section className="flex flex-col items-center w-[40rem]">
        <h1 className="text-[2rem] font-semibold">Your feedback is highly appreciated</h1>
        <div className="bg-white mt-4 w-full flex flex-col justify-center items-center py-2 rounded-2xl shadow-md">
          <p className="text-[1.5rem] font-medium">Was our food delicious?</p>
          <div className="flex">
            <RateStars rate={rateFood} setRate={setRateFood} />
          </div>
        </div>

        <div className="bg-white mt-4 w-full flex flex-col justify-center items-center py-2 rounded-2xl shadow-md">
          <p className="text-[1.5rem] font-medium">How was the service?</p>
          <div className="flex">
            <RateStars rate={rateService} setRate={setRateService} />
          </div>
        </div>

        <div className="bg-white mt-4 w-full flex flex-col justify-center items-center py-2 rounded-2xl shadow-md">
          <p className="text-[1.5rem] font-medium">How about the vibe?</p>
          <div className="flex">
            <RateStars rate={rateVibe} setRate={setRateVibe} />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[1.5rem] font-medium text-center">Your thoughts</p>
          <textarea
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            cols="70"
            rows="10"
            className="w-full rounded-md mt-2 bg-slate-100 p-3 text-[1.2rem]"
            placeholder="Please share your thoughts"
          ></textarea>
        </div>
        <button onClick={submitFeedback} className="hover:bg-red-700 w-full bg-red-600 rounded-md py-2 text-white font-bold tracking-[.5rem] text-[1.25rem] my-6">
          SEND
        </button>
      </section>
      <Footer />
    </main>
  );
};

export default Feedback;

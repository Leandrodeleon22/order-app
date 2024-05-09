import Footer from "@/components/Footer";
import RateStars from "@/components/RateStars";
import React from "react";
import { MdStarRate } from "react-icons/md";
const Feedback = () => {
  // const arrayOfStarIcon = Array.from({ length: 5 }, (_, index) => index + 1);
  // const rate = 5;
  return (
    <main className="flex justify-center mt-10 flex-col items-center">
      <section className=" flex flex-col items-center  w-[40rem]">
        <h1 className="text-[2rem] font-semibold">
          Your feedback is highly appreciated
        </h1>
        <div className="bg-white mt-4 w-full flex flex-col justify-center items-center py-2 rounded-2xl shadow-md">
          <p className="text-[1.5rem] font-medium">Was our food delicious?</p>
          <div className="flex">
            <RateStars />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[1.5rem] font-medium text-center">Your thoughts</p>
          <textarea
            name=""
            id=""
            cols="70"
            rows="10"
            className="w-full rounded-md mt-2 bg-slate-100 p-3 text-[1.2rem]"
            placeholder="Please share your thoughts"
          ></textarea>
        </div>
        <button className="hover:bg-red-700 w-full bg-red-600 rounded-md py-2 text-white font-bold tracking-[.5rem] text-[1.25rem] my-6">
          SEND
        </button>
      </section>
      <Footer />
    </main>
  );
};

export default Feedback;

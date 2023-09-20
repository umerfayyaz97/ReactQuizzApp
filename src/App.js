import react from "react";
import questions from "./data/data.json";

export default function App() {
  return (
    <>
      <h1 className="px-4 py-3 text-center text-2xl bg-teal-500 text-white/95 font-bold rounded-t-md">
        General Knowledge Quiz
      </h1>
      <br />
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white rounded-md pb-2 shadow-lg">
          <p className="bg-teal-700 px-4 py-3 text-white font-bold rounded-t-md">
            Your Favourite Sports?
          </p>
          <div className="flex flex-col w-full gap-3 pt-3 pb-2 px-2 relative">
            <div className="relative w-full h-8">{/* //Options */}</div>
            <div className="relative w-full  h-8">{/* //Options */}</div>
            <div className="relative w-full  h-8">{/* //Options */}</div>
          </div>
          <div className="w-full flex flex-row justify-end px-2 pt-1">
            <button className="bg-emerald-500 w-full rounded-md py-2 text-white font-bold hover:bg-emerald-600 transition-all duration-300">
              Check Answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import react, { useState } from "react";
import questions from "./data/data.json";

export default function App() {
  return (
    <>
      <h1 className="px-4 py-3 text-center text-2xl bg-teal-500 text-white/95 font-bold rounded-t-md">
        General Knowledge Quiz
      </h1>
      <br />
      {questions.map((q) => (
        <div key={q.id}>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-md pb-2 shadow-lg">
              <p className="bg-teal-700 px-4 py-3 text-white font-bold rounded-t-md">
                {q.id + 1}: {q.question}
              </p>
              <div className="flex flex-col w-full gap-3 pt-3 pb-2  px-2 relative">
                {q.options.map((options) => (
                  <div key={options}>
                    <div className=" active:bg-emerald-300  relative w-full h-8">
                      {options}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-row justify-end px-2 pt-1">
                <button className="bg-emerald-500 w-full rounded-md py-2 text-white font-bold hover:bg-emerald-600 transition-all duration-300">
                  {/* <button className=" relative px-2.5 py-1.5 border center border-green-500 rounded text-sm text-green-500 overflow-hidden hover:shadow-lg active:top-0.5 active:outline-none focus:outline-none"> */}
                  Check Answer
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </>
  );
}

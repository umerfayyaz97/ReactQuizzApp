import react, { useState } from "react";
import questions from "./data/data.json";

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="px-4 py-3 text-2xl font-bold text-center bg-teal-500 text-white/95 rounded-t-md">
        General Knowledge Quiz
      </h1>
      <br />
      {questions.map((q) => (
        <div key={q.id}>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-2 bg-white rounded-md shadow-lg">
              <p className="px-4 py-3 font-bold text-white bg-teal-700 rounded-t-md">
                {q.id + 1}: {q.question}
              </p>
              <div className="relative flex flex-col w-full gap-3 px-2 pt-3 pb-2">
                {q.options.map((options) => (
                  <div key={options}>
                    <div
                      className={
                        options === selectedOption
                          ? " visited: bg-lime-200 "
                          : "relative w-full h-8 "
                      }
                      onClick={() => onClickSelect(options)}
                    >
                      {options}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end w-full px-2 pt-1">
                <button className="w-full py-2 font-bold text-white transition-all duration-300 rounded-md bg-emerald-500 hover:bg-emerald-600">
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

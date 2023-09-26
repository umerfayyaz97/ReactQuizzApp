import { useState } from "react";
import questions from "./data/data.json";

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const selected = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      {showResult ? (
        <div className="">
          <h1 className="text-xl font-bold text-center">Final Results</h1>
          <h2 className="text-xl font-bold text-center">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button
            className="flex px-4 py-2 mx-auto mt-4 text-white transition-all duration-300 bg-blue-500 border border-gray-500 rounded-lg hover:bg-blue-600"
            onClick={() => restartGame()}
          >
            Restart game
          </button>
        </div>
      ) : (
        <>
          <h1 className="px-4 py-3 text-2xl font-bold text-center bg-teal-500 text-white/95 rounded-t-md">
            General Knowledge Quiz
          </h1>
          <h2 className="font-bold text-center text-white bg-teal-600">
            Score {score} / {questions.length}
          </h2>
          <br />
          <div className="flex flex-col items-center justify-center">
            <div className="pb-2 bg-white rounded-md shadow-lg">
              <p className="px-4 py-3 font-bold text-white bg-teal-700 rounded-t-md">
                {currentQuestion + 1}/{questions.length}:
                {questions[currentQuestion].question}
              </p>
              <div className="relative flex flex-col w-full gap-3 px-2 pt-3 pb-2">
                {questions[currentQuestion].options.map((options) => (
                  <div key={options.text}>
                    <div
                      // className={
                      //   selected() === 1
                      //     ? "relative w-full h-8 bg-green-300"
                      //     : "relative w-full h-8 bg-red-500"
                      // }
                      onClick={() => selected(options.isCorrect)}
                    >
                      {options.text}
                    </div>
                  </div>
                ))}
                {/* <div className="flex flex-row justify-end w-full px-2 pt-1">
              <button
                onClick={() => checkAnswer()}
                className="w-full py-2 font-bold text-white transition-all duration-300 rounded-md bg-emerald-500 hover:bg-emerald-600"
              >
                Check Answer
              </button> */}
              </div>
            </div>
          </div>
        </>
      )}

      <br />
    </>
  );
}

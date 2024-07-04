'use client';
import React, { useState } from 'react';
import { quiz } from './data';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };


  
  return (
    <div className='max-w-lg mx-auto p-4 bg-black text-white'>
  <h1 className='text-2xl font-bold'>Quiz Page</h1>
  <div>
    <svg className="absolute left-0 top-0 right-99 z-[-1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="127.5" ry="184.5" cx="58.48854527148316" cy="363.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg>
    <h2 className='text-xl'>
      Question: {activeQuestion + 1}
      <span>/{questions.length}</span>
    </h2>
  </div>
  <div>
    {!showResult ? (
      <div className='bg-white text-black p-4 mt-8 rounded-lg'>
        <h3 className='pb-8 text-3xl'>{questions[activeQuestion].question}</h3>
        {answers.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => onAnswerSelected(answer, idx)}
            className={`list-none cursor-pointer my-2 py-4 px-2 border border-gray-300 ${
              selectedAnswerIndex === idx ? 'bg-blue-900 text-white' : 'hover:bg-gray-200'
            }`}
          >
            <span>{answer}</span>
          </li>
        ))}
        {checked ? (
          <button onClick={nextQuestion} className='py-4 px-2 w-full mt-3 text-base rounded bg-gray-500 text-white'>
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        ) : (
          <button onClick={nextQuestion} disabled className='py-4 px-2 w-full mt-3 text-base rounded bg-gray-300 text-white'>
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    ) : (
      <div className='bg-white text-black p-4 mt-8 rounded-lg'>
        <h3 className='text-3xl'>Results</h3>
        <h3 className='pb-8'>Overall {(result.score / 25) * 100}%</h3>
        <p>
          Total Questions: <span>{questions.length}</span>
        </p>
        <p>
          Total Score: <span>{result.score}</span>
        </p>
        <p>
          Correct Answers: <span>{result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers: <span>{result.wrongAnswers}</span>
        </p>
        <button onClick={() => window.location.reload()} className='py-4 px-2 w-full mt-3 text-base rounded bg-gray-500 text-white'>
          Restart
        </button>
      </div>
    )}
  </div>
</div>
  );
};

export default Quiz;
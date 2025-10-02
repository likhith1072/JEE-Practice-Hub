'use client';

import { Question } from '@/types';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  const subjectColors: { [key: string]: string } = {
    Physics: 'bg-blue-100 text-blue-700 border-blue-300',
    Chemistry: 'bg-green-100 text-green-700 border-green-300',
    Mathematics: 'bg-purple-100 text-purple-700 border-purple-300',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-8 mb-6 border border-gray-100">
      {/* Header with badges */}
      <header className="mb-6">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border ${subjectColors[question.subject] || 'bg-gray-100 text-gray-700 border-gray-300'}`}>
            {question.subject}
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-300">
            📚 {question.topic}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
          <span className="text-indigo-600">Question {question.id}:</span> {question.question}
        </h3>
      </header>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass = 'w-full text-left p-5 rounded-xl border-2 transition-all duration-200 font-medium ';
          
          if (showResult) {
            if (index === question.correctAnswer) {
              buttonClass += 'border-green-500 bg-green-50 text-green-900 shadow-md';
            } else if (index === selectedAnswer && !isCorrect) {
              buttonClass += 'border-red-500 bg-red-50 text-red-900 shadow-md';
            } else {
              buttonClass += 'border-gray-200 bg-gray-50 text-gray-500';
            }
          } else {
            buttonClass += 'border-gray-300 bg-white hover:border-indigo-500 hover:bg-indigo-50 hover:shadow-md cursor-pointer';
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={buttonClass}
              type="button"
            >
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-700 font-bold mr-4 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 pt-1">{option}</span>
                {showResult && index === question.correctAnswer && (
                  <span className="ml-2 text-green-600 text-xl">✓</span>
                )}
                {showResult && index === selectedAnswer && !isCorrect && (
                  <span className="ml-2 text-red-600 text-xl">✗</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Result Section */}
      {showResult && (
        <div className={`p-6 rounded-xl border-2 ${
          isCorrect 
            ? 'bg-green-50 border-green-300' 
            : 'bg-red-50 border-red-300'
        }`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <span className={`text-3xl mr-3 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '🎉' : '❌'}
              </span>
              <p className={`text-lg font-bold ${
                isCorrect ? 'text-green-800' : 'text-red-800'
              }`}>
                {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
              </p>
            </div>
            <button
              onClick={resetQuestion}
              className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300 cursor-pointer"
              type="button"
            >
              Try Again
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">💡 Explanation:</p>
            <p className="text-gray-800 leading-relaxed">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
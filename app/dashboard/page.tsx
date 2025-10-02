'use client'
import QuestionCard from '@/components/QuestionCard';
import questionsData from '@/data/questions.json';
import { Question } from '@/types';
import { ArrowUp } from 'lucide-react';

export default function Dashboard() {
  const questions: Question[] = questionsData;

  const physicsCount = questions.filter(q => q.subject === 'Physics').length;
  const chemistryCount = questions.filter(q => q.subject === 'Chemistry').length;
  const mathCount = questions.filter(q => q.subject === 'Mathematics').length;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Practice Dashboard
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Test your knowledge with curated JEE questions. Select your answer to get instant feedback and detailed explanations.
            </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 flex items-center justify-between">
             
              <div>
                <p className="text-sm font-medium text-gray-600">Total Questions</p>
                <p className="text-3xl font-bold text-gray-900">{questions.length}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 flex items-center justify-between">
           
              <div>
                <p className="text-sm font-medium text-gray-600">Physics</p>
                <p className="text-3xl font-bold text-blue-600">{physicsCount}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-600">Chemistry</p>
                <p className="text-3xl font-bold text-green-600">{chemistryCount}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧪</span>
              </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 flex items-center justify-between">
        
              <div>
                <p className="text-sm font-medium text-gray-600">Mathematics</p>
                <p className="text-3xl font-bold text-purple-600">{mathCount}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📐</span>
              </div>
            </div>
        </div>

        {/* Instructions Card */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg p-6 mb-8 border border-blue-300">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-bold text-white mb-2">How to Practice</h3>
              <ul className="text-blue-50 space-y-1 text-sm">
                <li className="flex items-center">
                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Read each question carefully
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Select one answer from the four options
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Get instant feedback with detailed explanations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Great job! 🎉
            </h3>
            <p className="text-gray-600 mb-4">
              You've reached the end of this practice set. Keep practicing to improve your skills!
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer"
            >
               <ArrowUp className="w-5 h-5 mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
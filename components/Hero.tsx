import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20 text-center">
        
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <span className="text-sm font-medium text-white">
              🎯 Free JEE Practice Platform
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Ace Your JEE Exam with
            <span className="block text-yellow-300 mt-2">Smart Practice</span>
          </h1>

          
          <p className="text-xl sm:text-2xl text-indigo-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Master Physics, Chemistry, and Mathematics with curated practice questions
          </p>

          <p className="text-lg text-indigo-200 mb-12 max-w-2xl mx-auto">
            Get instant feedback, detailed explanations, and track your progress as you prepare for India's most challenging engineering entrance exam.
          </p>

          {/* CTA Button */}
          <div >
            <Link
              href="/dashboard"
              className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-105"
            >
              Start Practicing Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"  />
            </Link>
          </div>
        </div>
    </section>
  );
}
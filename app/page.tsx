import Hero from '@/components/Hero';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to excel in your JEE preparation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Comprehensive Coverage
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Extensive question bank covering all topics from Physics, Chemistry, and Mathematics aligned with JEE syllabus
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Instant Feedback
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get immediate results with detailed explanations for every question to understand concepts better
            </p>
          </div>
          
    
        </div>
      </section>


      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your JEE Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are preparing smarter with our platform
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Begin Practice Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"  />
          </Link>
        </div>
      </section>
    </main>
  );
}
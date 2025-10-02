import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">JEE Practice Hub</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your trusted platform for JEE exam preparation with quality practice questions and instant feedback.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                      Practice Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Subjects</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400">🔬 Physics</li>
                  <li className="text-gray-400">🧪 Chemistry</li>
                  <li className="text-gray-400">📐 Mathematics</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-2 pt-2 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 JEE Practice Hub. All rights reserved. Built for JEE aspirants.
              </p>
            </div>
          </div>
        </footer>
  )
}

export default Footer

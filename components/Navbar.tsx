import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-indigo-600">J
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              JEE Practice Hub
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-indigo-200 px-4 py-2 rounded-lg  font-medium transition-all duration-200 hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start Practice
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JEE Practice Hub - Master Your JEE Preparation',
  description: 'Practice JEE exam questions with instant feedback. Comprehensive coverage of Physics, Chemistry, and Mathematics with detailed explanations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
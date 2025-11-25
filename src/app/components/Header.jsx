import Link from 'next/link';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
         Boxing Blog
        </h1>
        
        <NavBar />
      </div>
    </header>
  );
}
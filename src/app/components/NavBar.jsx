import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-4 justify-center mt-4">
      <Link 
        href="/" 
        className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md"
      >
        Home
      </Link>
      <Link 
        href="/posts" 
        className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md"
      >
        View All Boxers
      </Link>
    </nav>
  );
}
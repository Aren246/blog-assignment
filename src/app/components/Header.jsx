import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-6 border-b-4 border-red-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Boxing Blog</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline font-bold">
            Home
          </Link>
          <Link href="/posts" className="hover:underline font-bold">
            Boxers
          </Link>
        </nav>
      </div>
    </header>
  );
}
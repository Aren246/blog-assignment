import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
             Welcome to my Boxing Hall of Fame
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover the greatest fighters who ever stepped into the ring
          </p>
          <Link 
            href="/posts" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
          >
            Explore Legendary Boxers →
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            The Sweet Science
          </h2>
          <p className="text-xl text-gray-600">
            Boxing isn&apos;t just a sport - it&apos;s a test of courage, skill, and heart. 
            Explore the stories of champions who defined greatness.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8 mt-12">
        
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Legendary Champions
            </h3>
            <p className="text-gray-600">
              From Ali to Tyson, discover the greatest boxers of all time
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600 text-center">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Their Stories
            </h3>
            <p className="text-gray-600">
              Read about their incredible journeys and historic fights
            </p>
          </div>

  
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Join the Discussion
            </h3>
            <p className="text-gray-600">
              Share your thoughts and debate with fellow boxing fans
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Step Into the Ring?
          </h2>
          <p className="text-xl mb-8">
            Check out the fighters, leave comments, and create your own list!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/posts" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition"
            >
              View All Boxers
            </Link>
            <Link 
              href="/posts" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Add Your Favorites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
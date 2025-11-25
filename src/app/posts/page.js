import Link from 'next/link';
import { db } from '../../utils/dbConnection';
import { redirect } from 'next/navigation';

async function getPosts() {
  const result = await db.query('SELECT * FROM posts ORDER BY name ASC');
  return result.rows;
}

async function deletePost(formData) {
  'use server';
  const id = formData.get('id');
  await db.query('DELETE FROM posts WHERE id = $1', [id]);
  redirect('/posts');
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto p-8">
  
      <div lassName="flex justify-between items-center mb-8">
        <h1 className="text- font-bold text-red-600">My Favourite Boxers - Make it your own!</h1>
        <Link 
          href="/posts/new" 
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          + Add New Boxer
        </Link>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition border-2 border-gray-200 overflow-hidden"
          >
            
            {post.image_url && (
              <Link href={`/posts/${post.id}`}>
                <img 
                  src={post.image_url} 
                  alt={post.name}
                  className="w-full h-64 object-cover hover:opacity-90 transition cursor-pointer"
                />
              </Link>
            )}


            <div className="p-6">
              
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-2xl font-bold text-red-600 mb-3 hover:text-red-700 cursor-pointer transition">
                  {post.name}
                </h2>
              </Link>

             
              {post.bio && (
                <p className="text-gray-600 text-sm mb-4">
                  {post.bio.substring(0, 120)}...
                </p>
              )}

              
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
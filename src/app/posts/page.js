import Link from 'next/link';
import { db } from '@/utils/dbConnection';
import { revalidatePath } from 'next/cache';

async function getPosts(order = 'DESC') {
  try {
    const posts = await db.query(`SELECT * FROM posts ORDER BY created_at ${order}`);
    console.log('Posts fetched:', posts.rows);
    return posts.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

async function deletePost(formData) {
  'use server';
  const postId = formData.get('postID');
  await db.query('DELETE FROM posts WHERE id = $1', [postId]);
  revalidatePath('/posts');
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const order = params.order || "DESC"; 
  const posts = await getPosts(order);
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-red-600 font-bold">My Favourite Boxers</h2>
        <div className="flex gap-4 items-center">
          <Link href="/posts?order=ASC" className="text-red-600 hover:underline">
            Sort Ascending
          </Link>
          <Link href="/posts?order=DESC" className="text-red-600 hover:underline">
            Sort Descending
          </Link>
          <Link href="/posts/new" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Add New Boxer
          </Link>
        </div>
      </div>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border-2 border-red-600 rounded-lg p-4 flex justify-between items-center">
            <Link href={`/posts/${post.id}`}>
              <h3 className="text-xl text-red-800 hover:underline">{post.name}</h3>
            </Link>
            <form action={deletePost}>
              <input type="hidden" name="postID" value={post.id} />
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
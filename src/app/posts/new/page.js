import { db } from '@/utils/dbConnection';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function createPost(formData) {
  'use server';
  const name = formData.get('name');
  const image_url = formData.get('image_url');
  
  await db.query(
    'INSERT INTO posts (name, image_url) VALUES ($1, $2)',
    [name, image_url]
  );
  
  redirect('/posts');
}

export default function NewPostPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link href="/posts" className="text-red-600 hover:underline mb-4 inline-block">
        ← Back to Boxers
      </Link>
      
      <h2 className="text-2xl text-red-600 font-bold mb-6">Add New Boxer</h2>
      
      <form action={createPost}>
        <fieldset className="border-2 border-red-600 p-4 rounded mb-4">
          <legend className="text-red-600 font-bold px-2">Boxer Name:</legend>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full p-2 mt-2 border-2 border-red-600 rounded"
          />
        </fieldset>
        
        <fieldset className="border-2 border-red-600 p-4 rounded mb-6">
          <legend className="text-red-600 font-bold px-2">Image URL:</legend>
          <input 
            type="text" 
            name="image_url" 
            className="w-full p-2 mt-2 border-2 border-red-600 rounded"
          />
        </fieldset>

        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-bold">
          Create Post
        </button>
      </form>
    </div>
  );
}
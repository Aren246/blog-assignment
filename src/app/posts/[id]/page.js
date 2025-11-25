import { db } from '../../../utils/dbConnection';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getPost(id) {
  const result = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return result.rows[0];
  

}

async function getComments(postId) {
  const result = await db.query('SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at DESC', [postId]);
  return result.rows;
}

async function addComment(formData) {
  'use server';
  const post_id = formData.get('post_id');
  const commenter_name = formData.get('commenter_name');
  const comment = formData.get('comment');
  
  await db.query(
    'INSERT INTO comments (post_id, commenter_name, comment) VALUES ($1, $2, $3)',
    [post_id, commenter_name, comment]
  );
  
  revalidatePath(`/posts/${post_id}`);
}

async function deleteComment(formData) {
  'use server';
  const comment_id = formData.get('comment_id');
  const post_id = formData.get('post_id');
  
  await db.query('DELETE FROM comments WHERE id = $1', [comment_id]);
  revalidatePath(`/posts/${post_id}`);
  redirect(`/posts/${post_id}`);
}

export default async function BoxerPage({ params }) {
  const post = await getPost(params.id);
  const comments = await getComments(params.id);

  if(!post) {
    notFound();
  }
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      <Link href="/posts" className="text-red-600 hover:underline mb-4 inline-block">
        ← Back to Boxers
      </Link>
      
     <h2 className="text-3xl text-red-600 font-bold mb-4">{post.name}</h2>
     <div className="flex flex-col md:flex-row gap-6 mb-8">
      {post.image_url && (
        <div className="flex-shrink-0">
          <img 
            src={post.image_url} 
            alt={post.name} 
            className="max-w-d border-4 border-red-600 rounded-lg"
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-2xl text-red-600 font-bold mb-3">About</h3>
        <div className="text-gray-700 space-y-2">
          {post.bio ? (
            <p className="whitespace-pre-wrap">{post.bio}</p>
          ) : (
            <p>No biography available.</p>
          )}
        </div>
      </div>
     
     </div>
      
      <h3 className="text-xl text-red-600 font-bold mb-4">Add a Comment</h3>
      
      <form action={addComment} className="mb-8">
        <input type="hidden" 
        name="post_id" 
        value={params.id} />
        
        <fieldset className="border-2 border-red-600 p-4 rounded mb-4">
          <legend className="text-red-600 font-bold px-2">Name:</legend>
          <input 
            type="text" 
            name="commenter_name" 
            required 
            className="w-full p-2 mt-2 border-2
             border-red-600 rounded"
          />
        </fieldset>
        
        <fieldset className="border-2 border-red-600 p-4 rounded mb-4">
          <legend className="text-red-600 font-bold px-2">Comment:</legend>
          <textarea 
            name="comment" 
            required 
            rows="4"
            className="w-full p-2 mt-2 border-2
             border-red-600 rounded"
          />
        </fieldset>
        
        <button type="submit" className=
        "bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-bold">
          Send comment
        </button>
      </form>
      
      <h3 className="text-xl
       text-red-600 font-bold mb-4">Comments</h3>
      
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded border border-gray-300">
            <p className="font-semibold
             text-red-800 mb-2">{comment.commenter_name} says...</p>
            <p className="mb-3">{comment.comment}</p>
            <form action={deleteComment}>
              <input type="hidden" name="comment_id" value={comment.id} />
              <input type="hidden" name="post_id" value={params.id} />
              <button type="submit" className="bg-red-600
               text-white px-3 py-1 rounded text-sm
                hover:bg-red-700">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
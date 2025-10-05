import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2 style={{ margin: '20px 0' }}>Boxer Not Found</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        This boxer doesnt exist in our database. They must have retired!
      </p>
      <Link href="/posts" style={{ 
        padding: '10px 20px', 
        background: '#007bff', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Back to All Boxers
      </Link>
    </div>
  );
}
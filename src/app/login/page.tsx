import Link from 'next/link';

export default function Login(){
  return (
    <main>
      <h1>login page</h1>
      <Link href="/welcome"><button>Proceed without authentication</button></Link>
    </main>
  );
}
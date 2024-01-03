import Link from 'next/link';

export default function Register(){
  return (
    <div>
      <Link href="/welcome"><button>Proceed without authentication</button></Link>
    </div>
  );
}
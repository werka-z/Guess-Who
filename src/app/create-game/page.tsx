import Link from 'next/link';

export default function CreateGame(){
  return (
    <main>
      <Link href="/game-prep"><button>generate a 4-digit code and proceed to game</button></Link>
    </main>
  );
}
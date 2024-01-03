import Link from 'next/link';

export default function JoinGame(){
  return (
    <main>
      <Link href="/game-prep"><button>enter a 5-digit code and proceed to game</button></Link>
    </main>
  );
}
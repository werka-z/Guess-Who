import Link from 'next/link';

export default function Welcome(){
  return (
    <main>
      <Link href="/create-game">
        <button style={{display: 'block'}}>create game</button>
      </Link>
      <Link href="/join-game">
        <button style={{display: 'block'}}>join game</button>
      </Link>
      <Link href="/profile">
        <button style={{display: 'block'}}>my profile</button>
      </Link>
    </main>
  );
}
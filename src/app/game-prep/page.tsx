import Link from 'next/link';

export default function GamePrep(){
  return (
    <main>
      <h1>game id: xxxx</h1>
      <h1></h1>
      <h1>players:</h1>
      <h1>*player1*</h1>
      <h1>*player2*</h1>
      <Link href="/game"><button>choose the game characters</button></Link>
    </main>
  );
}
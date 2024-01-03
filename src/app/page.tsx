import Link from "next/link";

export default function MainPage(){
  return (
    <main>
      <h1>GUESS WHO?</h1>
      <Link href="/login">
        <button style={{display: 'block'}}>Log in</button>
      </Link>
      <Link href="/register">
        <button style={{display: 'block'}}>Register</button>
      </Link>
    </main>
  );
};
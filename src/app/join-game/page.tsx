import Link from "next/link";
import GameForm from "./game-form/page";

export default function JoinGame() {
  return (
    <main>
      <h1>enter a 4-digit code and proceed to game</h1>
      <GameForm />
    </main>
  );
}

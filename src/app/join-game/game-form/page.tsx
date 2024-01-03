"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function GameForm() {
  const [gameId, setGameId] = useState("");

  const saveGameId = async () => {
    // validate ID and save to Firebase
  };

  return (
    <Form className="game-id-form">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          placeholder="Enter 4-digit game ID"
          maxLength={4}
        />
      </Form.Group>

      <Link href="/game">
        <Button variant="primary" type="button" onClick={saveGameId}>
          join
        </Button>
      </Link>
    </Form>
  );
}

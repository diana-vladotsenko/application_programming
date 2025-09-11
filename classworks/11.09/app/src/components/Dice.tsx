import { useState } from "react";

export default function Dice() {
  const [number, setNumber] = useState(0);
  const min = 1;
  const max = 6;

  function randomNumber() {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(random);
  }

  return (
    <>
      <h2>Game With Dice</h2>
      <button onClick={() => randomNumber()}>Generate</button>
      <p>Your number is {number}</p>
    </>
  );
}

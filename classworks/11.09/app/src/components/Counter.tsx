import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter(amount: number) {
    setCount((count) => count + amount);
  }

  return (
    <>
      <h1>My App</h1>
      <p>Try Button!</p>
      <div className="card">
        <button onClick={() => increaseCounter(5)}>Count is {count}</button>
      </div>
    </>
  );
}

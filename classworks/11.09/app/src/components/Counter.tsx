import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter(amount: number) {
    setCount((count) => count + amount);
  }

  function decreaseCounter(amount: number) {
    setCount((count) => count - amount);
  }

  return (
    <>
      <h1>My App</h1>
      <div>
        Number is:
        <h2>{count}</h2>
      </div>

      <div>
        <div className="card">
          Increase By (+):
          <button onClick={() => increaseCounter(1)}>1</button>
          <button onClick={() => increaseCounter(25)}>25</button>
          <button onClick={() => increaseCounter(50)}>50</button>
          <button onClick={() => increaseCounter(100)}>100</button>
        </div>
      </div>

      <div>
        <div className="card">
          Decrease By (-):
          <button onClick={() => decreaseCounter(1)}>1</button>
          <button onClick={() => decreaseCounter(25)}>25</button>
          <button onClick={() => decreaseCounter(50)}>50</button>
          <button onClick={() => decreaseCounter(100)}>100</button>
        </div>
      </div>
    </>
  );
}

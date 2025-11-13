import { useState } from "react";

interface counterProps {
  title: string;
  message: string;
}

export default function ClickCounter({ title, message }: counterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <div onClick={() => setCount(count + 1)} className="div-counter">
        <p>Counter</p>
        <p>{count}</p>
      </div>
      <p>{count >= 10 ? message : ""}</p>
    </div>
  );
}

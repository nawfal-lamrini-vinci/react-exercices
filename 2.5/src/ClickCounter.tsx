import { useState } from "react";

interface counterProps {
  title: string;
  message: string;
  warning: string;
}

export default function ClickCounter({
  title,
  message,
  warning,
}: counterProps) {
  const [count, setCount] = useState(0);
  const [focus, setFocus] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      <div
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        onClick={() => setCount(count + 1)}
        className="div-counter"
      >
        <p>Counter</p>
        <p>{count}</p>
      </div>
      {focus && <p>{warning}</p>}
      <p>{count >= 10 ? message : ""}</p>
    </div>
  );
}

import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => setCount(count + 1)} className="div-counter">
        <p>Counter</p>
        <p>{count}</p>
      </div>
    </div>
  );
}

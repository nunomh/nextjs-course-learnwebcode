"use client";

import { useState } from "react";

export default function Footer() {
  const [count, setCount] = useState(0);

  function handleCustomClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>&copy; {new Date().getFullYear()} Our Company</p>
      <p>
        You have clicked the following button {count} times.{" "}
        <button onClick={handleCustomClick}>Click Me</button>
      </p>
    </div>
  );
}

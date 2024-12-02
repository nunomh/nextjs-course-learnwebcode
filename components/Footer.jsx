"use client";

import { useState } from "react";

export default function Footer() {
  return (
    <div>
      <p>&copy; {new Date().getFullYear()} Our Company</p>
      <p>
        You have clicked the following button 0 times. <button>Click Me</button>
      </p>
    </div>
  );
}

// DarkModeToggle.jsx
// Simple dark mode toggle using CSS class switching.
// Works globally across the app.

import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Whenever dark mode changes → update <body> class
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <button className="dark-toggle-btn" onClick={() => setDark(!dark)}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

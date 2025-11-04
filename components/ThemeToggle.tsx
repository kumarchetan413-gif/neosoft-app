"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 px-4 py-2 bg-gray-900 text-white dark:bg-yellow-400 dark:text-black rounded"
      aria-label="Toggle dark mode"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark" || currentTheme === "light") {
        return currentTheme;
      }
    }

    return "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => {
        const updatedTheme = theme === "light" ? "dark" : "light";
        applyTheme(updatedTheme);
        window.localStorage.setItem("theme", updatedTheme);
        setTheme(updatedTheme);
      }}
      className="liquid-pill flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span
          className={`absolute h-5 w-5 rounded-full border border-current transition-all duration-300 ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        />
        <span
          className={`absolute h-4 w-4 rounded-full bg-current transition-all duration-300 ${
            theme === "light" ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        />
        <span
          className={`absolute h-5 w-5 rounded-full border-2 border-current transition-all duration-300 ${
            theme === "dark" ? "translate-x-1.5 -translate-y-1.5 scale-75 opacity-100" : "translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

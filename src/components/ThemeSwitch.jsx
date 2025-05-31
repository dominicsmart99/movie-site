"use client";

import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <FaMoon
          className="h-5 w-5 text-amber-400"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaSun
          className="h-5 w-5 text-amber-400"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

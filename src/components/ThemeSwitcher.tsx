"use client";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  return null;
};

export default ThemeSwitcher;

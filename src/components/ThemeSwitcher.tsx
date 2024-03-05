import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme !== null ? storedTheme : null;

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return null;
};

export default ThemeSwitcher;

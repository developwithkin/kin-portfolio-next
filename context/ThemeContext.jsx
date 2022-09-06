import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
	darkMode: false,
	toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [])

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export { ThemeContextProvider, ThemeContext };

export const useTheme = () => useContext(ThemeContext);

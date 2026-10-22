
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook to Access Theme
export function useTheme() {
  return useContext(ThemeContext);
}

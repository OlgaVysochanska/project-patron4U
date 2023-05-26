import { useState, createContext, useEffect } from 'react';

export const LangContext = createContext('eng');
export const ThemeContext = createContext('light');

const CombinedContextProvider = ({ children }) => {
  const [lang, setLang] = useState('eng');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CombinedContextProvider;

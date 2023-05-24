import { useState, createContext } from 'react';

export const LangContext = createContext('eng');
export const ThemeContext = createContext('light');

const CombinedContextProvider = ({ children }) => {
  const [lang, setLang] = useState('eng');
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CombinedContextProvider;

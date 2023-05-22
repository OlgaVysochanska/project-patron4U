import { useState, createContext } from 'react';

export const langContext = createContext('eng');

const LangContext = ({ children }) => {
  const [lang, setLang] = useState('eng');

  // const toggleLang = () =>
  //   setLang(prevLang => (prevLang === 'eng' ? 'ua' : 'eng'));

  return (
    <langContext.Provider value={{ lang, setLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;

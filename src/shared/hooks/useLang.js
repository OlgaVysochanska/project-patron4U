import { useContext } from 'react';

import { LangContext } from 'CombinedContextProvider';

const useLang = () => {
  const context = useContext(LangContext);
  return context;
};

export default useLang;

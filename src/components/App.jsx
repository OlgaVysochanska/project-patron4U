import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

import ModalApprovAction from 'shared/components/ModalApprovAction/ModalApprovAction';

import ModalCongrats from './ModalCongrats/ModalCongrats';

export const App = () => {
  return (
    <ModalCongrats />
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}></Route>
    // </Routes>
  );
};

import { useSelector } from 'react-redux';

import ModalCongrats from 'components/ModalCongrats/ModalCongrats';

// import { getIsModalShown } from 'redux/auth/authSelectors';
import { getModalVisibility } from 'redux/modal/modalSelectors';
// import { setModal } from 'redux/modal/modalSlice';

const UserPage = () => {
  const isModalCongratsShown = useSelector(getModalVisibility);

  // const handleClose = e => {
  //   dispatch(setModal(false));
  // };

  return (
    <>
      {isModalCongratsShown && <ModalCongrats />}
      <div>
        If components are ready, add them to UserPage. /UserData, UserDataItem,
        Logout, PetsData, PetsList, PetsItem, ModalCongrats/
      </div>
    </>
  );
};

export default UserPage;

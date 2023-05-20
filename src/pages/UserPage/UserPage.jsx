import { useSelector } from 'react-redux';

import ModalCongrats from 'components/ModalCongrats/ModalCongrats';

import { getIsModalShown } from 'redux/auth/authSelectors';

const UserPage = () => {
  const isModalCongratsShown = useSelector(getIsModalShown);

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

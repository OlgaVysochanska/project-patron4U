// import Logout from 'components/User/Logout/Logout';
// import PetsData from 'components/User/PetsData/PetsData';
import UserData from 'components/User/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';

import ModalCongrats from 'components/ModalCongrats/ModalCongrats';

import { selectIsRegistered } from '../../redux/auth/authSelectors';
import { setRegistered } from '../../redux/auth/authSlice';

const UserPage = () => {
  const isRegistered = useSelector(selectIsRegistered);

  const dispatch = useDispatch();
  const handleClose = e => {
    dispatch(setRegistered(false));
  };

  return (
    <>
      <div>
        <div className="container">
          <h2>My information:</h2>
          <UserData />
     
        </div>
        <h2>My pets:</h2>
        {/* <PetsData /> */}
        If components are ready, add them to UserPage. /UserData, UserDataItem,
        Logout, PetsData, PetsList, PetsItem, ModalCongrats/
      </div>

      {isRegistered && <ModalCongrats onClose={handleClose} />}
      <div>
        If components are ready, add them to UserPage. /UserData, UserDataItem,
        Logout, PetsData, PetsList, PetsItem, ModalCongrats/
      </div>
    </>
  );
};

export default UserPage;

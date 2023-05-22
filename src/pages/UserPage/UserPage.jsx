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
      {isRegistered && <ModalCongrats onClose={handleClose}/>}
      <div>
        If components are ready, add them to UserPage. /UserData, UserDataItem,
        Logout, PetsData, PetsList, PetsItem, ModalCongrats/
      </div>
    </>
  );
};

export default UserPage;

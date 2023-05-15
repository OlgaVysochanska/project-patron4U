import Logout from 'components/User/Logout/Logout';
// import PetsData from 'components/User/PetsData/PetsData';
import UserData from 'components/User/UserData/UserData';

const UserPage = () => {
  return (
    <div>
      <div className="container">
        <h2>My information:</h2>
        <UserData />
        <Logout />
      </div>
      <h2>My pets:</h2>
      {/* <PetsData /> */}
      If components are ready, add them to UserPage. /UserData, UserDataItem,
      Logout, PetsData, PetsList, PetsItem, ModalCongrats/
    </div>
  );
};

export default UserPage;

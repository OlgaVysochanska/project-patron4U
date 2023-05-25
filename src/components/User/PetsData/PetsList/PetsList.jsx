import { useSelector } from 'react-redux';

import EmptyList from './EmptyList/EmptyList';
import PetsListItem from './PetsListItem/PetsListItem';

import { getUserPets } from 'redux/auth/authSelectors';

const PetsList = () => {
  const userPets = useSelector(getUserPets);

  const petsItem = userPets.map(({ _id, ...props }) => (
    <PetsListItem key={_id} id={_id} {...props} />
  ));

  return <>{userPets.length ? <ul>{petsItem}</ul> : <EmptyList />}</>;
};

export default PetsList;

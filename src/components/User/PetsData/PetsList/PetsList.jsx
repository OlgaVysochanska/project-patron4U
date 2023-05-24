import { useSelector } from 'react-redux';

import PetsListItem from './PetsListItem/PetsListItem';

import { getUserPets } from 'redux/auth/authSelectors';

const PetsList = () => {
  const userPets = useSelector(getUserPets);

  const petsItem = userPets.map(({ _id, ...props }) => (
   <PetsListItem key={_id} id={_id} {...props} />
  ));

  return <ul>{petsItem}</ul>;
};

export default PetsList;

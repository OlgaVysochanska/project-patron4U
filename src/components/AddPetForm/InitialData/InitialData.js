import FemaleIcon from 'icons/FemaleIcon';
import MaleIcon from 'icons/MaleIcon';

export const gender = [
  { gender: 'female', svg: <FemaleIcon stroke="#F43F5E" /> },
  { gender: 'male', svg: <MaleIcon stroke="#54ADFF" /> },
];

export const tabs = ['Choose  option', 'Personal details', 'More info'];

export const categories = [
  { id: 'my pet', category: 'your pet' },
  { id: 'sell', category: 'sell' },
  { id: 'lost-found', category: 'lost/found' },
  { id: 'for-free', category: 'in good hands' },
];

export const initialState = {
  category: 'my pet',
  name: '',
  birthDate: null,
  breed: '',
  sex: '',
  petURL: '',
  comments: '',
  title: '',
  location: '',
  price: '',
};

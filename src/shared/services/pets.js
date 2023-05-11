import instance from './instance';

export const getAllPets = async () => {
  const { data } = await instance.get('/pets');
  return data;
};

export const addPet = async data => {
  const { data: result } = await instance.post('/pets', data);
  return result;
};

export const deletePet = async id => {
  const { data } = await instance.delete(`/pets/${id}`);
  return data;
};

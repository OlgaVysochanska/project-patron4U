import AddPetForm from '../../components/AddPetForm/AddPetForm';
import Background from 'shared/components/Background/Background';

//додати контейнер з фоновим зображенням
const AddPetPage = () => {
  return (
    <>
      <Background />
      <AddPetForm />
    </>
  );
};

export default AddPetPage;

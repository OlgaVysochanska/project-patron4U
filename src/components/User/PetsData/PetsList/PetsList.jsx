import PetsListItem from './PetsListItem/PetsListItem';

// import styles from './NoticesCategoriesList.module.scss';

// const { noticesList, addPetBtn, addPetBtnIcon } = styles;

const PetsList = ({ data }) => {
  const petsItem = data.map(({ id, ...props }) => (
    <PetsListItem key={id} {...props} />
  ));

  return (
    <>
      <ul
      //    className={petsList}
      >
        {petsItem}
      </ul>
    </>
  );
};

export default PetsList;

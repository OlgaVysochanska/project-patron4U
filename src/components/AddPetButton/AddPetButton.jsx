import useLang from 'shared/hooks/useLang';
// import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { isUserLogin } from '../../redux/auth/authSelectors';
import { current } from '../../redux/auth/authOperations';

import Button from 'shared/components/Button';
import PlusIcon from '../../icons/PlusIcon';
import NotiflixMessage from '../../shared/components/NotiflixMessage/NotiflixMessage';

import styles from './AddPetButton.module.scss';

const AddPetButton = () => {
  const {lang} = useLang()

 const Add_PetLang = locale.Add_Pet[lang]

  const dispatch = useDispatch();
  let currentUser = useSelector(isUserLogin);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const handleClick=()=>{
    if (!currentUser) {
      NotiflixMessage({type:'info',data:"Register or login, please!"});
    }
  }

  const renderButton = () => (
    <Button
      type="button"
      className={styles.addBtn}
      onClick={handleClick}
      SVGComponent={() => (
        <PlusIcon width="16" height="16" viewBox="4 4 16 16" />
      )}
      label={Add_PetLang}
    />
  );

  return (
    <>
      {currentUser ? (
        <Link to="/add-pet">{renderButton()}</Link>
      ) : (
        renderButton()
      )}
    </>
  );
};

export default AddPetButton;

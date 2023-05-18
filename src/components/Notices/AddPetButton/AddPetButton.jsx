import { useSelector, useDispatch  } from 'react-redux';
import { Link  } from 'react-router-dom';
import {useEffect} from 'react'

import {isUserLogin} from '../../../redux/auth/authSelectors';
import {current} from '../../../redux/auth/authOperations'

import Button from 'shared/components/Button';
import PlusIcon from "../../../icons/PlusIcon";
import styles from "./AddPetButton.module.scss";

// отримати з редаксу користувача поки що не можу зарегатися на сайті
const AddPetButton = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  let currentUser = useSelector(isUserLogin);
  console.log(currentUser);
  currentUser=true;
  
  const renderButton = () => (
    <Button
      type="button"
      className={styles.addBtn}
      SVGComponent={() => <PlusIcon width="16" height="16" viewBox="4 4 16 16" />}
      label="Add Pet"
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
import Input from 'shared/components/Input/Input';
// import fields from './fields';
import styles from './UserDataItem.module.scss';
import Button from 'shared/components/Button/Button';
import CheckIcon from 'icons/CheckIcon';
import EditIcon from 'icons/EditIcon';
import useForm from '../../../../shared/hooks/useForm';
import { useState, useRef } from 'react';
import { useSelector } from '../../../../../node_modules/react-redux/es/exports';
import { getUserEdit } from 'redux/auth/authSelectors';
import Spiner from 'components/Spiner/Spiner';




const CheckIconTuned = () => {
  return (
    <CheckIcon stroke="#00C3AD" width="16" height="16" viewBox="0 0 22 21" />
  );
};

const EditIconTuned = () => {
  return (
    <EditIcon stroke="#54ADFF" width="16" height="16" viewBox="0 0 22 21" />
  );
};

const EditIconBlockedTuned = () => {
  return <EditIcon stroke="grey" width="16" height="16" viewBox="0 0 22 21" />;
};

const UserDataItem = ({
  label,
  name,
  value,
  defaultValue,
  isBlocked,
  blockButtons,
  unblockButtons,
  type,
  handleEditUser,
  placeholder,
  pattern
}) => {

  const loading = useSelector(getUserEdit);
  const inputRef = useRef(null);
  const initialState = value;

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });
  const [isNotEditing, setIsNotEditing] = useState(true);

  const clickEdit = () => {
    setIsNotEditing(prevState => !prevState);
    blockButtons();
    inputRef.current.focus();
  };

  const clickSave = () => {
    setIsNotEditing(true);
    unblockButtons();
    handleEditUser(state);
    // handleUser(state);
  };
  const { theme } = useTheme();

const validaatePattern = (defaultValue, pattern) => {
if(!pattern) {
  return true
}
return new RegExp(pattern).test(defaultValue)

}

const isValid = validaatePattern(state[name], pattern)

  return (
    <form onSubmit={handleSubmit} autoComplete="on" className={styles.form}>
      <div className={styles.inputWrapper}>
        <Input
          type={type}
          // key={id}
          id={name}
          label={label}
          name={name}
          // value={value}
          defaultValue={defaultValue}
          readonly={isNotEditing}
          handleChange={handleChange}
          isValid={isValid}
          // inputStyles={{padding: "4px 12px"}}
          aditionalClass={`${styles.input} ${
            theme === 'dark' && styles.inputDark
          }`}
          labelClass={`${styles.label} ${theme === 'dark' && styles.labelDark}`}
          inputRef={inputRef}
          pattern={pattern}
        ></Input>
        {isNotEditing ? (
          <Button
            type="button"
            onClick={clickEdit}
            disabled={isBlocked}
            className={styles.toggle}
            SVGComponent={!isBlocked ? EditIconTuned : EditIconBlockedTuned }
          />
        ) : (
          <Button
            type="button"
            className={styles.toggle}
            onClick={clickSave}
            SVGComponent={CheckIconTuned}
          />
        )}
      </div>
      {loading && <Spiner />}
    </form>
  );
};

export default UserDataItem;

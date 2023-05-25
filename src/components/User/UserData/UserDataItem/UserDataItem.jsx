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
import DatePicker from 'react-datepicker';

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
  pattern,
  birthDate,
  // birthday = false
}) => {
  // const CheckIconTuned = () => {
  //   return (
  //     <CheckIcon stroke="#00C3AD" width="16" height="16" viewBox="0 0 22 21" />
  //   );
  // };

  // const EditIconTuned = (isBlocked) => {
  //   return (
  //     <EditIcon stroke={isBlocked ? "#54ADFF" :"red"} width="16" height="16" viewBox="0 0 22 21" key={isBlocked} />
  //   );

  // };
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


  const handleDateChange = birthDate => {
    handleChange({
      target: {
        name: 'birthDate',
        value: birthDate,
      },
    });
  };
  // const bG = { border: '1px solid grey' };

  // const bC = { border: '1px solid red' };


  return (
    <form onSubmit={handleSubmit} autoComplete="on" className={styles.form}>
      <div className={styles.inputWrapper}>
        {/* <Input
          type={type}
          key={name}
          id={name}
          label={label}
          name={name}
          // value={value}
          defaultValue={defaultValue}
          readonly={isNotEditing}
          handleChange={handleChange}
          isValid="true"
          pattern={pattern}
          // inputStyles={{padding: "4px 12px"}}
          // inputStyle={isBlocked ? bG : bC}
          aditionalClass={styles.input}
          labelClass={styles.label}
          inputRef={inputRef}
        > */}
{(name!=="birthday") ?( <Input
          type={type}
          key={name}
          id={name}
          label={label}
          name={name}
          // value={value}
          defaultValue={defaultValue}
          readonly={isNotEditing}
          handleChange={handleChange}
          isValid="true"
          pattern={pattern}
          // inputStyles={{padding: "4px 12px"}}
          // inputStyle={isBlocked ? bG : bC}
          aditionalClass={styles.input}
          labelClass={styles.label}
          inputRef={inputRef}
        > </Input>) : ( <DatePicker
        selected={birthDate}
        onChange={handleDateChange}
        placeholderText="Type date of birth"
        showYearDropdown
        scrollableYearDropdown
        className={[
          styles.input,
          styles.datepicker,
          invalidBirthDate ? styles['inputInvalid'] : '',
        ].join(' ')}
        dateFormat="dd.MM.yyyy"
        shouldCloseOnSelect={true}
        maxDate={currentDate}
        yearDropdownItemNumber={100}
      />)
        }
     
        {isNotEditing ? (
          <Button
            type="button"
            onClick={clickEdit}
            disabled={isBlocked}
            className={styles.toggle}
            SVGComponent={!isBlocked ? EditIconTuned : EditIconBlockedTuned}
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

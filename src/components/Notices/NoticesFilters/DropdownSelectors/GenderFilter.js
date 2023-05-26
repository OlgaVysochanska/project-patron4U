import React from 'react';
import styles from './DropdownSelectors.module.scss';
import Button from 'shared/components/Button';
import ArrowDownIcon from '../../../../icons/ArrowDownIcon';
import useLang from 'shared/hooks/useLang';
import locale from '../locale.json';

const GenderFilter = ({
  isOpen,
  selectedGenders,
  handleOptionSelect,
  handleToggle,
  listRef,
  marginTop,
}) => {
  const { lang } = useLang();
  const lGender = locale.langGender[lang];
  const lMale = locale.langMale[lang];
  const lFemale = locale.langFemale[lang];

  const genders = [
    { value: 'male', label: `${lMale}` },
    { value: 'female', label: `${lFemale}` },
  ];

  return (
    <div
      className={styles.dropdownContainerSelector}
      ref={listRef}
      style={{ marginTop: isOpen ? marginTop : '0' }}
    >
      <Button onClick={handleToggle}>
        <span className={styles.filtersIcon}>
          <ArrowDownIcon />
        </span>
        <span>{lGender}</span>
      </Button>
      {isOpen && (
        <ul>
          {genders.map(option => (
            <li key={option.value}>
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedGenders.includes(option.value)}
                  onChange={() => handleOptionSelect(option.value, 'gender')}
                />
                <span>{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenderFilter;

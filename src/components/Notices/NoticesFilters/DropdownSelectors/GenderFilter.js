import React from 'react';
import styles from './DropdownSelectors.module.scss';
import Button from 'shared/components/Button';
import ArrowDownIcon from '../../../../icons/ArrowDownIcon';

const GenderFilter = ({
  isOpen,
  selectedGenders,
  handleOptionSelect,
  handleToggle,
  listRef,
  marginTop,
}) => {
  const genders = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
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
        <span>By gender</span>
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

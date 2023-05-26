import React from 'react';
import styles from './DropdownSelectors.module.scss';
import Button from 'shared/components/Button';
import ArrowDownIcon from '../../../../icons/ArrowDownIcon';
import useLang from 'shared/hooks/useLang';
import locale from '../locale.json';

const AgeFilter = ({
  isOpen,
  selectedAges,
  handleOptionSelect,
  handleToggle,
  listRef,
}) => {
  const { lang } = useLang();
  const lAge = locale.langAge[lang];
  const l3_12m = locale.lang3m[lang];
  const l1y = locale.lang1y[lang];
  const l2y = locale.lang2y[lang];

  const ages = [
    { value: '3-12m', label: `${l3_12m}` },
    { value: '1year', label: `${l1y}` },
    { value: '2year', label: `${l2y}` },
  ];

  return (
    <div className={styles.dropdownContainerSelector} ref={listRef}>
      <Button onClick={handleToggle}>
        <span className={styles.filtersIcon}>
          <ArrowDownIcon />
        </span>
        <span>{lAge}</span>
      </Button>
      {isOpen && (
        <ul>
          {ages.map(option => (
            <li key={option.value}>
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedAges.includes(option.value)}
                  onChange={() => handleOptionSelect(option.value, 'age')}
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

export default AgeFilter;

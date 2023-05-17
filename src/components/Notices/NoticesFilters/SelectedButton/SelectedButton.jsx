import styles from './SelectedButton.module.scss';
import Button from 'shared/components/Button';
import CrossSmallIcon from '../../../../icons/CrossSmallIcon';

const SelectedButtons = ({ buttons, onRemove }) => {
  return (
    <ul className={styles.selectedButtons}>
      {buttons.map((buttonLabel, index) => (
        <li key={index} onClick={() => onRemove(buttonLabel)}>
          <Button className={styles.selectedButton}>
            <span>{buttonLabel}</span>
            <span className={styles.filterIcon}>
              <CrossSmallIcon />
            </span>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SelectedButtons;

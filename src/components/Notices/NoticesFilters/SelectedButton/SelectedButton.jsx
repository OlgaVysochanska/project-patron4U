import styles from './SelectedButton.module.scss';
import Button from 'shared/components/Button';
import CrossSmallIcon from '../../../../icons/CrossSmallIcon';

const SelectedButtons = ({ buttons, onRemove }) => {
  return (
    <ul className={styles.selectedButtons}>
      {buttons.map((buttonLabel, index) => (
        <li key={index}>
          <Button
            className={styles.selectedButton}
            onClick={() => onRemove(buttonLabel)}
          >
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

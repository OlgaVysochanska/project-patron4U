import styles from '../../NoticesFilters/NoticesFilters.module.scss';
import Button from 'shared/components/Button';
import CrossSmallIcon from '../../../../icons/CrossSmallIcon';

const SelectedButtons = ({ buttons, onRemove }) => {
  return (
    <div>
      <ul className={styles.ulSelectedButtons}>
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
    </div>
  );
};

export default SelectedButtons;

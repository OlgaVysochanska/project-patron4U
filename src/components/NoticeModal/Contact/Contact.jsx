import Button from 'shared/components/Button/Button';
import styles from './Contact.module.scss';

const Contact = ({ phone }) => {
  return (
    <Button className={styles.contact}>
      <a href={`tel:${phone}`} className={styles.contactLink}>
        Contact
      </a>
    </Button>
  );
};

export default Contact;

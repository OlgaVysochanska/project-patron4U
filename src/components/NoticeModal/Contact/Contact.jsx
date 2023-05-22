import Button from 'shared/components/Button/Button';
import styles from './Contact.module.scss';

const Contact = ({ email }) => {
  return (
    <Button className={styles.contact}>
      <a href={`mailto:${email}`} className={styles.contactLink}>
        Contact
      </a>
    </Button>
  );
};

export default Contact;

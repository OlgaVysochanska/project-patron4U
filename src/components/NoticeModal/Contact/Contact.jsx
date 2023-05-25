import useLang from 'shared/hooks/useLang';

import Button from 'shared/components/Button/Button';

import locale from './locale.json';

import styles from './Contact.module.scss';

const Contact = ({ phone }) => {
  const { lang } = useLang();
  const contact = locale.contact[lang];

  return (
    <Button className={styles.contact}>
      <a href={`tel:${phone}`} className={styles.contactLink}>
        {contact}
      </a>
    </Button>
  );
};

export default Contact;

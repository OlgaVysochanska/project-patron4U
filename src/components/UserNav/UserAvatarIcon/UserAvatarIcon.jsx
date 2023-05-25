import styles from './UserAvatarIcon.module.scss';

export default function UserAvatarIcon({ src }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt="User Avatar" />
    </div>
  );
}

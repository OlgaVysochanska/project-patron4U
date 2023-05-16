import { useState } from 'react';
import s from './FriendsItem.module.scss';

const FriendsItem = ({
  address,
  addressUrl,
  email,
  imageUrl,
  phone,
  title,
  url,
  workDays,
}) => {
  const [time, setTime] = useState(null);

  const handleMouseEnter = e => {
    setTime(workDays);
  };

  const handleMouseLeave = e => {
    setTime(null);
  };

  return (
    <div className={s.card}>
      <a className={s.cardTitle} href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
      <div className={s.iconDescriptionWrapper}>
        {imageUrl ? (
          <img src={imageUrl} className={s.icon} alt="Our Friend Icon" />
        ) : (
          <div className={s.icon}>No image</div>
        )}
        <ul className={s.descriptionList}>
          <li className={s.descriptionEl}>
            <div
              className={s.timeHoverDescription}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className={s.descriptionTitle}>Time:</p>
              <p></p>

              {time && time.length > 0 && (
                <div className={s.timeOverlay}>
                  <ul>
                    <li className={s.timeDescription}>MN:</li>
                    <li className={s.timeDescription}>TU:</li>
                    <li className={s.timeDescription}>WE:</li>
                    <li className={s.timeDescription}>TH:</li>
                    <li className={s.timeDescription}>FR:</li>
                    <li className={s.timeDescription}>SA:</li>
                    <li className={s.timeDescription}>SU:</li>
                  </ul>
                  <ul>
                    <li className={s.timeDescription}>
                      {workDays[0].from}-{workDays[0].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[1].from}-{workDays[1].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[2].from}-{workDays[2].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[3].from}-{workDays[3].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[4].from}-{workDays[4].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[5].from}-{workDays[5].to}
                    </li>
                    <li className={s.timeDescription}>
                      {workDays[5].from}-{workDays[5].to}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>

          <li className={s.descriptionEl}>
            <p className={s.descriptionTitle}>Address:</p>
            <a
              className={s.description}
              href={addressUrl}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </li>
          <li className={s.descriptionEl}>
            <p className={s.descriptionTitle}>Email:</p>
            <a href={`mailto:${email}`} className={s.description}>
              {email}
            </a>
          </li>
          <li className={s.descriptionEl}>
            <p className={s.descriptionTitle}>Phone:</p>
            <a href={`tel:${phone}`} className={s.description}>
              {phone}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FriendsItem;

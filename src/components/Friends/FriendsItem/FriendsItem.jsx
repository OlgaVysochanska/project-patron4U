import { useState } from 'react';
import s from './FriendsItem.module.scss';
import noImage from '../../../images/no-image.png';
import useTheme from 'shared/hooks/useTheme';
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

  const { theme } = useTheme();

  const timeDescription =
    theme === 'light'
      ? s.timeDescription
      : `${s.timeDescription} + ${s.timeDescriptionDark}`;

  return (
    <div className={s.card}>
      <a className={s.cardTitle} href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
      <div className={s.iconDescriptionWrapper}>
        {imageUrl ? (
          <img src={imageUrl} className={s.icon} alt="Our Friend Icon" />
        ) : (
          <img src={noImage} className={s.icon} alt="Our Friend Icon" />
        )}
        <ul className={s.descriptionList}>
          <li className={s.descriptionEl}>
            <div
              className={s.timeHoverDescription}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className={`${s.descriptionTitle} ${
                  theme === 'dark' && s.descriptionTitleDark
                }`}
              >
                Time:
              </p>
              {workDays ? (
                <p
                  className={`${s.description} ${
                    theme === 'dark' && s.descriptionDark
                  }`}
                >
                  schedule
                </p>
              ) : (
                <p
                  className={`${s.description} ${
                    theme === 'dark' && s.descriptionDark
                  }`}
                >
                  online
                </p>
              )}

              {time && time.length > 0 && (
                <div
                  className={`${s.timeOverlay} ${
                    theme === 'dark' && s.timeOverlayDark
                  }`}
                >
                  <ul>
                    <li className={timeDescription}>MN:</li>
                    <li className={timeDescription}>TU:</li>
                    <li className={timeDescription}>WE:</li>
                    <li className={timeDescription}>TH:</li>
                    <li className={timeDescription}>FR:</li>
                    <li className={timeDescription}>SA:</li>
                    <li className={timeDescription}>SU:</li>
                  </ul>
                  <ul>
                    {workDays[0].from && workDays[0].to ? (
                      <li className={timeDescription}>
                        {workDays[0].from}-{workDays[0].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[1].from && workDays[1].to ? (
                      <li className={timeDescription}>
                        {workDays[1].from}-{workDays[1].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[2].from && workDays[2].to ? (
                      <li className={timeDescription}>
                        {workDays[2].from}-{workDays[2].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[3].from && workDays[3].to ? (
                      <li className={timeDescription}>
                        {workDays[3].from}-{workDays[3].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[4].from && workDays[4].to ? (
                      <li className={timeDescription}>
                        {workDays[4].from}-{workDays[4].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[5].from && workDays[5].to ? (
                      <li className={timeDescription}>
                        {workDays[5].from}-{workDays[5].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                    {workDays[6].from && workDays[6].to ? (
                      <li className={timeDescription}>
                        {workDays[6].from}-{workDays[6].to}
                      </li>
                    ) : (
                      <li className={timeDescription}>day off</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </li>

          <li className={s.descriptionTitle}>
            <p
              className={`${s.descriptionTitle} ${
                theme === 'dark' && s.descriptionTitleDark
              }`}
            >
              Address:
            </p>
            <a
              className={`${s.description} ${
                theme === 'dark' && s.descriptionDark
              }`}
              href={addressUrl}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </li>
          <li className={s.descriptionEl}>
            <p
              className={`${s.descriptionTitle} ${
                theme === 'dark' && s.descriptionTitleDark
              }`}
            >
              Email:
            </p>
            <a
              href={`mailto:${email}`}
              className={`${s.description} ${
                theme === 'dark' && s.descriptionDark
              }`}
            >
              {email}
            </a>
          </li>
          <li className={s.descriptionEl}>
            <p
              className={`${s.descriptionTitle} ${
                theme === 'dark' && s.descriptionTitleDark
              }`}
            >
              Phone:
            </p>
            <a
              href={`tel:${phone}`}
              className={`${s.description} ${
                theme === 'dark' && s.descriptionDark
              }`}
            >
              {phone}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FriendsItem;

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { getFriends } from '../../shared/services/friends';
import FriendsItem from './FriendsItem/FriendsItem';
import useTheme from 'shared/hooks/useTheme';
import scss from './OurFriendsList.module.scss';

const OurFriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getFriends()
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const { theme } = useTheme();

  const item =
    theme === 'light' ? scss.item : `${scss.item} + ${scss.itemDark}`;

  const list =
    theme === 'light' ? scss.list : `${scss.list} + ${scss.listDark}`;

  const elements = friends.map(
    ({
      _id,
      address,
      addressUrl,
      email,
      imageUrl,
      phone,
      title,
      url,
      workDays,
    }) => {
      return (
        <li key={_id} className={item}>
          <FriendsItem
            _id={_id}
            address={address}
            addressUrl={addressUrl}
            email={email}
            imageUrl={imageUrl}
            phone={phone}
            title={title}
            url={url}
            workDays={workDays}
          />
        </li>
      );
    }
  );

  return (
    <>
      {isLoading && <Spiner />}
      {error ? (
        <Navigate to="/not-found" />
      ) : (
        <ul className={list}>{elements}</ul>
      )}
    </>
  );
};

export default OurFriendsList;

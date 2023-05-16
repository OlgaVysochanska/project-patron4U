import { useEffect, useState } from 'react';
import Spiner from '../../components/Spiner/Spiner';
import { getFriends } from '../../shared/services/friends';
import FriendsItem from './FriendsItem/FriendsItem';
import scss from './OurFriendsList.module.scss';

const OurFriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getFriends()
      .then(response => {
        console.log(response);
        setFriends(response);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

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
        <li key={_id} className={scss.item}>
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
        <p className={scss.error}>{error}</p>
      ) : (
        <ul className={scss.list}>{elements}</ul>
      )}
    </>
  );
};

export default OurFriendsList;

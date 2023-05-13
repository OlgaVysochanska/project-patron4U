import s from './OurFriendsPage.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OurFriendsList from '../../components/Friends/OurFriendsList';
import Spiner from '../../components/Spiner/Spiner';

const translations = {
en: {
friendsPage: 'Friends Page'
},
uk: {
friendsPage: 'Сторінка друзів'
}
};

const Container = ({ children }) => {
return <div className={s.container}>{children}</div>;
};

const OurFriendsPage = () => {
const [friends, setFriends] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [lang] = useState('en');

useEffect(() => {
setIsLoading(true);
axios.get('/api/friends')
.then(response => {
setFriends(response.data);
})
.catch(error => console.log(error))
.finally(() => setIsLoading(false));
}, []);

const t = (key) => {
return translations[lang][key];
};

return (
<Container>
<h2 className={s.mainTitle}>{t('friendsPage')}</h2>
{isLoading ? <Spiner /> : <OurFriendsList friends={friends} />}
</Container>
);
};

export default OurFriendsPage;
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  timeout: 5000,
  width: '280px',
  distance: '20px',
  borderRadius: '20px',
  clickToClose: true,
  fontSize: '16px',
  //useIcon:false,
  showOnlyTheLastOne: true,
  info: {
    background: '#cce4fb',
    textColor: '#54adff',
    notiflixIconColor: '#54adff',
  },
});

const NotiflixMessage = ({ type, data }) => {
  return Notiflix.Notify[type](data);
};

export default NotiflixMessage;

//https://notiflix.github.io/notify

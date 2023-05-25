import Notiflix from 'notiflix';

Notiflix.Notify.init({
  timeout: 5000,
  width: '280px',
  distance: '20px',
  borderRadius: '20px',
  clickToClose: true,
  fontFamily: 'Manrope',
  fontSize: '16px',
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-right',
  cssAnimationDuration: 500,
  info: {
    background: '#cce4fb',
    textColor: '#54adff',
    notiflixIconColor: '#54adff',
  },
  failure: {
    background: '#F43F5E',
    textColor: '#FEF9F9',
    notiflixIconColor: '#FEF9F9',
  },
  warning: {
    background: '#FFC107',
    textColor: '#111',
    notiflixIconColor: '#111',
  },
  success: {
    background: '#54ADFF',
    textColor: '#FEF9F9',
    notiflixIconColor: '#FEF9F9',
  },
});

const NotiflixMessage = ({ type, data }) => {
  return Notiflix.Notify[type](data);
};

export default NotiflixMessage;

//https://notiflix.github.io/notify

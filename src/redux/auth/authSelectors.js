export const isUserLogin = ({ auth }) => auth.isLogin;

export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};

export const getUser = ({ auth }) => auth.user;

export const getUserEdit = ({ auth }) => auth.isLoading;

export const getUserPets = ({ auth }) => auth.pets;
export const selectIsRegistered =  ({ auth }) => auth.isRegistered;

export const getFavoriteNotices = ({ auth }) => auth.user.favoriteNotice;

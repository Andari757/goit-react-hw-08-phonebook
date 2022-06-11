export const getError = ({ auth }) => auth.error;
export const isUserLoggedIn = ({ auth }) => auth.isLogin;
export const getToken = ({ auth }) => auth.token;
export const getUser = ({ auth }) => auth.user;
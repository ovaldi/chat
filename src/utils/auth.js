import cookies from 'js-cookie';
const MEMBER_TOKEN = 'member_token';

const auth = {
  getToken () {
    return cookies.get(MEMBER_TOKEN);
  },
  setToken (value, expires) {
    cookies.set(MEMBER_TOKEN, value, expires ? { expires } : null);
  },
  isAuthenticated () {
    return !!this.getToken();
  }
};

export default auth;

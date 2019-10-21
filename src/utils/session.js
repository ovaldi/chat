// 临时降级方案
let cache = {};

const session = {
  get (key) {
    try {
      return sessionStorage.getItem(key);
    } catch (err) {
      return cache[key];
    }
  },

  set (key, val) {
    try {
      sessionStorage.setItem(key, val);
    } catch (err) {
      cache[key] = val;
    }
  },

  del (key) {
    try {
      sessionStorage.removeItem(key);
    } catch (err) {
      delete cache[key];
    }
  }
};

export default session;

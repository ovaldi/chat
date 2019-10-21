// 临时降级方案
let proxy = {};

const store = {
  get (key) {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      return proxy[key];
    }
  },

  set (key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (err) {
      proxy[key] = val;
    }
  },

  del (key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      delete proxy[key];
    }
  }
};

export default store;

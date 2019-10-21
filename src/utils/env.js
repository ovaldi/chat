const env = {
  isWx () {
    const regex = /MicroMessenger/i;
    return regex.test(navigator.userAgent);
  },
  isWeibo () {
    const regex = /WeiBo/i;
    return regex.test(navigator.userAgent);
  },
  isAweme () {
    const regex = /aweme/i;
    return regex.test(navigator.userAgent);
  },
  isAndroid () {
    return navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/);
  }
};

export default env;

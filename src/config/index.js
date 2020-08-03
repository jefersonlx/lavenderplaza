const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://lavenderplaza.herokuapp.com';// url local vs publicada no heroku

export default {
  URL_BACKEND_TOP,
};

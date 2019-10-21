import auth from './auth';
import axios from 'axios';

const request = axios.create({
  baseURL: '/',
  transformRequest: [(data, headers) => {
    const token = auth.getToken();
    headers.common['x-platform'] = 'web';

    if (token) {
      headers.common['Authorization'] = `Bearer ${token}`;
    }

    return data;
  }]
});

request.interceptors.response.use(
  resp => resp.data,
  error => Promise.reject(error)
);

export default request;

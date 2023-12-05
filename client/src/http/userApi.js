import { $authHost, $host } from './index';

export const registration = async (email, password) => {
  const response = await $host.post('api/user/registration', {
    email,
    password,
    role: 'ADMIN',
  });
  localStorage.setItem('token', response.data.token)
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', response.data.token)
  return response;
};

export const check = async () => {
  const response = await $authHost.get('api/user/auth');
  localStorage.setItem('token', response.data.token)
  return response;
};

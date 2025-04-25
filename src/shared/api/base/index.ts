import ky from 'ky';

const client = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;

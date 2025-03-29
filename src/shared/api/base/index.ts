import ky from 'ky';

const client = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
});

export default client;

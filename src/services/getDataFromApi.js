import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zgmB4_kx_IQkL-3m2VqlrsZFVH7qFy57-l7vA_v4Pdo'
      }
})
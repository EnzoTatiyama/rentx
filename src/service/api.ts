import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.51:3333',
});

export { api };
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f446a.firebaseio.com/'
});

export default instance;
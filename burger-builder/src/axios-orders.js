import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-35d3f.firebaseio.com/'
});

export default instance;
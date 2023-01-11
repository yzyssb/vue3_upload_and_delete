import axios from 'axios';
let instance = axios.create({
    baseURL: 'https://yangzhiyuan.top/tp5/public',
})
export default instance;
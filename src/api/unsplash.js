import axios from 'axios';


//creates a customized copy of axios for our requests
export default axios.create({
    baseURL:'https://api.unsplash.com';
    headers: {
        Authorization: 'Client-ID 6ce100efa37372314315ddfe8543a1a1a0fe0e2f27d63281780661392beba6ed'
    },
});
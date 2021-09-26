import axios from 'axios' ;

const instance = axios.create({
    baseURL: "https://tinder-backend-2110.herokuapp.com/"
}) ;

export default instance ;
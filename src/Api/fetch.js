import axios from 'axios';
const axiosInstance = axios.create({
    baseURL :"https://api.themoviedb.org/3",
    params:{
        api_key :"c8684b748f9910ef66334f731b1f28db",
    },
})

export default axiosInstance;
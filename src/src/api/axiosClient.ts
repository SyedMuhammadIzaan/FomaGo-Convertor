import axios from "axios";

const axiosClient=axios.create({
    // baseURL:"http://127.0.0.1:8000
    baseURL:"https://docuflex-backend-production.up.railway.app/",
    headers:{
        "Content-Type":"application/json",
    }
})

export default axiosClient;
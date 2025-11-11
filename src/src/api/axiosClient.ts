import axios from "axios";

const axiosClient=axios.create({
    baseURL:"https://formagobackend.vercel.app/",
    headers:{
        "Content-Type":"application/json",
    }
})

export default axiosClient;
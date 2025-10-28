import axios from "axios";

const axiosClient=axios.create({
    baseUrl:"http://localhost:3000",
    headers:{
        "Content-Type":"application/json",
    }
})

export default axiosClient;
import axiosClient from "./axiosClient";

export const convertFiles=async (file:File,targetFormat:string)=>{
    try{
        const formData=new FormData();
        formData.append("file",file);
        formData.append("target_format",targetFormat);

        const response=await axiosClient.post("/",formData,{
            headers:{
                "Content-Type":"multipart/form-data",
            }
        })
        return response.data;
    }catch(error){
        throw error;
    }
}
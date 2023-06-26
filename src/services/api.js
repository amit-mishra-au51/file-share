import axios from 'axios'; //API call fn.
 
const API_URL = 'http://localhost:8000';    //backend server


export const uploadFile = async (data) => {
    try{
       let response =  await axios.post(`${API_URL}/upload`, data);
       return response.data;
    } catch (error) {
        console.error('Error while calling the api', error.message);
    }
}
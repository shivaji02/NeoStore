import axios from 'axios';

const regUser = 'http://staging.php-dev.in:8844/trainingapp/api/users/register';

export const registerUser = async(userData)=>{
    try{
        const response =await axios.post(regUser,userData);
        return response.data;}
        catch(error){
            throw error;
        }
};
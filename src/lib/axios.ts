import axios from 'axios'
import dotenv from 'dotenv' 
dotenv.config()

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': process.env.API_HOST,
    }
})
export default api
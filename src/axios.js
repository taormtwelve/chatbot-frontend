import axios from 'axios'
const instance = axios.create({
   baseURL: 'https://chatbot-backend-4rm7ds5isa-an.a.run.app/'
})
export default instance
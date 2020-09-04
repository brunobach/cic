import axios from 'axios'

const api = axios.create({
    baseURL: 'https://desolate-forest-52637.herokuapp.com/https://bibliotecacic.static.delivery/',
})

export default api;
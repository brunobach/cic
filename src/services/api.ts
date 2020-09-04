import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bibliotecacic.static.delivery/'
})

export default api;
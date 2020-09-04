import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://bibliotecacic.static.delivery/'
})

export default api;
import axios from 'axios'

const createAxios = axios.create({
    baseURL: '/api/v1',
})

export default createAxios

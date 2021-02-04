import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies'
})

export default instance
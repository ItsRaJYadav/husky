import axios from 'axios'
export const devBaseUrl="http://192.168.29.179:5000/v1/"
export const productionBaseUrl="https://nodets-sepu.onrender.com/v1/"

const AxiosObj=axios.create({baseURL:productionBaseUrl})

export default AxiosObj
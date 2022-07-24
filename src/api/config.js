import axios from "axios"

const instance = axios.create({
    baseURL: " https://devapi.wtfup.me/",
})

export default instance
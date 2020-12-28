import axios from 'axios'

let Axios = axios.create()

Axios.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user ? user.token : null;

        if (token) {
            config.headers.common['Authorization'] = 'Bearer ' + token
        } else {
            delete config.headers.common['Authorization']
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default Axios
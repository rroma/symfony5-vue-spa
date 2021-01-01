import Axios from "../http"

function login(username, password) {
    return new Promise((resolve, reject) => {
        Axios.post('/api/token', {username, password})
            .then((response) => {
                resolve(response.data.token);
            }, (error) => {
                reject(error);
            });
    });
}

export default {
    login
};
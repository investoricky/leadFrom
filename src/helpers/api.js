import axios from 'axios'

const baseUrl = 'https://leadfrom-api-app.herokuapp.com/api/'

export default {
    async register(credentials) {
        return axios.post(baseUrl + 'register', credentials)
            .then(response => response)
    }
}
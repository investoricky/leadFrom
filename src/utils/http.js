import axios from 'axios';

// const http = axios.create({
//     baseURL: 'https://leadfrom-api-app.herokuapp.com/api/',
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });

// http.interceptors.request.use(function (config) {
//     const jwt = localStorage.getItem('jwt');
//     config.headers.Authorization = 'Bearer ' + jwt
// });

// export default http;

axios.defaults.baseURL = 'https://leadfrom-api-app.herokuapp.com/api/'
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
import axios from 'axios'

const http = axios.create({
  headers: {
    /*"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"*/
  },
  responseType: 'json',
  baseURL: 'http://localhost/api-myoffer/public/api/',
})

export default http;
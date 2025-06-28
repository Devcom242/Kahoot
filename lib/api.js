import axios from 'axios'


export const api = axios.create({
    baseURL: 'http://kahoot.nos-apps.com',
    headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
})
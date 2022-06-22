import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://kinosun.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

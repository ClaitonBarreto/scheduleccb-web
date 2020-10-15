import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const apiConnection =  {
    get: async (url) => {

        let result = {}
        let error = {}
        await api.get(url)
        .then(response => {
            result = response
        })
        .catch(err => error = err)

        return result;
    },

    post: async (url, options) => {
        let result = {}
        let error = {}
        await api.post(url, options)
        .then(response => {
            result = response
        })
        .catch(err => error = err)

        return result;
    },

    put: async (url, options) => {
        let result = {}
        let error = {}
        await api.put(url, options)
        .then(response => {
            result = response
        })
        .catch(err => error = err)

        return result;
    }
}

export default apiConnection;
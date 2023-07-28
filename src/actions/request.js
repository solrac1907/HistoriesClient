import axios from "axios";
const URL = process.env.REACT_APP_URL_API
export const request = (uri, method, data, headers) => {
    let header = { "Accept": "application/json, text/plain, /", "Content-Type": "application/json" }
    if (headers)
        Object.keys(headers).forEach((keys) => {
            header[keys] = headers[keys]
        })
    return axios({
        method: method,
        url: `${URL}/${uri}`,
        data: data,
        headers: header
    })
}
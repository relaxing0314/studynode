import axios from 'axios'

let base = ''

export const getUserList = params => {
  return axios.get(`${base}/list`, {
    params: params
  })
}

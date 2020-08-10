import { axios } from '../utils/request'

export function comment() {
  return axios({
    url: 'https://cn1.api.wfblog.net/163.comment.php',
    method: 'get',
    data: {
      type: 1,
      page: 1
    }
  })
}

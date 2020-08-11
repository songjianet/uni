import { request } from '../utils/request'

export function comment() {
  return request.middleware({
    url: 'https://cn1.api.wfblog.net/163.comment.php',
    method: 'GET',
    data: {
      type: 1,
      page: 1
    }
  })
}

import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/dept/list',
    method: 'get',
    params: query
  })
}


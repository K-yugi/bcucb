import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/bcucb/api/Comment/all',
    method: 'get',
    params: query
  })
}


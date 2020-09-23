import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/eduservice/edu-teacher/findAllTeacher',
    method: 'get',
    params
  })
}

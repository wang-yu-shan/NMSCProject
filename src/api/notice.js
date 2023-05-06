import request from '@/utils/request'

export function list (data) {
    return request({
        url: '/notice/list',
        method: 'post',
        data
    })
}

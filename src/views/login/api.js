import { request } from '@/api/service'

export function login (data) {
    return request({
        method: 'POST',
        url: '/aig-iot-auth/auth/enter',
        data
    })
}

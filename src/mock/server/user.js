import Mock from 'mockjs'
var loginInfo = Mock.mock({
    'token|1-10': 'ky',
    username: 'admin',
    'userId|1-999': 2
})

Mock.mock('/login', 'post', (options) => {
    return {
        status: 200,
        message: '成功',
        data: loginInfo
    }
})

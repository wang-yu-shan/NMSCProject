import Mock from 'mockjs'
var loginInfo = Mock.mock({
    'data|1-20': [{
        'id|+1': 1,
        title: '@ctitle(10, 20)'
    }]
})

Mock.mock('/notice/list', 'post', (options) => {
    return {
        status: 200,
        message: '成功',
        data: loginInfo.data
    }
})

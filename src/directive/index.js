// 批量导入model下的所有js文件
const files = require.context('./modules', true, /\.js$/)

const generators = files.keys().map(fileName => ({
    directiveConfig: files(fileName).default,
    directiveName: fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
}))

export default {
    // 注册指令
    install (Vue) {
        generators.forEach((item) => {
            Vue.directive(item.directiveName, item.directiveConfig)
        })
    }
}

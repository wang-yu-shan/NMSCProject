import util from '../../libs/util.js'
const state = {
    token: util.cookies.get('token') || null
}

const mutations = {
    SET_TOKEN (state, data) {
    },
    REMOVE_TOKEN: (state) => {
    }
}

const actions = {

}

export default {
    // 开启命名空间
    namespaced: true,
    state,
    mutations,
    actions
}

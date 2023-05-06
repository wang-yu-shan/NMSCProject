<template>
    <div class="_login-page">
        <div class="_page-title">公租房综合管理平台</div>
        <div class="_page-sign">
            <img
                :src="signImg"
                alt=""
            >
        </div>
        <div class="_page-form">
        <div class="_form-title">用户登录</div>
            <el-form
                ref="loginForm"
                class="_el-form"
                :rules="rules"
                :model="formLogin"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="formLogin.username"
                        size="medium"
                        type="text"
                        placeholder="用户名"
                    >
                        <i
                            slot="prepend"
                            style="font-size:20px;color: #357fff;"
                        >
                            <span class="iconfont icon-user" ></span>
                        </i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="formLogin.password"
                        type="password"
                        size="medium"
                        placeholder="密码"
                        v-enter="handleSubmit"
                    >
                        <i
                            slot="prepend"
                            style="font-size:20px;color: #357fff;"
                        >
                            <span class="iconfont icon-ai-password"></span>
                        </i>
                    </el-input>
                </el-form-item>
                <el-button
                    size="medium"
                    type="primary"
                    :loading="loading"
                    class="button-login"
                    @click="handleSubmit"
                >登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/user'
export default {
    data () {
        return {
            signImg: require('../../assets/images/login_sign.png'),
            // 表单
            formLogin: {
                username: 'admin',
                password: 'admin',
                code: ''
            },
            // 表单校验
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ],
                code: [
                    {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }
                ]
            },
            loading: false
        }
    },
    methods: {
        // 提交登录信息
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true
                    login().then(res => {
                        this.$store.commit('user/SET_TOKEN', res.data.token)
                        this.$router.push('/demo')
                        this.loading = false
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
._login-page {
	padding-top: 80px;
	position: relative;
	box-sizing: border-box;
	height: 100%;
	background-image: url('../../assets/images/login_bg.png');
	background-position: center;
	background-size: cover;
	._page-sign {
		position: absolute;
		left: 200px;
		top: 55%;
		transform: translateY(-50%);
		img {
			width: 600px;
		}
	}
	._page-title {
		text-align: center;
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 12px;
		font-size: 50px;
		color: #1614d9;
	}
	._page-form {
		width: 300px;
		background: #f5fafe;
		border-radius: 8px;
		box-shadow: 0 0 0 10;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 30px;
		right: 10%;
		._form-title {
			text-align: center;
			color: #1b52c4;
			font-size: 22px;
		}
		._el-form {
			margin-top: 20px;
			.el-form-item {
				::v-deep {
					.el-form-item__content {
						.el-input {
							.el-input-group__prepend {
								background: transparent;
								padding: 0 20px 0px 0px;
								border: none;
								.iconfont {
									font-size: 24px;
								}
								.icon-mima {
									font-weight: 600;
								}
							}
							.el-input__inner {
								border: 1px solid #1ba5f2;
							}
						}
					}
				}
			}
			.button-login {
				width: 100%;
				background-color: #357fff;
				text-align: center;
				margin-top: 30px;
				::v-deep {
					span {
						font-weight: 600;
					}
				}
			}
		}
	}
}
</style>

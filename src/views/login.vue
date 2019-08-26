<template>
    <div class="container-fluid col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    登陆
                </h3>
            </div>
            <div class="card-body shadow">
                <form onsubmit="return false">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" name="username" placeholder="用户名" v-model="u">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fas fa-key"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control" name="password" placeholder="密码" v-model="p">
                    </div>
                    <p class="text-danger">{{loginMsg}}</p>
                    <button class="btn btn-outline-success mr-3 mb-3" type="submit" @click="login"
                            :disabled="stat === 1">
                        登录
                        <i class="fas fa-sign-in-alt"></i>
                    </button>
                    <button class="btn btn-outline-warning mr-3 mb-3" @click="forget" :disabled="stat === 1">
                        忘记密码
                        <i class="fas fa-exclamation-circle"></i>
                    </button>
                    <button class="btn btn-outline-primary mr-3 mb-3" @click="registe" :disabled="stat === 1">
                        注册
                        <i class="fas fa-user-plus"></i>
                    </button>
                    <div class="form-check" @click="flag_remember = !flag_remember">
                        <input class="form-check-input" type="checkbox" v-model="flag_remember">
                        <label class="form-check-label">
                            记住账号
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    //TODO:跳转到原地址
    import {mapState} from 'vuex'

    import api from '@/service/api'

    export default {
        name: "login",
        async created() {
            this.u = this.$store.state.username
            if (this.$store.state.logined)
                this.$router.push('/')
        },
        data: function () {
            return {
                u: "",
                p: "",
                /**
                 * 状态
                 * - 0.初始化完成
                 * - 1.执行中
                 * - 2.执行失败
                 */
                stat: 0,
                btn_clicked: 0,
                flag_remember: false,
                err_msg: ''
            }
        },
        computed: mapState([
            'loginMsg'
        ]),
        methods: {
            async login() {
                //提交登陆
                this.stat = 1
                this.btn_clicked = 1
                const res = await api.user.login({u: this.u, p: this.p}).catch(e => {
                    console.debug(e)
                    this.stat = 2
                    this.btn_clicked = 0
                    //TODO: 提示登录失败
                })
                if (res) {
                    //登录成功
                    console.debug(`[Login] Success`)
                    this.$store.commit('change_state', {logined: true})
                    //跳转
                    if (this.$store.state.jumped_url) {
                        this.$router.push(this.$store.state.jumped_url)
                        this.$store.commit('change_state', {jumped_url: ''})
                    } else {
                        this.$router.push('/')
                    }
                } else {
                    console.debug(`[Login] Failed`)
                }
            },
            forget: function () {
                //短信验证码登录
                this.stat = 1
                this.btn_clicked = 2

            },
            registe: function () {
                this.stat = 1
                this.btn_clicked = 3

            }
        }
    }
</script>

<style scoped>

</style>

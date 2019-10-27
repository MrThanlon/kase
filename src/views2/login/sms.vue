<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-phone"></i>
              </span>
            </div>
            <input type="text"
                   class="form-control"
                   name="username"
                   placeholder="手机号"
                   v-model="username"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input type="text"
                   class="form-control"
                   name="username"
                   placeholder="新密码"
                   v-model="password"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input type="text"
                   class="form-control"
                   name="username"
                   placeholder="再次输入密码"
                   v-model="passwordAgain"/>
        </div>
        <div class="d-flex">
            <div class="input-group mb-3 w-50">
                <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-envelope"></i>
              </span>
                </div>
                <input type="password"
                       class="form-control"
                       name="password"
                       placeholder="验证码"
                       v-model="token"/>
            </div>
            <button class="btn btn-outline-dark mb-3 ml-3 w-50">
                发送
                <i class="fas fa-plane-departure"></i>
            </button>
        </div>
        <p class="text-danger">{{$store.state.loginMsg}}</p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-outline-dark mb-3 w-100"
                    type="submit"
                    @click="forget">
                确定
                <i class="fas fa-sign-in-alt"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'

    export default {
        name: "sms",
        data: function () {
            return {
                username: '',
                password: '',
                passwordAgain: '',
                token: ''
            }
        },
        methods: {
            async login() {
                if (this.password !== this.passwordAgain) {
                    this.$store.commit('change_state', {loginMsg: "密码不一致"})
                    return
                }
                try {
                    await api.user.one_time_login({
                        u: this.username,
                        token: this.token,
                        password: this.password
                    })
                    console.debug(`[Login] Success!`)
                    // 登录成功
                    const id = await api.user.id()
                    this.$store.commit('change_state', {
                        logined: true,
                        type: id.type,
                        typeText: 'student'
                    })
                    this.$router.push('/student/project')
                } catch (e) {
                    // TODO:提示错误
                    console.debug(e)
                    this.$store.commit('change_state', {loginMsg: "错误"})
                }
            },
            async forget() {
                if (this.username.length === 11) {
                    try {
                        await api.user.sms({u: this.username})
                        this.$store.commit('change_state', {loginMsg: ""})
                    } catch (e) {
                        console.debug(e)
                        this.$store.commit('change_state', {loginMsg: "错误"})
                    }
                } else {
                    this.$store.commit('change_state', {loginMsg: "请输入11位手机号"})
                }
            }
        }
    }
</script>

<style scoped>

</style>

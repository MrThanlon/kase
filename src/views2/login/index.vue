<template>
  <div class="container-fluid col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 pt-5">
    <div class="card shadow">
      <div class="card-header">
        <h3 class="card-title mb-0">
          登陆
        </h3>
      </div>
      <div class="card-body">
        <form onsubmit="return false">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <input type="text"
                   class="form-control"
                   name="username"
                   placeholder="用户名"
                   v-model="username" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input type="password"
                   class="form-control"
                   name="password"
                   placeholder="密码"
                   v-model="password" />
          </div>
          <p class="text-danger">{{$store.state.loginMsg}}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-outline-success mr-3 mb-3"
                    type="submit"
                    @click="login">
              登录
              <i class="fas fa-sign-in-alt"></i>
            </button>
            <button class="btn btn-outline-warning mr-3 mb-3"
                    @click="forget">
              忘记密码
              <i class="fas fa-exclamation-circle"></i>
            </button>
            <button class="btn btn-outline-primary mr-3 mb-3"
                    @click="registe">
              注册
              <i class="fas fa-user-plus"></i>
            </button>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   v-model="remembered" />
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
import api from '@/service/api'

// 登录面板
export default {
  name: "index",
  data: function () {
    return {
      username: '',
      password: '',
      remembered: true
    }
  },
  async created () {
    // 初始化
    if (this.$store.state.logined && this.$store.type) {
      // 已经登录，直接跳转
      this.$router.push('/' + this.$store.state.typeText)
    }
    try {
      // 没登录，但cookie可能有效
      const id = await api.user.id()
      console.debug(`[Login] Success`)
      this.$store.commit('change_state', {
        logined: true,
        type: id.type,
        typeText: ['', 'student', 'judger', 'admin'][this.$store.state.type]
      })
      this.$router.push('/' + this.$store.state.typeText)
    } catch (e) {
      console.debug(e)
    }
  },
  methods: {
    login1 () {
      this.$axios({
        method: 'post',
        url: 'user/login',
        data: {
          u: this.username,
          p: this.password
        }
      })
    },
    async login () {
      try {
        await api.user.login({ u: this.username, p: this.password })
        console.debug(`[Login] Success!`)
        // 登录成功
        const id = await api.user.id()
        this.$store.commit('change_state', {
          logined: true,
          type: id.type,
          typeText: ['', 'student', 'judger', 'admin'][id.type]
        })
        this.$router.push('/' + this.$store.state.typeText)
      } catch (e) {
        // TODO:提示错误
        console.debug(e)
      }
    },
    async forget () {
    },
    async registe () {
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="container-fluid pl-0 pr-0 pt-5 d-flex justify-content-center align-items-center flex-wrap h-100" style="background-color: #87ccc8">
    <div class="row justify-content-between mr-0 ml-0 w-100" style="background-color: #00838f;position: absolute;top: 0">
      <div class="p-2 ml-3">
        <img src="../../assets/uestc.png" class="logo">
        <span class="align-middle">
          通用项目评审管理系统
        </span>
      </div>
    </div>
    <div class="card rounded-0 border-0 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4" style="background-color: #87ccc8">
      <div class="card-header border-0 rounded-0" style="background-color: #b6e1df">
        <h6 class="card-title mb-0">
          登陆
        </h6>
      </div>
      <div class="card-body" style="background-color: #b6e1df">
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
                   placeholder="手机号/用户名"
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
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-dark mb-3 w-100"
                    type="submit"
                    @click="login">
              登录
              <i class="fas fa-sign-in-alt"></i>
            </button>
            <!--
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
            -->
          </div>
          <div class="form-check d-flex justify-content-between">
            <div>
              <input class="form-check-input"
                     type="checkbox"
                     v-model="remembered" />
              <label class="form-check-label link" @click="remembered = !remembered">
                记住登录
              </label>
            </div>
            <div class="link" @click="forget">
              忘记密码
            </div>
            <div class="link" @click="registe">
              注册账号
            </div>
          </div>
        </form>
      </div>
    </div>
    <img class="m-4" src="../../assets/login.png">
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
      if(id.type === 1 && this.$store.state.proid === 0) {
        this.$router.push('/student/project')
      }
      else {
        this.$router.push('/' + this.$store.state.typeText)
      }
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
          p: this.password,
          method: 'password'
        }
      })
    },
    async login () {
      try {
        if (this.method === 'password') {
          await api.user.login({u: this.username, p: this.password})
        } else if (this.method === 'sms') {
          await api.user.one_time_login({u: this.username, token: this.password})
        } else {
          console.debug("Unknow error")
          return
        }
        console.debug(`[Login] Success!`)
        // 登录成功
        const id = await api.user.id()
        this.$store.commit('change_state', {
          logined: true,
          type: id.type,
          typeText: ['', 'student', 'judger', 'admin'][id.type]
        })
        if(id.type === 1) {
          this.$router.push('/student/project')
        }
        else {
          this.$router.push('/' + this.$store.state.typeText)
        }
      } catch (e) {
        // TODO:提示错误
        console.debug(e)
      }
    },
    async forget () {
      if (this.username.length === 11) {
        this.method = 'sms'
        console.debug("SMS login")
        try {
          await api.user.sms({u:this.username})
        } catch (e) {
          console.debug(e)
        }
      }
    },
    async registe () {
      if (this.username.length === 11) {
        this.method = 'sms'
        console.debug("SMS registe")
        try {
          await api.user.reg({u:this.username})
        } catch (e) {
          console.debug(e)
        }
      }
    }
  }
}
</script>

<style scoped>
  .link:hover {
    cursor: pointer;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
</style>

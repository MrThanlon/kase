<template>
    <div class="modal-body">
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">原密码</span>
                </div>
                <input type="password" class="form-control" v-model="op" required>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">新密码</span>
                </div>
                <input type="password" class="form-control" v-model="np" required>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">再次输入密码</span>
                </div>
                <input type="password" class="form-control" v-model="np2" required>
            </div>
            <button class="btn btn-outline-primary" @click="apply">提交</button>
        </form>
    </div>
</template>

<script>
    import api from '@/service/api'
    import store from '@/store'

    export default {
        name: "passwd",
        data: function () {
            return {
                op: '',
                np: '',
                np2: ''
            }
        },
        methods: {
            async apply() {
                let flag_success = true
                if (this.np !== this.np2) {
                    //TODO:提示失败
                    flag_success = false
                }
                await api.user.reset_password({
                    op: this.op,
                    p: this.np
                }).catch(e => {
                    console.debug(e)
                    //TODO: 提示错误
                    flag_success = false
                })
                if (flag_success) {
                    this.$emit('finished')
                    store.commit('change_state', {logined: false})
                    this.$router.push('/login')
                }
            }
        }
    }
</script>

<style scoped>

</style>

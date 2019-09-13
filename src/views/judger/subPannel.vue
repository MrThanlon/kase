<template>
    <div>
        <ul class="list-group list-group-flush" v-if="type==='nav'">
            <li class="list-group-item">
                <h6 class="card-title text-left">课题&nbsp;{{cid}}</h6>
                <button class="btn btn-outline-dark m-2" @click="$router.push('/judger/')">
                    课题列表
                    <i class="fas fa-list"></i>
                </button>
                <button class="btn btn-outline-dark m-2"
                        @click="downloadZIP" v-if="cid">
                    下载附件
                    <i class="fas fa-file-archive"></i>
                </button>
            </li>
            <li class="list-group-item">
                <h6 class="card-title text-left">评分表</h6>
                <button class="btn btn-outline-dark m-2" @click="uploadTable">
                    上传评分表
                    <i class="fas fa-file-upload"></i>
                </button>
                <button class="btn btn-outline-dark m-2" @click="downloadTable">
                    下载评分表
                    <i class="fas fa-file-download"></i>
                </button>
            </li>
            <li class="list-group-item">
                <h6 class="card-title text-left">事项</h6>
                <button class="btn btn-outline-dark m-2" @click="$router.push('/judger/notice')">
                    查看通知
                    <i class="fas fa-exclamation-circle"></i>
                </button>
            </li>
            <li class="list-group-item">
                <h6 class="card-title text-left">账户</h6>
                <button class="btn btn-outline-dark m-2" @click="logout">
                    登出
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </li>
        </ul>
        <judge v-if="type==='judge'"/>
    </div>
</template>

<script>
    import judge from './judge'
    import api from '@/service/api'
    import conf from '@/config'

    // 副面板
    export default {
        name: "subPannel",
        methods: {
            async logout() {
                document.cookie = ''
                this.$store.commit('change_state', {
                    logined: false,
                    type: 0
                })
                try {
                    await api.user.logout()
                } catch (e) {
                    console.debug(e)
                }
                this.$router.push('/login')
            },
            async downloadZIP() {
            },
            async downloadTable() {
                let a = document.createElement('a')
                a.href = `${conf.SERVER_PATH}/data/jug/download_table${conf.PHPDEBUG ? '?XDEBUG_SESSION_START=15380' : ''}`
                a.download = "评分表"
                a.click()
            },
            async uploadTable() {

            }
        },
        props: [
            'cid', 'type'
        ],
        components: {
            judge
        }
    }
</script>

<style scoped>

</style>

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
    // 副面板
    import judge from './judge'

    export default {
        name: "subPannel",
        methods: {
            async logout() {
            },
            async downloadZIP() {
            },
            async downloadTable() {
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

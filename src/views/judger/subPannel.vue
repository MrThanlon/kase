<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <h6 class="card-title text-left">课题</h6>
            <button class="btn btn-outline-dark m-2" @click="$router.push('/student/')">
                课题列表
                <i class="fas fa-list"></i>
            </button>
            <button class="btn btn-outline-dark m-2"
                    @click="$router.push('/judger/'+cid+'/article')" v-if="cid">
                查看文章
                <i class="fas fa-file-alt"></i>
            </button>
            <button class="btn btn-outline-dark m-2"
                    @click="$router.push('/judger/'+cid+'/file')" v-if="cid">
                查看附件
                <i class="fas fa-file-archive"></i>
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
</template>

<script>
    // 副面板
    export default {
        name: "subPannel",
        methods: {
            logout() {
            }
        },
        props: [
            'cid'
        ]
    }
</script>

<style scoped>

</style>

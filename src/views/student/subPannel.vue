<template>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <h6 class="card-title text-left">课题</h6>
            <button class="btn btn-outline-dark m-2" @click="$router.push('/student/')">
                课题列表
                <i class="fas fa-list"></i>
            </button>
            <button class="btn btn-outline-dark m-2" @click="$router.push('/student/new')">
                新建课题
                <i class="fas fa-plus"></i>
            </button>
            <button class="btn btn-outline-dark m-2"
                    @click="" v-if="cid && !subject.pdf">
                上传PDF
                <i class="fas fa-file-pdf"></i>
            </button>
            <button class="btn btn-outline-dark m-2"
                    @click="" v-if="cid && subject.zip">
                下载附件
                <i class="fas fa-file-archive"></i>
            </button>
            <button class="btn btn-outline-dark m-2"
                    @click="" v-if="cid && !subject.zip">
                上传附件
                <i class="fas fa-file-archive"></i>
            </button>
        </li>
        <li class="list-group-item">
            <h6 class="card-title text-left">事项</h6>
            <button class="btn btn-outline-dark m-2" @click="$router.push('/student/notice')">
                查看通知
                <i class="fas fa-exclamation-circle"></i>
            </button>
        </li>
        <li class="list-group-item">
            <h6 class="card-title text-left">账户</h6>
            <button class="btn btn-outline-dark m-2" @click="$router.push('/student/password')">
                修改密码
                <i class="fas fa-key"></i>
            </button>
            <button class="btn btn-outline-dark m-2" @click="logout">
                登出
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </li>
    </ul>
</template>

<script>
    import api from '@/service/api'

    // 副面板
    export default {
        name: "subPannel",
        methods: {
            async logout() {
            },
            async downloadZIP() {
            },
            async uploadZIP() {
            }
        },
        props: [
            'cid'
        ],
        computed: {
            async subject() {
                if (this.cid) {
                    try {
                        return await api.data.app.subject({cid: this.cid})
                    } catch (e) {
                        // TODO:提示错误
                        console.debug(e)
                        return {}
                    }
                } else return {}
            }
        }
    }
</script>

<style scoped>

</style>

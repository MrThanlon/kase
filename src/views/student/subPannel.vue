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
            <button class="btn btn-outline-dark m-2" onclick="document.getElementById('pdf').click()"
                    v-if="cid && !subject.pdf">
                上传PDF
                <i class="fas fa-file-pdf"></i>
            </button>
            <input type="file" @change="uploadPDF" id="pdf" style="display: none"/>
            <button class="btn btn-outline-dark m-2"
                    onclick="document.getElementById('download').click()" v-if="cid && subject.zip">
                下载附件
                <i class="fas fa-file-archive"></i>
            </button>
            <a :href="filePath" download="附件" style="display: none" id="download"></a>
            <button class="btn btn-outline-dark m-2" onclick="document.getElementById('zip').click()"
                    v-if="cid && !subject.zip">
                上传附件
                <i class="fas fa-file-archive"></i>
            </button>
            <input type="file" @change="uploadZIP" id="zip" style="display: none"/>
        </li>
        <li class="list-group-item">
            <h6 class="card-title text-left">事项</h6>
            <button class="btn btn-outline-dark m-2" onclick="document.getElementById('downloadNotice').click()">
                下载申报材料
                <i class="fas fa-exclamation-circle"></i>
            </button>
            <a :href="noticePath" download="材料" style="display: none" id="downloadNotice"></a>
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
    import conf from '@/config'

    // 副面板
    export default {
        name: "subPannel",
        data: function () {
            return {
                subject: {}
            }
        },
        async created() {
            if (this.cid) {
                try {
                    this.subject = (await api.data.app.subject({cid: this.cid})).data
                    console.debug(this.subject)
                } catch (e) {
                    // TODO:提示错误
                    console.debug(e)
                }
            }
        },
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
            async uploadPDF() {
                let data = new FormData()
                data.append('cid', this.cid)
                data.append('pdf', document.getElementById('pdf').files[0])
                try {
                    await api.data.app.upload_pdf(data)
                } catch (e) {
                    console.debug(e)
                }
            },
            async downloadZIP() {

            },
            async uploadZIP() {
                let data = new FormData()
                data.append('cid', this.cid)
                data.append('zip', document.getElementById('zip').files[0])
                try {
                    await api.data.app.upload_zip(data)
                } catch (e) {
                    console.debug(e)
                }
            },
            async downloadNotice() {

            }
        },
        props: [
            'cid'
        ],
        computed: {
            filePath() {
                return `${conf.SERVER_PATH}/data/app/download_zip${conf.PHPDEBUG ? '?XDEBUG_SESSION_START=15380' : ''}`
            },
            noticePath() {
                return `${conf.SERVER_PATH}/data/app/notice${conf.PHPDEBUG ? '?XDEBUG_SESSION_START=15380' : ''}`
            }
        },
        watch: {
            cid: async function () {
                if (this.cid) {
                    try {
                        this.subject = (await api.data.app.subject({cid: this.cid})).data
                        console.debug(this.subject)
                    } catch (e) {
                        // TODO:提示错误
                        console.debug(e)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

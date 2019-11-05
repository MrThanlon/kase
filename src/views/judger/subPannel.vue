<template>
    <div>
        <ul class="list-group list-group-flush" v-if="type==='nav'">
            <li class="list-group-item">
                <h6 class="card-title text-left">课题</h6>
                <button class="btn btn-outline-dark m-2"
                        @click="$router.push('/judger/')"
                        :disabled="$route.path==='/judger/'">
                    课题列表
                    <i class="fas fa-list"></i>
                </button>
                <!--FIXME: 判断是否上传附件 -->
                <button class="btn btn-outline-dark m-2"
                        onclick="document.getElementById('download').click()" v-if="fileAvailable">
                    下载附件
                    <i class="fas fa-file-archive"></i>
                </button>
                <a :href="filePath" download="" style="display: none" id="download"></a>
            </li>
            <li class="list-group-item">
                <h6 class="card-title text-left">上传</h6>
                <button class="btn btn-outline-dark m-2" onclick="document.getElementById('utable').click()">
                    上传评分表
                    <i class="fas fa-file-upload"></i>
                </button>
                <input type="file" @change="uploadTable" id="utable" style="display: none"/>
            </li>
            <li class="list-group-item">
                <h6 class="card-title text-left">下载</h6>
                <button class="btn btn-outline-dark m-2" onclick="document.getElementById('notice').click()">
                    下载评审材料
                    <i class="fas fa-exclamation-circle"></i>
                </button>
                <a :href="noticePath" download="" style="display: none" id="notice"></a>
                <button class="btn btn-outline-dark m-2" onclick="document.getElementById('table').click()">
                    下载评分表
                    <i class="fas fa-file-download"></i>
                </button>
                <a :href="tablePath" download="" style="display: none" id="table"></a>
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
        data: function () {
            return {
                subjectList: []
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
            async uploadTable() {
                let data = new FormData()
                data.append('file', document.getElementById('utable').files[0])
                try {
                    await api.data.app.upload_table(data)
                } catch (e) {
                    console.debug(e)
                }
            }
        },
        props: [
            'cid', 'type'
        ],
        async created() {
            try {
                this.subjectList = this.$store.state.list.reduce((pre, cur) => {
                    pre[cur.cid] = cur
                    return pre
                }, [])
            } catch (e) {
                console.debug(e)
            }
        },
        computed: {
            filePath() {
                return `${conf.SERVER_PATH}/data/jug/download_zip?cid=${this.cid}`
            },
            noticePath() {
                return `${conf.SERVER_PATH}/data/jug/notice`
            },
            tablePath() {
                return `${conf.SERVER_PATH}/data/jug/download_table`
            },
            fileAvailable() {
                return this.cid && this.subjectList[this.cid]
            }
        },
        components: {
            judge
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <div v-if="zip">
            <a :href="src_download">
            <button class="btn btn-outline-dark" @click="downloads">
                下载附件
                <i class="fas fa-file-download"></i>
            </button>
            </a>
        </div>
        <span v-if="!zip">
            <button class="btn btn-outline-dark" @click="uploads">
            上传附件
            <i class="fas fa-file-upload"></i>
            </button>
            <br/>
            <i class="fas fa-exclamation-triangle"></i>
            仅支持ZIP压缩格式的文件
        </span>
        <input type="file" style="display: none" id="file" @change="upload_f">
    </div>
</template>

<script>
    import api from '@/service/api'
    import conf from '@/config'

    export default {
        name: "file",
        data: function () {
            return {
                src_download: conf.SERVER_PATH + '/data/app/download_zip?cid=' + this.$route.params.cid
            }
        },
        props: {
            zip: Boolean
        },
        async created() {
            if (!this.$route.params.cid) {
                // 没有cid?,告辞
                this.$router.push('/pannel/list')
            }
            //TODO: 预览文件功能

        },
        methods: {
            async uploads() {
                document.getElementById('file').click()
            },
            async upload_f() {
                let flag_success = true
                let data = new FormData()
                data.append('cid', this.$route.params.cid)
                data.append('zip', document.getElementById('file').files[0])

                await api.data.app.upload_zip(data).catch(e => {
                    console.debug(e)
                    flag_success = false
                    //TODO: 提示上传失败
                })
                if (flag_success)
                    this.$router.push('/pannel/list')
            },
            async downloads() {
                let a = document.createElement('a')
                a.href = this.src_download
                a.click()
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div :style="{height:pdf?'73vh':'auto'}">
        <iframe :src="pdf_src" height="100%" width="100%" v-if="pdf">
        </iframe>
        <button v-if="!pdf" class="btn btn-outline-dark" @click="uploads">
            上传PDF
            <i class="fas fa-file-pdf"></i>
        </button>
        <input type="file" style="display: none" id="file" @change="upload_f">
    </div>
</template>

<script>
    import api from '@/service/api'
    import conf from '../../../config.js'
    //import conf from '@/config'

    export default {
        name: "article",
        data: function () {
            return {
                pdf_src: conf.PDFJS_PATH
            }
        },
        props: {
            pdf: Boolean
        },
        async created() {
            if (!this.$route.params.cid) {
                // 没有cid?,告辞
                this.$router.push('/pannel/list')
                return
            }
            this.pdf_src = this.pdf_src
                + '?file='
                + encodeURIComponent(conf.SERVER_PATH + '/data/app/download_pdf?cid=' + this.$route.params.cid)
        },
        methods: {
            async upload_f() {
                let flag_success = true
                let data = new FormData()
                data.append('cid', this.$route.params.cid)
                data.append('pdf', document.getElementById('file').files[0])

                await api.data.app.upload_pdf(data).catch(e => {
                    console.debug(e)
                    flag_success = false
                    //TODO: 提示上传失败
                })
                if (flag_success)
                    this.$router.push('/pannel/list')
            },
            uploads() {
                document.getElementById('file').click()
            }
        }
    }
</script>

<style scoped>

</style>

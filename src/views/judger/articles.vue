<template>
    <div>
        <!-- FIXME:检测文章是否上传 -->
        <iframe :src="src"
                style="width: 100%; height: 500px" name="ifd"
                onload="this.height=ifd.document.body.scrollHeight">
        </iframe>
    </div>
</template>

<script>
    import api from '@/service/api'
    import conf from '@/config'

    // 展示文章
    export default {
        name: "articles",
        props: [
            'cid'
        ],
        computed: {
            src() {
                return conf.PDFJS_PATH +
                    window.encodeURIComponent(conf.SERVER_PATH + "/data/jug/download_pdf?cid=" + this.cid)
            }
        }
    }
</script>

<style scoped>

</style>

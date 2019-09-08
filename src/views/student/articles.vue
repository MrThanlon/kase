<template>
    <!-- TODO:使用PDF.js在web上渲染PDF文件 -->
    <div>
        <span v-if="subject.pdf">文章：{{cid}}</span>
        <span v-else>文章还未上传</span>
    </div>
</template>

<script>
    import api from '@/service/api'

    // 展示文章
    export default {
        name: "articles",
        props: [
            'cid'
        ],
        computed:{
            async subject() {
                try {
                    return await api.data.app.subject({cid: this.cid})
                } catch (e) {
                    // TODO: 提示错误
                    console.debug(e)
                    return {}
                }
            }
        },
        async created() {

        }
    }
</script>

<style scoped>

</style>

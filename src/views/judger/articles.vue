<template>
    <!-- TODO:使用PDF.js在web上渲染PDF文件 -->
    <div>
        文章：{{cid}}
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
        async created() {

        }
    }
</script>

<style scoped>

</style>

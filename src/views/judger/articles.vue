<template>
    <div>
        文章：{{cid}}
    </div>
</template>

<script>
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

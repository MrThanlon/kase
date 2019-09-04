<template>
    <div>
        附件：{{cid}}
    </div>
</template>

<script>
    // 展示附件
    export default {
        name: "file",
        props: [
            'cid'
        ],
        async created() {

        }
    }
</script>

<style scoped>

</style>

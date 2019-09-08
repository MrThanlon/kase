<template>
    <div v-html="message">
        {{message}}
    </div>
</template>

<script>
    // 通知
    export default {
        name: "notice",
        data: function () {
            return {
                message: '<span class="text-danger">This is red</span>'
            }
        },
        async created() {
            try{
                this.message = await api.data.app.notice()
            } catch (e) {
                // TODO: 错误提示
                console.debug(e)
            }
        }
    }
</script>

<style scoped>

</style>

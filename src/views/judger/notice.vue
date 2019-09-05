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

        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="modal-body">
        {{notice}}
    </div>
</template>

<script>
    import api from '@/service/api'

    export default {
        name: "notice",
        data: function () {
            return {
                notice: ''
            }
        },
        async created() {
            this.notice = (await api.data.app.notice()).content
        }
    }
</script>

<style scoped>

</style>

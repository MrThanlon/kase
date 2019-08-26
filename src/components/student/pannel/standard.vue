<template>
    <div class="modal-body">
        {{standard}}
    </div>
</template>

<script>
    import api from '@/service/api'

    export default {
        name: "standard",
        data: function () {
            return {
                standard: ''
            }
        },
        async created() {
            this.standard = (await api.data.app.standard()).content
        }
    }
</script>

<style scoped>

</style>

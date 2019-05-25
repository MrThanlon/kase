<template>
    <div class="row pl-4 pr-4">
        <left :page="page" class="mb-2"></left>
        <rightstu v-if="type === 1"></rightstu>
    </div>
</template>

<script>
    import api from '@/service/api'
    import store from '@/store'

    import left from '@/components/pannel/left.vue'
    import rightstu from '@/components/pannel/right_stu'

    export default {
        name: 'pannel',
        data: function () {
            return {
                type: 0,
                page: 'list'
            }
        },
        created: function () {
            if (!store.state.common.logined || store.state.common.type === 0) {
                this.$router.push('/login')
            }
            this.type = store.state.common.type
        },
        methods: {},
        components: {
            left,
            rightstu
        }
    }
</script>


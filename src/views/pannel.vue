<template>
    <div class="row col-12 mr-0 ml-0 pl-1 pr-1">
        <left :page="page" class="mb-2"></left>
        <rightstu v-if="type === 1" class="mb-5"></rightstu>
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
        async created() {
            console.debug('[Pannel] trigd')
            await store.dispatch('init')
            if (store.state.logined) {
                this.type = store.state.type
            } else
                this.$router.push('/login')
        },
        methods: {},
        components: {
            left,
            rightstu
        }
    }
</script>


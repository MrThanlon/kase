<template>
    <div class="row col-12 mr-0 ml-0 pl-0 pr-0">
        <left class="mb-2 p-1" v-if="loaded"></left>
        <rightstu v-if="type === 1" class="mb-5 p-1"></rightstu>
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
                page: 'list',
                loaded: false
            }
        },
        async created() {
            console.debug('[Pannel] trigd')
            await store.dispatch('init')
            if (store.state.logined) {
                this.type = store.state.type
                this.loaded = true
                if (this.$route.params.page) {
                    this.page = this.$route.params.page
                }
                if(this.$route.params.cid) {

                }
            } else {
                store.commit('store_url')
                this.$router.push('/login')
            }
        },
        methods: {},
        components: {
            left,
            rightstu
        }
    }
</script>


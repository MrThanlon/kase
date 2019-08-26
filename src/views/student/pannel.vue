<template>
    <div class="row col-12 mr-0 ml-0 pl-0 pr-0">
        <left class="mb-2 p-1" v-if="loaded"></left>
        <right class="mb-5 p-1"></right>
    </div>
</template>

<script>
    import api from '@/service/api'
    import store from '@/store/student'

    import left from '@/components/student/pannel/left.vue'
    import right from '@/components/student/pannel/right'
    import Content from "@/views/content"

    export default {
        name: 'pannel',
        data: function () {
            return {
                page: 'list',
                loaded: false
            }
        },
        async created() {
            await store.dispatch('init')
            if (store.state.logined) {
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
            Content,
            left,
            right
        }
    }
</script>


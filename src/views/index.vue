<template>
</template>
<script>
    import api from '@/service/api'
    import store from '@/store'

    //导航
    export default {
        name: "index",
        async created() {
            store.dispatch('init')
            if (store.state.logined)
                this.$router.push('/pannel')
            else {
                store.commit('store_url')
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>

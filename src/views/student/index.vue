<template>
    <div class="container pt-3 pt-md-5">
        <div class="row">
            <div class="col-12 col-md-8 mb-3 mb-md-5">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">{{$route.meta.title}}</h5>
                    </div>
                    <div class="card-body">
                        <!--主面板-->
                        <router-view/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">导航</h5>
                    </div>
                    <div class="card-body">
                        <!--副面板-->
                        <router-view name="sub"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 首页
    export default {
        name: "index",
        created() {
            console.debug(this.$route)
            console.debug(this.$router)
        }
    }
</script>

<style scoped>

</style>

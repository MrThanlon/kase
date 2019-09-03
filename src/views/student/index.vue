<template>
    <div class="container pt-3 pt-md-5">
        <div class="row">
            <div class="col-12 col-md-8 mb-3 mb-md-5">
                <div class="card shadow">
                    <div class="card-header">
                        <h3 class="card-title">主面板标题</h3>
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
                        <h3 class="card-title">副面板标题</h3>
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
        name: "index"
    }
</script>

<style scoped>

</style>

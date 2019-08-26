<template>
<div class="col-12 col-md-9 p-1 mb-3">
    <div class="card shadow">
        <div class="card-header text-left">
            标题
        </div>
        <div class="card-body">
            <router-view/>
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

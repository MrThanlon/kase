<template>
    <form onsubmit="return false" autocomplete="off">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">原密码</span>
            </div>
            <input type="password" class="form-control">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">新密码</span>
            </div>
            <input type="password" class="form-control">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">再次输入</span>
            </div>
            <input type="password" class="form-control">
        </div>
        <div class="row justify-content-center">
            <button type="submit" class="btn btn-outline-dark" @click="submit">
                提交
                <i class="fas fa-check"></i>
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "password",
        methods: {
            async submit() {
                console.debug("1")
            }
        }
    }
</script>

<style scoped>

</style>

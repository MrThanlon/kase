<template>
    <form onsubmit="return false" autocomplete="off" class="m-3">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    课题名称&nbsp;
                    <i class="fas fa-heading"></i>
                </span>
            </div>
            <input type="text" class="form-control">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    隶属项目&nbsp;
                    <i class="fas fa-project-diagram"></i>
                </span>
            </div>
            <select class="custom-select">
                <option value="1">项目一</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    申请人&nbsp;
                    <i class="fas fa-user"></i>
                </span>
            </div>
            <input type="text" class="form-control">
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
    // 新建课题
    export default {
        name: "newSubject",
        methods: {
            async submit() {

            }
        }
    }
</script>

<style scoped>

</style>

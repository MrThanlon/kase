<template>
    <div class="container-fluid col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title mb-0">
                    登陆
                </h3>
            </div>
            <div class="card-body shadow">
                <form onsubmit="return false">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" name="username" placeholder="用户名">
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fas fa-key"></i>
                            </span>
                        </div>
                        <input type="password" class="form-control" name="password" placeholder="密码">
                    </div>
                    <p class="text-danger">请登录</p>
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-outline-success mr-3 mb-3" type="submit">
                            登录
                            <i class="fas fa-sign-in-alt"></i>
                        </button>
                        <button class="btn btn-outline-warning mr-3 mb-3">
                            忘记密码
                            <i class="fas fa-exclamation-circle"></i>
                        </button>
                        <button class="btn btn-outline-primary mr-3 mb-3">
                            注册
                            <i class="fas fa-user-plus"></i>
                        </button>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox">
                        <label class="form-check-label">
                            记住账号
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    // 登录面板
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>

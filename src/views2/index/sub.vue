<template>
    <div class="col-12 col-md-3 p-1 mb-3">
        <div class="card shadow">
            <div class="card-header text-left">
                功能
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h6 class="card-title text-left">课题</h6>
                        <button class="btn btn-outline-dark m-2" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            新建课题
                            <i class="fas fa-plus"></i>
                        </button>
                    </li>

                    <li class="list-group-item">
                        <h6 class="card-title text-left">事项</h6>
                        <button class="btn btn-outline-dark m-2" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            查看通知
                            <i class="fas fa-exclamation-circle"></i>
                        </button>
                        <button class="btn btn-outline-dark m-2" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            查看标准
                            <i class="fas fa-envelope"></i>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <h6 class="card-title text-left">账户</h6>
                        <button class="btn btn-outline-dark m-2" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            重设密码
                            <i class="fas fa-key"></i>
                        </button>
                        <button class="btn btn-outline-dark m-2">
                            登出
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Modal
        TODO: 对话框
        -->
        <div class="modal fade" id="ModalNewPaper" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">标题</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="btn-closed">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        这里是内容
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-sub"
    }
</script>

<style scoped>

</style>

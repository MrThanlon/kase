<template>
    <!--Student function pannel-->
    <div class="container col-12 col-md-4 ml-0 mr-0 pr-0 pl-0">
        <div class="card shadow">
            <div class="card-header text-left">
                功能
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h6 class="card-title text-left">课题</h6>
                        <button class="btn btn-outline-dark m-2" @click="new_paper" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            新建课题
                            <i class="fas fa-plus"></i>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <h6 class="card-title text-left">上传</h6>
                        <button class="btn btn-outline-dark m-2" @click="upload_paper" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            上传材料
                            <i class="fas fa-file-upload"></i>
                        </button>
                        <button class="btn btn-outline-dark m-2" @click="upload_file" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            上传附件
                            <i class="fas fa-file-archive"></i>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <h6 class="card-title text-left">事项</h6>
                        <button class="btn btn-outline-dark m-2" @click="view_notice" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            查看通知
                            <i class="fas fa-exclamation-circle"></i>
                        </button>
                        <button class="btn btn-outline-dark m-2" @click="view_standard" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            查看标准
                            <i class="fas fa-envelope"></i>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <h6 class="card-title text-left">账户</h6>
                        <button class="btn btn-outline-dark m-2" @click="reset_password" data-toggle="modal"
                                data-target="#ModalNewPaper">
                            重设密码
                            <i class="fas fa-key"></i>
                        </button>
                        <button class="btn btn-outline-dark m-2" @click="logout">
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
                        <h5 class="modal-title">{{modal_title[modal_type]}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <new-paper v-if="modal_type === 1"></new-paper>
                    <notice v-if="modal_type === 4"></notice>
                    <standard v-if="modal_type === 5"></standard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'

    import new_paper from './new_paper'
    import notice from './notice'
    import standard from './standard'

    export default {
        name: "right_stu",
        data: function () {
            return {
                /**
                 * Object，包含两个属性
                 * - name.项目名称
                 * - pid.项目id
                 */
                projectlist: null,
                modal_title: ['', '新建课题', '上传材料', '上传文件', '通知', '标准', '重设密码'],
                /**
                 * 0.无
                 * 1.新建课题
                 * 2.上传材料
                 * 3.上传文件
                 * 4.通知
                 * 5.标准
                 * 6.重设密码
                 */
                modal_type: 0
            }
        },
        methods: {
            //TODO:按钮动作
            //新建课题
            new_paper: function () {
                this.modal_type = 1
                //拉取项目列表

            },
            //上传材料
            upload_paper: function () {
                this.modal_type = 2
            },
            //上传文件
            upload_file: function () {
                this.modal_type = 3
            },
            //查看通知
            view_notice: function () {
                this.modal_type = 4
            },
            //查看标准
            view_standard: function () {
                this.modal_type = 5
            },
            async logout() {
                const res = await api.user.logout()
                this.$router.push('/login')
            },
            async reset_password() {
                this.modal_type = 6
            }
        },
        components: {
            'new-paper': new_paper,
            notice,
            standard
        }
    }
</script>

<style scoped>

</style>

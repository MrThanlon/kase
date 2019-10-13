<template>
    <form onsubmit="return false" autocomplete="off" class="m-3">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    课题名称&nbsp;
                    <i class="fas fa-heading"></i>
                </span>
            </div>
            <input type="text" class="form-control" v-model="subjectName"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    隶属项目&nbsp;
                    <i class="fas fa-project-diagram"></i>
                </span>
            </div>
            <select class="custom-select" v-model="selectedPID">
                <option v-for="item in projectList" :value="item.pid">{{item.name}}</option>
            </select>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    申请人&nbsp;
                    <i class="fas fa-user"></i>
                </span>
            </div>
            <input type="text" class="form-control" v-model="applicant"/>
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
    import api from '@/service/api'

    export default {
        name: "newSubject",
        data: function () {
            return {
                projectList: [
                    {
                        "pid": 190,
                        "name": "测试项目"
                    },
                    {
                        "pid": 191,
                        "name": "张义飞"
                    }
                ],
                subjectName: '',
                selectedPID: null,
                applicant: ''
            }
        },
        computed: {},
        async created() {
            const t = (new Date().getTime()) / 1000
            this.projectList = (await api.data.app.list_prj()).data.filter(v => v.start < t && v.end > t)
        },
        methods: {
            async submit() {
                console.debug("PID:" + this.selectedPID)
                try {
                    // TODO: 成功提示
                    await api.data.app.new_app({
                        name: this.subjectName,
                        pid: parseInt(this.selectedPID),
                        applicant: this.applicant
                    })
                    this.$router.push('/student')
                } catch (e) {
                    // TODO: 出错提示
                    console.debug(e)
                }
            }
        }
    }
</script>

<style scoped>

</style>

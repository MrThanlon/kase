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
                    申请人&nbsp;
                    <i class="fas fa-user"></i>
                </span>
            </div>
            <input type="text" class="form-control" v-model="applicant"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    PDF文件&nbsp;
                    <i class="fas fa-file-pdf"></i>
                </span>
            </div>
            <input type="file" class="form-control" id="pdf"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">
                    附件&nbsp;
                    <i class="fas fa-file-archive"></i>
                </span>
            </div>
            <input type="file" class="form-control" id="zip"/>
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
                subjectName: '',
                selectedPID: null,
                applicant: ''
            }
        },
        computed: {},
        async created() {

        },
        methods: {
            async submit() {
                console.debug("PID:" + this.selectedPID)
                try {
                    // TODO: 成功提示
                    // 创建
                    const c = await api.data.app.new_app({
                        name: this.subjectName,
                        pid: this.$store.state.proid,
                        applicant: this.applicant
                    })
                    console.debug(c)
                    // 上传pdf
                    let data = new FormData()
                    if(document.getElementById('pdf').files[0]) {
                        data.append('cid', c.cid)
                        data.append('pdf', document.getElementById('pdf').files[0])
                        await api.data.app.upload_pdf(data)
                    }

                    //上传zip
                    if(document.getElementById('zip').files[0]) {
                        data = new FormData()
                        data.append('cid', c.cid)
                        data.append('zip', document.getElementById('zip').files[0])
                        await api.data.app.upload_zip(data)
                    }

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

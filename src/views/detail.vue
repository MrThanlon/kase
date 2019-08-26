<template>
    <div class="container col-12 ml-0 mr-0 pr-0 pl-0 col-md-9 pr-md-1">
        <div class="card shadow">
            <div class="card-header text-left p-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">
                            <router-link to="/">
                                列表
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            课题&nbsp;{{cid}}
                        </li>
                    </ol>
                </nav>
                <span class="text-danger text-center m-2" v-if="content.status===2">课题被拒绝，请重新申请。</span>
            </div>
            <div class="card-body">
                <button class="btn btn-outline-dark m-1" v-if="content.pdf" @click="$router.push('paper')">
                    查看文档
                </button>
                <button class="btn btn-outline-dark m-1" v-if="!content.pdf&&content.status===0" @click="uploadPDF">
                    上传文档
                </button>
                <button class="btn btn-outline-dark m-1" v-if="content.zip" @click="$router.push('file')">
                    查看附件
                </button>
                <button class="btn btn-outline-dark m-1" v-if="!content.zip&&content.status===0" @click="uploadZIP">
                    上传附件
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import right from '@/views/right'

    export default {
        name: "detail",
        data: function () {
            return {
                pdf: false,
                zip: false
            }
        },
        props: {
            cid: {
                type: String,
                default: 0
            }
        },
        computed: {
            content: function () {
                const cid = parseInt(this.cid)
                return this.$store.state.contentList.reduce((pre, cur) => {
                    if (cur.cid === cid)
                        return cur
                    else
                        return pre
                }, {})
            }
        },
        async created() {

        },
        beforeRouteUpdate(to, from, next) {
            const cid = to.params.cid
            if (this.$store.state.contentList.reduce((pre, cur) => {
                if (cur.cid.toString() === cid)
                    return cur
                else
                    return pre
            }, null) === null) {
                next('/test')
            }
            next()
        },
        methods: {
            async uploadPDF() {
                let input = document.createElement('input')
                input.type = 'file'
                input.style.display = 'none'
                document.body.appendChild(input)
                input.click()
                input.onchange = async () => {
                    let data = new FormData()
                    data.append('cid', this.cid)
                    data.append('pdf', input.files[0])
                    try {
                        await api.data.app.upload_pdf(data)
                        //刷新
                        window.location.reload()
                    }
                    catch (e) {
                        //TODO:提示上传失败
                        console.log(e)
                    }
                }
            },
            async uploadZIP() {
                let input = document.createElement('input')
                input.type = 'file'
                input.style.display = 'none'
                document.body.appendChild(input)
                input.click()
                input.onchange = async () => {
                    let data = new FormData()
                    data.append('cid', this.cid)
                    data.append('zip', input.files[0])
                    try {
                        await api.data.app.upload_zip(data)
                        window.location.reload()
                    }
                    catch (e) {
                        console.log(e)
                    }
                }
            }
        },
        components: {
            right
        }
    }
</script>

<style scoped>
    ol {
        background-color: #f7f7f7;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
    }

</style>

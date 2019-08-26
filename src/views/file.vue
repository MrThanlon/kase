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
                            <router-link :to="`/subject/${cid}/detail`">
                                课题&nbsp;{{cid}}
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">
                            附件
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="card-body">
                <button class="btn btn-outline-dark m-1" @click="downloadZIP">
                    下载
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import right from '@/views/right'
    import jszip from 'jszip'
    import {request} from '@/utils/request'
    import conf from '@/config'

    export default {
        name: "file",
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
        computed: {},
        methods: {
            downloadZIP() {
                let a = document.createElement('a')
                a.href = `${conf.SERVER_PATH}/data/app/download_zip?cid=${this.cid}`
                a.style.display = 'none'
                document.body.appendChild(a)
                a.click()
            }
        },
        async created() {

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

</style>

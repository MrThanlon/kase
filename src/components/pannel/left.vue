<template>
    <!--Left side pannel-->
    <div class="container col-12 col-md-8 ml-0 mr-0 pr-0 pl-0">
        <div class="card shadow">
            <div class="card-header text-left">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-outline-secondary" :class="{active:(page === 'list')}" @click="show_list">
                        <input type="radio" autocomplete="off">列表
                    </label>
                    <label class="btn btn-outline-secondary" :class="{active:(page === 'article')}"
                           @click="show_article">
                        <input type="radio" autocomplete="off">文章
                    </label>
                    <label class="btn btn-outline-secondary" :class="{active:(page === 'file')}" @click="show_file">
                        <input type="radio" autocomplete="off">附件
                    </label>
                </div>
            </div>
            <div class="card-body" v-show="page === 'list'">
                <table class="table table-hover table-sm">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">课题名称</th>
                        <th scope="col">项目名称</th>
                        <th scope="col">申请人</th>
                        <th scope="col">当前状态</th>
                        <th scope="col">申请日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in list" @click="list_detail(item.cid)">
                        <th scope="row">{{item.cid}}</th>
                        <td>{{item.name}}</td>
                        <td>{{prj_list[item.pid]}}</td>
                        <td>{{item.applicant}}</td>
                        <td>
                            <span class="badge badge-pill"
                                  :class="[item.status===0?'badge-primary':item.status===1?'badge-success':'badge-danger']">
                                {{stat_text[item.status]}}
                            </span>
                        </td>
                        <td>{{item.time}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <!--FIXME:iframe的高度需要自适应 -->
            <div class="card-body p-0" style="height: 85vh" v-show="page === 'article'">
                <iframe :src="pdf_src" height="100%" width="100%">
                </iframe>
            </div>
            <div class="card-bodt" v-show="page === 'file'">
                这里是附件
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import conf from '@/config'

    export default {
        name: 'left',
        data: function () {
            return {
                list: [],
                stat_text: ['Pending', 'Accepted', 'Rejected'],
                class_color: '',
                prj_list: [],
                pdf_src: conf.PDFJS_PATH
            }
        },
        async created() {
            if (this.page === undefined)
                this.page = 'list'
            const res = await api.data.app.list()
            if (res.status !== 0) {
                //TODO: 提示系统错误
                console.debug(`[List] Failed to get list, ${res.msg}`)
            }
            this.list = res.data

            //FIXME:用reduce可以更简洁
            const res2 = (await api.data.app.list_prj()).data
            let ans = []
            res2.map(v => {
                ans[v.pid] = v.name
            })
            //console.debug(ans)
            this.prj_list = ans
        },
        methods: {
            show_list: function () {
                this.page = 'list'
            },
            show_article: function () {
                this.page = 'article'
            },
            show_file: function () {
                this.page = 'file'
            },
            list_detail: function (cid) {
                console.debug(cid)
            }
        },
        props: {
            page: String
        }
    }
</script>


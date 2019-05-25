<template>
    <!--Left side pannel-->
    <div class="container col-12 col-md-8">
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
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="item in list">
                        {{item.name}}
                        <span class="badge"
                              :class="[item.status===0?'badge-primary':item.status===1?'badge-success':'badge-danger']">
                            {{stat_text[item.status]}}
                        </span>
                    </li>
                </ul>
            </div>
            <!--FIXME:iframe的高度需要自适应 -->
            <div class="card-body p-0" style="height: 85vh" v-show="page === 'article'">
                <iframe src="https://mozilla.github.io/pdf.js/web/viewer.html" height="100%" width="100%">
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

    export default {
        name: 'left',
        data: function () {
            return {
                list: [],
                stat_text: ['Pending', 'Pass', 'Reject',''],
                class_color:''
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
        },
        methods: {
            show_list: function () {
                console.log(1)
                this.page = 'list'
            },
            show_article: function () {
                console.log(2)
                this.page = 'article'
            },
            show_file: function () {
                console.log(3)
                this.page = 'file'
            }
        },
        props: {
            page: String
        }
    }
</script>


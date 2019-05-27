<template>
    <table class="table table-hover table-sm mb-0">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">课题名称</th>
            <th scope="col">项目名称</th>
            <th scope="col">申请人</th>
            <th scope="col">当前状态</th>
            <th scope="col">申请日期</th>
            <th scope="col">文档</th>
            <th scope="col">附件</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list" @click="jump(item.cid)">
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
            <td>
                <i class="fas" :class="[item.pdf?'fa-check text-success':'fa-minus text-danger']"></i>
            </td>
            <td>
                <i class="fas" :class="[item.zip?'fa-check text-success':'fa-minus text-danger']"></i>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import store from '@/store'
    import api from '@/service/api'

    export default {
        name: "list",
        data: function () {
            return {
                list: [],
                stat_text: ['Pending', 'Accepted', 'Rejected'],
                prj_list: []
            }
        },
        async created() {
            this.list = (await api.data.app.list()).data

            const res2 = (await api.data.app.list_prj()).data
            let ans = []
            res2.map(v => {
                ans[v.pid] = v.name
            })
            //console.debug(ans)
            this.prj_list = ans
        },
        methods: {
            async jump(cid) {
                const {pdf, zip, title} = this.list.reduce((pre, cur) => {
                    return cur.cid === cid ? {pdf: cur.pdf, zip: cur.zip, title: cur.name} : pre
                }, {pdf: false, zip: false, title: ''})
                this.$emit('list-click', {cid, pdf, zip, title})
            }
        }
    }
</script>

<style scoped>

</style>

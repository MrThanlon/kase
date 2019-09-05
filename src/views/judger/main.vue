<template>
    <table class="table table-hover table-sm mb-0">
        <thead>
        <tr>
            <th scope="col" v-for="item in formHeaders">
                {{item}}
            </th>
        </tr>
        <tr>
            <th scope="col" v-for="(item,idx) in formHeaders">
                <input class="form-control" :aria-label="item"
                       v-model="filterKey[idx]" :placeholder="placeholders[idx]">
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in listShow" @click="$router.push('/judger/'+item.cid)">
            <td>{{item.cid}}</td>
            <td>{{item.name}}</td>
            <td>{{item.applicant}}</td>
            <td>{{item.time}}</td>
            <td>
                <i class="fas" :class="[item.zip?'fa-check text-success':'fa-minus text-danger']"></i>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "list",
        data: function () {
            return {
                /**
                 * 状态名称
                 */
                statText: ['Pending', 'Accepted', 'Rejected'],
                /**
                 * 标题列表
                 */
                formHeaders: ['ID', '课题名称', '申请人', '申请日期', '附件'],
                /**
                 * 过滤关键词，来自input
                 */
                filterKey: [],
                /**
                 * input的placeholder
                 */
                placeholders: ['', '', '', '', 'y/n'],
                subjectList: [
                    {
                        "name": "张义飞测试",
                        "cid": 8,
                        "applicant": "张义飞",
                        "time": "2019-05-25 15:56:09",
                        "zip": true
                    },
                    {
                        "name": "张义飞的第二个测试",
                        "cid": 9,
                        "applicant": "张义飞呀",
                        "time": "2019-05-25 16:12:58",
                        "zip": false
                    },
                    {
                        "name": "张义飞的那些测试",
                        "cid": 10,
                        "applicant": "张义飞2019",
                        "time": "2019-05-25 16:33:59",
                        "zip": true
                    },
                    {
                        "name": "你好",
                        "cid": 11,
                        "applicant": "咯咯咯",
                        "time": "2019-05-26 15:50:24",
                        "zip": true
                    },
                    {
                        "name": "再来一次",
                        "cid": 12,
                        "applicant": "稳了",
                        "time": "2019-05-26 15:51:32",
                        "zip": false
                    },
                    {
                        "name": "有趣",
                        "cid": 13,
                        "applicant": "可以的",
                        "time": "2019-05-26 15:52:27",
                        "zip": false
                    },
                    {
                        "name": "ahsjhdj",
                        "cid": 14,
                        "applicant": "hjajfhr3",
                        "time": "2019-05-26 17:00:36",
                        "zip": false
                    },
                    {
                        "name": "hentai wrx",
                        "cid": 15,
                        "applicant": "王润新",
                        "time": "2019-05-27 12:41:51",
                        "zip": false
                    }
                ],
            }
        },
        computed: {
            /**
             * 课题列表
             */
            list() {
                return this.subjectList
            },
            listShow() {
                return this.list.filter((item) => {
                    if (this.filterKey[0]) {
                        // 过滤ID
                        if (item.cid.toString().indexOf(this.filterKey[0]) === -1)
                            return false
                    }
                    if (this.filterKey[1]) {
                        // 过滤课题名称
                        if (item.name.toString().indexOf(this.filterKey[1]) === -1)
                            return false
                    }
                    if (this.filterKey[2]) {
                        // 过滤申请人
                        if (item.applicant.indexOf(this.filterKey[2]) === -1)
                            return false
                    }
                    if (this.filterKey[3]) {
                        // 过滤申请日期
                        if (item.time.indexOf(this.filterKey[3]) === -1)
                            return false
                    }
                    if (this.filterKey[4]) {
                        // 过滤附件
                        if (this.filterKey[4] !== 'y' && this.filterKey[4] !== 'n')
                            return false
                        if (this.filterKey[4] === 'y' ^ item.zip)
                            return false
                    }
                    return true
                })
            }
        },
    }
</script>

<style scoped>

</style>

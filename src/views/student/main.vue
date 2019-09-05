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
        <tr v-for="item in listShow" @click="$router.push('/student/'+item.cid)">
            <td>{{item.cid}}</td>
            <td>{{item.name}}</td>
            <td>{{projectNameList[item.pid]}}</td>
            <td>{{item.applicant}}</td>
            <td>
                <span class="badge badge-pill"
                      :class="[item.status===0?'badge-primary':item.status===1?'badge-success':'badge-danger']">
                    {{statText[item.status]}}
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
                formHeaders: ['ID', '课题名称', '项目名称', '申请人', '当前状态', '申请日期', '文档', '附件'],
                /**
                 * 过滤关键词，来自input
                 */
                filterKey: [],
                /**
                 * input的placeholder
                 */
                placeholders: ['', '', '', '', 'Accepter/Rejected/Pending', '', 'y/n', 'y/n'],
                subjectList: [
                    {
                        "name": "张义飞测试",
                        "cid": 8,
                        "pid": 190,
                        "applicant": "张义飞",
                        "status": 2,
                        "time": "2019-05-25 15:56:09",
                        "pdf": false,
                        "zip": true
                    },
                    {
                        "name": "张义飞的第二个测试",
                        "cid": 9,
                        "pid": 190,
                        "applicant": "张义飞呀",
                        "status": 0,
                        "time": "2019-05-25 16:12:58",
                        "pdf": true,
                        "zip": false
                    },
                    {
                        "name": "张义飞的那些测试",
                        "cid": 10,
                        "pid": 190,
                        "applicant": "张义飞2019",
                        "status": 1,
                        "time": "2019-05-25 16:33:59",
                        "pdf": true,
                        "zip": true
                    },
                    {
                        "name": "你好",
                        "cid": 11,
                        "pid": 191,
                        "applicant": "咯咯咯",
                        "status": 0,
                        "time": "2019-05-26 15:50:24",
                        "pdf": true,
                        "zip": true
                    },
                    {
                        "name": "再来一次",
                        "cid": 12,
                        "pid": 191,
                        "applicant": "稳了",
                        "status": 0,
                        "time": "2019-05-26 15:51:32",
                        "pdf": false,
                        "zip": false
                    },
                    {
                        "name": "有趣",
                        "cid": 13,
                        "pid": 191,
                        "applicant": "可以的",
                        "status": 0,
                        "time": "2019-05-26 15:52:27",
                        "pdf": true,
                        "zip": false
                    },
                    {
                        "name": "ahsjhdj",
                        "cid": 14,
                        "pid": 190,
                        "applicant": "hjajfhr3",
                        "status": 0,
                        "time": "2019-05-26 17:00:36",
                        "pdf": false,
                        "zip": false
                    },
                    {
                        "name": "hentai wrx",
                        "cid": 15,
                        "pid": 190,
                        "applicant": "王润新",
                        "status": 1,
                        "time": "2019-05-27 12:41:51",
                        "pdf": false,
                        "zip": false
                    }
                ],
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
                let pids = []
                if (this.filterKey[2]) {
                    // 查找项目名称，pid填充
                    pids = this.projectList.reduce((pre, cur) => {
                        if (cur.name.indexOf(this.filterKey[2]) !== -1)
                            pre.push(cur.pid)
                        return pre
                    }, [])
                    console.log(pids)
                }
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
                        // 过滤项目名称
                        if (pids.indexOf(item.pid) === -1)
                            return false
                    }
                    if (this.filterKey[3]) {
                        // 过滤申请人
                        if (item.applicant.indexOf(this.filterKey[3]) === -1)
                            return false
                    }
                    if (this.filterKey[4]) {
                        // 过滤状态
                        if (this.filterKey[4] === 'Rejected' && item.status !== -1) {
                            return false
                        } else if (this.filterKey[4] === 'Pending' && item.status !== 0) {
                            return false
                        } else if (this.filterKey[4] === 'Accepted' && item.status !== 1) {
                            return false
                        }
                    }
                    if (this.filterKey[5]) {
                        // 过滤申请日期
                        if (item.time.indexOf(this.filterKey[5]) === -1)
                            return false
                    }
                    if (this.filterKey[6]) {
                        // 过滤文档
                        if (this.filterKey[6] !== 'y' && this.filterKey[6] !== 'n')
                            return false
                        if (this.filterKey[6] === 'y' ^ item.pdf)
                            return false
                    }
                    if (this.filterKey[7]) {
                        // 过滤附件
                        if (this.filterKey[7] !== 'y' && this.filterKey[7] !== 'n')
                            return false
                        if (this.filterKey[7] === 'y' ^ item.zip)
                            return false
                    }
                    return true
                })
            },
            projectNameList() {
                return this.list.reduce((pre, cur) => {
                    pre[cur.pid] = cur.name
                    return pre
                }, [])
            }
        },
    }
</script>

<style scoped>

</style>

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
                            文档
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="card-body">

            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import right from '@/views/right'

    export default {
        name: "paper",
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

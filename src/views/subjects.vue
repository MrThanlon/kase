<template>
    <div class="row col-12 mr-0 ml-0 pl-0 pr-0 mb-5">
        <div class="container col-12 ml-0 mr-0 pr-0 pl-0 col-md-9 pr-md-1">
            <div class="card shadow">
                <div class="card-header text-left p-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item">
                                课题列表
                            </li>
                        </ol>
                    </nav>
                    <div class="spinner-border m-2" role="status" v-if="loading&&!$store.state.inited">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="card-body">
                    <list v-bind:subjectList="subjectList" v-bind:project-list="projectList"/>
                </div>
            </div>
        </div>
        <right/>
    </div>
</template>
<script>
    //显示课题列表
    import right from '@/views/right'
    import list from '@/views/list'
    import api from '@/service/api'

    export default {
        name: "index",
        data: function () {
            return {
                loading: true,
                subjectList: [],
                projectList: []
            }
        },
        async created() {
            this.projectList = (await api.data.app.list_prj()).data()
            this.subjectList = (await api.data.app.list()).data
            this.loading = false
        },
        computed: {
            inited: function () {
                return this.$store.state.inited
            }
        },
        watch: {
            inited: function () {
                this.loading = false

            }
        },
        components: {
            right, list
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

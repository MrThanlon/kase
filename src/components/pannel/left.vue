<template>
    <!--Left side pannel-->
    <div class="container col-12 col-md-8 ml-0 mr-0 pr-0 pl-0">
        <div class="card shadow">
            <div class="card-header text-left">
                {{title}}
                <button class="btn btn-outline-dark ml-1 mr-1"
                        v-if="page==='article'||page==='file'"
                        @click="go_back">
                    返回列表
                </button>
                <button class="btn btn-outline-dark ml-1 mr-1"
                        v-if="page==='article'||page==='file'"
                        @click="switch_page">
                    查看{{type}}
                </button>
            </div>
            <div class="card-body" :class="[page==='article'&&pdf?'p-0':'']">
                 <!--:style="{height:page==='article'?'750px':'auto'}"-->
                <router-view @list-click="click_content" :pdf="pdf" :zip="zip" class="p-0">
                </router-view>
            </div>
        </div>
        <div class="modal">

        </div>
    </div>
</template>

<script>

    export default {
        name: 'left',
        components: {},
        data: function () {
            return {
                flag_btn: true,
                title: '列表',
                type: '附件',
                page: 'list',
                cid: 0,
                pdf: false,
                zip: false
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.page = this.$route.params.page
            console.log(to)
            next()
        },
        async created() {
            this.page = this.$route.params.page
        },
        methods: {
            click_content({cid, pdf, zip, title}) {
                console.log("event:", cid)
                this.cid = cid
                this.pdf = pdf
                this.zip = zip

                this.page = 'article'
                this.title = title
                this.$router.push('article/' + cid)
            },
            switch_page() {
                if (this.page === 'article') {
                    this.$router.push('/pannel/file/' + this.cid)
                    this.type = '材料'
                    this.page = 'file'
                } else {
                    this.$router.push('/pannel/article/' + this.cid)
                    this.type = '附件'
                    this.page = 'article'
                }
            },
            go_back() {
                this.cid = 0
                this.page = 'list'
                this.title = '列表'
                this.$router.push('/pannel/list')
            }
        }
    }
</script>


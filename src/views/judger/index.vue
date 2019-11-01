<template>
    <div class="container p-0 m-0 mw-100">
        <div class="row justify-content-between mr-0 ml-0" style="background-color: #00838f">
            <div class="p-2 ml-3">
                <img src="../../assets/uestc.png" class="logo">
                <span class="tohome align-middle">
                    <router-link to="/">通用项目评审管理系统</router-link>
                </span>
            </div>
            <div class="p-2 mr-3 text-right">
                <span class="text-light">欢迎您,{{username}}</span>
                <br/>
                <span class="text-light quit" @click="logout">
                    退出
                </span>
            </div>
        </div>
        <div class="row ml-0 mr-0" style="height: 93vh">
            <div class="col-12 col-md-9 mb-3 mb-md-5 mt-3 pl-1 pr-1">
                <div class="card border-light rounded-0">
                    <!--
                    <div class="card-header">
                        <h5 class="card-title mb-2 mt-2">{{$route.meta.title}}</h5>
                    </div>
                    -->
                    <div class="card-body p-1 p-md-3 h-100">
                        <!--主面板-->
                        <router-view/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 mb-3 mb-md-5 pl-1 pr-1">
                <div class="card border-light rounded-0">
                    <!--
                    <div class="card-header">
                        <h5 class="card-title mb-2 mt-2">
                            导航
                        </h5>
                    </div>
                    -->
                    <div class="card-body">
                        <!--副面板-->
                        <router-view name="sub" :type="subType"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/service/api'
    import SubPannel from "@/views/judger/subPannel"

    // 首页
    export default {
        name: "index",
        components: {SubPannel},
        data: function () {
            return {
                /**
                 * nav or judge
                 */
                subType: 'nav',
                username: ''
            }
        },
        async created() {
            console.debug(this.$route)
            console.debug(this.$router)
            try {
                this.username = (await api.user.id()).username
            } catch (e) {
                console.debug(e)
            }
        },
        methods: {
            async logout() {
                document.cookie = ''
                this.$store.commit('change_state', {
                    logined: false,
                    type: 0
                })
                try {
                    await api.user.logout()
                } catch (e) {
                    console.debug(e)
                }
                this.$router.push('/login')
            },
        }
    }
</script>

<style scoped>
    .header {
        text-align: left;
        width: 100%;
        left: 0;
        top: 0;
    }

    .logo {
        width: 40px;
        height: 40px;
    }

    .tohome {
        margin-left: 10px;
    }

    .tohome a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1.4rem;
    }

    .quit:hover {
        cursor: pointer;
    }
</style>

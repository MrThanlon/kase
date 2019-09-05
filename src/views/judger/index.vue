<template>
    <div class="container pt-3 pt-md-5">
        <div class="row">
            <div class="col-12 col-md-8 mb-3 mb-md-5 pl-1 pr-1">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-2 mt-2">{{$route.meta.title}}</h5>
                    </div>
                    <div class="card-body p-1 p-md-3">
                        <!--主面板-->
                        <router-view/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-3 mb-md-5 pl-1 pr-1">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-2 mt-2" v-if="!$route.meta.judgeable">
                            导航
                        </h5>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons" v-if="$route.meta.judgeable">
                            <label class="btn btn-outline-dark active" @click="subType='nav'">
                                <input type="radio" autocomplete="off" checked>
                                导航
                            </label>
                            <label class="btn btn-outline-dark" @click="subType='judge'">
                                <input type="radio" autocomplete="off">
                                评分
                            </label>
                        </div>
                    </div>
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
    // 首页
    export default {
        name: "index",
        data:function(){
            return {
                /**
                 * nav or judge
                 */
                subType: 'nav'
            }
        },
        created() {
            console.debug(this.$route)
            console.debug(this.$router)
        }
    }
</script>

<style scoped>

</style>

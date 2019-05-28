<template>
    <div id="app" class="col-12">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/login">Login</router-link>
            |
            <router-link to="/pannel">Pannel</router-link>
            |
            <router-link to="/test">Test</router-link>
        </div>
        <router-view/>
        <footer>
            <div class="card shadow">
                <div class="card-body p-0">
                    &copy;<a target="_blank" href="https://github.com/mrthanlon/kase-be">Kase</a>
                    {{year}}
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name:'app',
        data: function () {
            return {
                year:new Date().getFullYear()
            }
        }
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
    }
</style>

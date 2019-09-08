<template>
    <div id="app">
        <div>
            <router-view />
        </div>
        <footer>
            <div class="card shadow">
                <div class="card-body p-0">
                    &copy;<a target="_blank"
                             href="https://github.com/mrthanlon/kase-be">Kase</a>
                    {{year}}
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data: function () {
            return {
                year: new Date().getFullYear()
            }
        },
        async created() {
        }
    }
</script>
<style>
    footer {
        text-align: center;
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
    }
</style>

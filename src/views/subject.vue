<template>
    <div class="row col-12 mr-0 ml-0 pl-0 pr-0">
        <router-view/>
        <router-view name="sub"/>
    </div>
</template>

<script>
    export default {
        name: "subject"
    }
</script>

<style scoped>

</style>

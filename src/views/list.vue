<template>
    <div id="home">
        list
        <router-link :to="{name:'gn'}">国内</router-link>
        <router-link :to="{name:'gg'}">国际</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="sass">

</style>
<script>
export default {
    
}
</script>

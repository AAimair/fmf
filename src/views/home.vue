<template>
    <div id="home">
        home!!
        <ul>
            <router-link to="/msg/1?title=新闻1" tag="li">新闻一</router-link>
            <router-link :to="{name:'msg',params:{id:3},query:{title:'新闻二'}}" tag="li">新闻二</router-link>
        </ul>
    </div>
</template>
<style lang="sass">

</style>
<script>
export default {
    
}
</script>

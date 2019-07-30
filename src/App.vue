<template>
  <div id="app">
    hello
    <router-link :to="nav.path" v-for="nav of navs" :key="nav.id">{{nav.title}}</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>
<script>
export default {
  data(){
    return{
      navs:[
        {id:1,title:"首页",path:"/home"},
        {id:2,title:"列表",path:"/list"},
        {id:3,title:"我的",path:"/mine"}]
    }
  }
}
</script>

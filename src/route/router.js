import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  // 配置路由
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("../views/home")},
    {path:"/mine",component:()=>import("../views/mine")},
    {path:"/list",component:()=>import("../views/list"),children:[
      {path:"",redirect:"/list/gn"},
      {path:"gn",component:()=>import("../views/gn"),name:"gn"},
      {path:"gg",component:()=>import("../views/gg"),name:"gg"}
    ]},
    {path:"/msg/:id",component:()=>import("../views/msg"),name:'msg'},
    ]
  })

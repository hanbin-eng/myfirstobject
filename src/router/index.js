import Vue from "vue"
import VueRouter from "vue-router"
import first from "../views/first"
import fenlei from "../views/fenlei"
import reg from "../views/regiester"
import shopcar from "../views/shopcar"
import denlu from "../views/denlu"
import zhuce from "../views/zhuce"
import xiangqin from "../views/xiangqin"
import ceshi from "../views/ceshi1"

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:"/",component:first},
        {path:"/fenlei",component: fenlei},
        {path:"/regiester",component: reg},
        {path:"/Shopcar",component: shopcar},
        {path:"/denlu",component: denlu},
        {path:"/zhuce",component: zhuce},
        {path:"/xiangqin",component: xiangqin},
        {path:"/ceshi",component: ceshi}
    ]
})
export default router


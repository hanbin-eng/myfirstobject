<template>
    <div class="carcont2">
       <div @click="p" v-for="n in shopcarlistInfo.list">
           <div  class="shop1">
               <img :src="n.pic" >
               <p>{{n.p}}</p>
               <span>{{n.price}}</span>
           </div>
       </div>
    </div>
</template>

<script>
    import shopcarlist from "../../apis/shopcarlist";
    export default {
        name: "carcont2",
        data() {
            return {
                shopcarlistInfo: []

            }

        },
        methods: {
            p() {
                this.$router.push({path: '/xiangqin'})
            },
            /**
             * 页面的数据加载
             **/
            _initPageData() {
                shopcarlist.getCartInfoByUserId(data => {
                    console.log(data)
                    this.shopcarlistInfo = data;
                })
            },

        },
        created() {
            this._initPageData()
        }
    }
</script>

<style scoped>
    .carcont2{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .carcont2 div{
        text-decoration: none;
    }
    .carcont2 p{
        color: black;
    }
    .carcont2 img{
        width: 1.85rem
    }
    .carcont2 span{
        font-size: 0.17rem;
        color: #ec702e;
    }
</style>
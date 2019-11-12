<template>
    <div class="fenleiright01">


        <div class="right">
            <img src="../../assets/fenlei/fenleiright/r1.jpg" >
            <div class="rightp">
                <p><span>—</span>手机<span>—</span></p>
            </div>
        </div>


        <div class="rightphone">
        <div @click="p" v-for="n in fenleiInfo.phone" href="">
            <img :src="n.pic" >
            <p>{{n.p}}</p>
        </div>
        </div>


    </div>
</template>

<script>
    import fenleiapi from "../../apis/product"
    // import fenlei from "../../views/fenlei";
    // import p1 from "../../assets/fenlei/fenleiright/p1.png"
    // import p2 from "../../assets/fenlei/fenleiright/p2.png"
    // import p3 from "../../assets/fenlei/fenleiright/p3.png"
    // import p4 from "../../assets/fenlei/fenleiright/p4.png"
    // import p5 from "../../assets/fenlei/fenleiright/p5.png"
    // import p6 from "../../assets/fenlei/fenleiright/p6.png"
    // import p7 from "../../assets/fenlei/fenleiright/p7.png"
    // import p8 from "../../assets/fenlei/fenleiright/p8.png"
    // import p9 from "../../assets/fenlei/fenleiright/p9.png"
    // import p10 from "../../assets/fenlei/fenleiright/p10.png"
    // import p11 from "../../assets/fenlei/fenleiright/p11.png"

    export default {
        name: "fenleiright01",
        data() {
            return {
                fenleiInfo: []

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
                fenleiapi.getCartInfoByUserId(data => {
                    console.log(data)
                    this.fenleiInfo = data;
                })
            },

        },
        created() {
            this._initPageData()
        }
    }
</script>

<style scoped>
    .right{
        position: absolute;
        top: 0.5rem;
        right: 0.13rem;
    }
    .right img{
        width: 2.7rem;
    }

    .rightp{
        position: absolute;
        top: 1.5rem;
        left: 1rem;
    }
    .rightp span{
        color: #e0e0e0;
    }
    .rightphone img{
        width: 0.5rem;
    }
    .rightphone{
        justify-content: space-around;
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top:2.3rem;
        left: 0.8rem;
    }
    .rightphone div{
        display: inline-block;
        color: black;
        text-align: center;
        text-decoration: none;
        margin-left: 0.3rem;
        margin-top: 0.4rem;
    }
    .rightphone p{
        font-size: 0.1rem;
    }

</style>
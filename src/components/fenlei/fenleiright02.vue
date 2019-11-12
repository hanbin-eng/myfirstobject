<template>
    <div class="fenleiright02">


        <div class="right">
            <img src="../../assets/fenlei/fenleiright/r2.png" >
            <div class="rightp">
                <p><span>—</span>电器<span>—</span></p>
            </div>
        </div>


        <div class="rightphone">
            <div @click="p" v-for="n in fenlei2Info.phone" href="">
                <img :src="n.pic" >
                <p>{{n.p}}</p>
            </div>
        </div>


    </div>
</template>

<script>
    import fenleiapi from "../../apis/products2"


    export default {
        name: "fenleiright02",
        data() {
            return {
                fenlei2Info: []

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
                    this.fenlei2Info = data;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
<template>
    <div class="left">
        <ul>
            <li @click="chg(i)" v-for="(n,i) in ph" :class="{active:i === isActive}"><div href="">{{n.phh}}</div></li>
        </ul>
        <fenleiright01 v-show="isActive===0"></fenleiright01>
        <fenleiright02 v-show="isActive===1"></fenleiright02>
    </div>


</template>

<script>
    import fenleiright02 from "./fenleiright02"
    import fenleiright01 from "./fenleiright01"
    export default {
        name: "fenleileft",
        components: {
            fenleiright02,
            fenleiright01

        },
        methods:{
            chg(i){
                this.isActive=i;
            }
        },

        data(){
            return {
                isActive : 0,

                ph:[
                    {
                        phh:"新品",
                    },
                    {
                        phh:"众筹",
                    },
                    {
                        phh:"小米手机",
                    },
                    {
                        phh:"Redmi手机",
                    },
                    {
                        phh:"黑鲨游戏",
                    },
                    {
                        phh:"手机配件" ,
                    },
                    {
                        phh:"电视",
                    },
                    {
                        phh:"大家电",
                    },
                    {
                        phh:"电脑",
                    },
                    {
                        phh:"小艾智能",
                    },
                    {
                        phh:"路由器",
                    },
                    {
                        phh:"生活电器",
                    },

                ]
            }

        }
    }
</script>

<style scoped>
    .left div{
        text-decoration: none;
        color: #3c3c3c;

    }
    .left{
        margin-top: 0.45rem;
        width: 0.8rem;
        height: 6.5rem;
        border: 1px #efefef solid;
        background-color: white;
    }
    .left li{
        margin-top: 0.3rem;
        text-align: center;
    }
</style>
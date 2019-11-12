<template>
    <div class="carshop">
        <a href=""><img src="../../assets/shopcar/shopcarlist/carsp.png" class="img3"></a>
        <a href=""><p>购物车还是空的</p></a>
        <a href="" class="btn">
            去逛逛
        </a>
    </div>
</template>

<script>
    export default {
        name: "carshop"
    }
</script>

<style scoped>
    .carshop{
        /* text-align: center; */
        position: relative;
        width: 100%;
        height: 0.8rem;
        background-color: #ebebeb;
    }

    .carshop p{
        position: absolute;
        left: 1.35rem;
        top: 0.35rem;
        display: inline-block;
        color:#ababab ;
    }
    .img3{
        width: 0.48rem;
        position: absolute;
        left: 0.8rem;
        top: 0.15rem;
    }
    .btn{
        font-size: 0.12rem;
        text-align: center;
        border: 1px solid #c8c8c8;
        width: 0.5rem;
        color: black;
        position: absolute;
        right: 0.8rem;
        top: 0.35rem;
    }
</style>
<template>
    <div class="cartop">
       <a href=""><img class="img1" src="../../assets/shopcar/shopcarlist/car1.png" ></a>
        <p>购物车</p>
        <img class="img2" src="../../assets/shopcar/shopcarlist/car2.png" >
    </div>
</template>

<script>
    export default {
        name: "shopcar"
    }
</script>

<style scoped>
    .cartop{
        position: fixed;
        top: 0rem;
        width: 100%;
        height: 0.5rem;
        background-color: #f2f2f2;
        z-index: 2;
    }
    .img1{
        width: 0.15rem;
        position: absolute;
        left: 0.2rem;
        top: 0.15rem;
    }
    .img2{
        width: 0.24rem;
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
    }
    .cartop p{
        position: absolute;
        left: 1.65rem;
        top: 0.15rem;
        color: #666666;
    }
</style>
<template>
    <div class="fenleitop">
        <img class="img1" src="../../assets/fenlei/t1.png" >
        <p>分类</p>
        <img class="img2" src="../../assets/fenlei/f2.png" >
    </div>
</template>

<script>
    export default {
        name: "fenleitop"
    }
</script>

<style scoped>
    .fenleitop{
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
    .fenleitop p{
        position: absolute;
        left: 1.65rem;
        top: 0.15rem;
        color: #666666;
    }
</style>
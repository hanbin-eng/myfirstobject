<template>
    <div class="regcont1">
        <p>我的订单</p>
        <a href="">全部订单<img src="../../assets/register/d2.png" ></a>
    </div>
</template>

<script>
    export default {
        name: "regcont1"
    }
</script>

<style scoped>
    .regcont1{
        width: 100%;
        height: 0.45rem;
        border-bottom: 1px #d8d8d8 solid;
    }
    .regcont1{
        position: relative;
    }
    .regcont1 p{
        top: 0.15rem;
        left: 0.15rem;
        position: absolute;
    }
    .regcont1 a{
        text-decoration: none;
        color: #3C3C3C;
        position: absolute;
        right: 0.25rem;
        top: 0.15rem;
    }
    .regcont1 img{
        position: absolute;
        width: 0.1rem;
    }
</style>
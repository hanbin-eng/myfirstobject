<template>
    <a class="carpass">
        <p>登录后享受跟多优惠</p>
        <span>去登陆></span>
    </a>
</template>

<script>
    export default {
        name: "capass"
    }
</script>

<style scoped>
    .carpass{
        position: relative;
        display: inline-block;
        width: 100%;
        height: 0.5rem;
        margin-top: 0.5rem;
    }
    .carpass p{
        position: absolute;
        left: 0.15rem;
        top: 0.15rem;
        font-size: 0.15rem;
    }
    .carpass span{
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
        color: #787878;
        font-size: 0.135rem;
    }
</style>
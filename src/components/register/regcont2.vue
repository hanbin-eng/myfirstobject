<template>
    <div class="regcont2">
        <a href="">
            <img src="../../assets/register/d3.png" >
            <p>待付款</p>
        </a>
        <a href="">
            <img src="../../assets/register/d4.png" >
            <p>待收货</p>
        </a>
        <a href="">
            <img src="../../assets/register/d5.png" >
            <p>退换修</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "regcont2"
    }
</script>

<style scoped>
    .regcont2{
        width: 100%;
        height: 0.9rem;
        /* background-color: #EF802E; */
        border-bottom: 0.15rem #f7f7f7 solid;
        display: flex;
        justify-content: space-around;
    }
    .regcont2 img{
        width: 0.25rem;
    }
    .regcont2 a{
        color: #3C3C3C;
        margin-top: 0.18rem;
        text-decoration: none;
        text-align: center;
        font-size: 0.1rem;
    }
    .regcont2 p{
        margin-top: 0.1rem;
    }
</style>
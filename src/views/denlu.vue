<template>
    <div class="denlu">
        <denluall/>
    </div>
</template>

<script>
    import denluall from "../components/denlu/denlu"
    export default {
        name: "denlu",
        components: {
            denluall
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 26.67vw;
    }

    body {
        font-family: "微软雅黑";
        font-size: 0.14rem;
    }
    img{
        border:none
    }
</style>
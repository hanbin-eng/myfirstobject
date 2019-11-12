<template>
    <div class="zhuce">
        <zhuceall/>
    </div>

</template>

<script>
    import zhuceall from "../components/zhuce/zhuce"
    export default {
        name: "zhuce",
        components: {
            zhuceall
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
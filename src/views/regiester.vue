<template>
    <div id="regiester">
        <regiestertop/>
        <regcont1/>
        <regcont2/>
        <rengcontall/>
        <last/>
    </div>
</template>

<script>
    import regiestertop from '../components/register/registertop.vue'
    import regcont1 from "../components/register/regcont1"
    import regcont2 from "../components/register/regcont2"
    import rengcontall from "../components/register/rengcontall"
    import last from "../components/footer/footer"
    export default {
        name: 'regiester',
        components: {
            regiestertop,
            regcont1,
            regcont2,
            rengcontall,
            last
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
        background-color: #f7f7f7;
    }
    img{
        border:none
    }
</style>
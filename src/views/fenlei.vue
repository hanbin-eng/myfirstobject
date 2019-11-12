<template>
    <div id="app2">
       <fenleitop></fenleitop>
        <fenleileft></fenleileft>
        <last/>
    </div>
</template>

<script>
    import fenleitop from '../components/fenlei/fenleitop.vue'
    import fenleileft from "../components/fenlei/fenleileft"
    import fenleiright01 from "../components/fenlei/fenleiright01"
    import fenleiright02 from "../components/fenlei/fenleiright02"
    import last from '../components/footer/footer.vue'
    export default {
        name: 'app2',
        components: {
            fenleitop,
            fenleileft,
            fenleiright01,
            fenleiright02,
            last
        }
    }
</script>

<style>
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
        background-color: white;
    }
</style>
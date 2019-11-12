<template>
    <div id="first">
        <top/>
        <cont1/>
        <cont2/>
        <cont3/>
        <last/>
    </div>
</template>

<script>
    import top from '../components/first/top.vue'
    import cont1 from '../components/first/cont1.vue'
    import cont2 from '../components/first/cont2.vue'
    import cont3 from '../components/first/cont3.vue'
    import last from '../components/footer/footer.vue'

    export default {
        name: 'first',
        components: {
            top,
            cont1,
            cont2,
            cont3,
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
        background-color: #f1f1f1;
    }
    img{
        border:none
    }
    /* #app {*/
    /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*  margin-top: 60px;*/
    /*}*/
</style>
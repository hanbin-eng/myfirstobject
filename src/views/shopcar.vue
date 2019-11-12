<template>
   <div class="Shopcar">
       <cartop/>
       <carpass/>
       <carshop/>
       <carcont1/>
       <carcont2/>
       <last/>
   </div>
</template>

<script>
    import cartop from '../components/shopcar/cartop'
    import carpass from "../components/shopcar/carpass"
    import carshop from "../components/shopcar/carshop"
    import carcont2 from "../components/shopcar/carcont2"
    import carcont1 from "../components/shopcar/carcont1"
    import last from '../components/footer/footer.vue'


    export default {
        name: "Shopcar",
        components: {
            cartop,
            carpass,
            carshop,
            carcont1,
            carcont2,
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
    }
    img{
        border:none
    }
</style>
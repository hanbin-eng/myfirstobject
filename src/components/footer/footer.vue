<template>
    <div class="last">
        <div @click="first" class="f1" href=""></div>
        <div @click="fenlei" class="f2" href=""></div>
        <div @click="shopcar" class="f3" href=""></div>
        <div @click="register" class="f4" href=""></div>
    </div>
</template>

<script>
    export default {
        name: "last",
        methods: {
            first() {
                this.$router.push({path: '/'})
            },
            fenlei() {
                this.$router.push({path: '/fenlei'})
            },
            shopcar() {
                this.$router.push({path: '/shopcar'})
            },
            register() {
                this.$router.push({path: '/regiester'})
            }
        }
    }
</script>

<style scoped>
    .last{
        position: fixed;
        bottom: 0rem;
        height: 0.6rem;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: space-around;
        z-index: 4rem;
    }
    .last div{
        text-align: center;
        margin-top: 0.1rem;
        background-repeat: no-repeat;
        background-size: 2.2rem;
        display: inline-block;
        width: 0.39rem;
        height: 0.5rem;
        background-image: url(../../assets/footer/footer.png);
    }
    .f1{
        background-position: -0.6rem 0.01rem;
    }
    .f2{
        background-position: 0rem -0.55rem;
    }
    .f3{
        background-position: 0rem -1.15rem;
    }
    .f4{
        background-position: 0rem -1.77rem;
    }
</style>
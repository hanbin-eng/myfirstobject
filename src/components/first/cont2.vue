<template>
    <div class="cont2">
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-1.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-2.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-3.gif" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-4.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-5.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-6.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-7.jpg" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-8.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-9.png" ></div>
        <div @click="xiangqin" href=""><img src="../../assets/cont2/cont2-10.png" ></div>
    </div>
</template>

<script>
    export default {
        name: "cont1",
        methods: {
            xiangqin() {
                this.$router.push({path: '/xiangqin'})
            }

        }
    }

</script>

<style scoped>
    .cont2{
        width: 100%;
        height: 1.55rem;
        background-color: white;
        margin-top: 0rem;
    }
    .cont2 img{
        width: 0.7rem;

    }
    .cont2 div{
        display: inline-block;
        width: 0.7rem;
        margin-left: 0.03rem;
    }
</style>
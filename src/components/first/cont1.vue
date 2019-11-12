<template>
    <div class="cont1">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div @click="xiangqin" class="swiper-slide"><img src="../../assets/cont1/cont1-1.jpg"></div>
                <div @click="xiangqin" class="swiper-slide"><img src="../../assets/cont1/cont1-2.jpg"></div>
                <div @click="xiangqin" class="swiper-slide"><img src="../../assets/cont1/cont1-3.jpg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: 'cont1',
        methods: {
            xiangqin() {
                this.$router.push({path: '/xiangqin'})
            }

        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // 如果需要滚动条
                scrollbar: '.swiper-scrollbar',
            })
        }
    }
</script>
<style scoped>

    .cont1 img{
        width: 3.75rem;
    }
    .cont1{
        margin-top: 0.65rem;
    }

</style>
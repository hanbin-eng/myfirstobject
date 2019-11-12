<template>
    <div class="regiestop">
        <img src="../../assets/register/d1.png" >
        <div class="rega">
            <div @click="tellUs">登录/注册</div>
        </div>
    </div>

</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "registertop",
        components: {
            [Dialog.Component.name]: Dialog.Component
        },
        methods: {

            tellUs() {
                Dialog.confirm({
                    title: '确认登录小米？',
                    message: '确认同意小米协议？'
                }).then(() => {
                    this.$router.push({path: '/denlu'})
                }).catch(() => {
                    // on cancel
                });

            }

        }
    }
</script>

<style scoped>
    .regiestop{
        position: relative;
        width: 100%;
        height: 0.8rem;
        background-color: #ef802e;
    }
    .regiestop img{
        position: absolute;
        left: 0.1rem;
        top: 0.15rem;
        width: 0.55rem;
    }
    .rega{
        position: absolute;
        left: 0.68rem;
        top: 0.3rem;
    }
    .rega div{
        font-size: 0.13rem;
        text-decoration: none;
        color: white;
        width: 2rem;
    }
</style>
<template>
    <div class="denluall">
        <div class="top">
            <img src="../../assets/denlu/e1.png" >
            <p>小米账号登录</p>
        </div>




        <div  class="denlu">
            <div class="input">
                <form>
                    <input type="text" name="" value="" /><br>
                    <input type="text" name="" value="" />
                    <a class="ears"></a>
                    <button class="btn1" type="button">登录</button>
                    <button @click="zhuce" class="btn2" type="button">手机短信登录/注册</button>

                    <div class="zc">
                        <a href="">立即注册</a> | <a href="">忘记密码?</a>
                    </div>
                </form>
            </div>


            <div class="dlcont3">
                <p>——————————其他方式登录——————————</p>
                <div class="dl3">
                    <a href=""><img src="../../assets/denlu/e2.png" ></a>
                    <a href=""><img src="../../assets/denlu/e3.png" ></a>
                    <a href=""><img src="../../assets/denlu/e4.png" ></a>
                </div>
            </div>

            <div class="delast">
                <a href="">简体</a>&nbsp;&nbsp;&nbsp;|
                <a href="">繁体</a>&nbsp;&nbsp;&nbsp;|
                <a href="">English</a>&nbsp;&nbsp;&nbsp;|
                <a href="">常见问题</a>&nbsp;&nbsp;&nbsp;|
                <a href="">隐私政策</a>
            </div>
        </div>




    </div>
</template>

<script>
    export default {
        name: "denluall",
        methods :{
            zhuce(){
                this.$router.push({path:'/zhuce'})
            }
        }
    }
</script>

<style scoped>
    .top img{
        margin-top: 0.3rem;
        width: 0.48rem;
    }
    .top p{
        font-size: 0.18rem;
        margin-top: 0.1rem;
    }
    .top{
        width: 100%;
        text-align: center;
    }




    .input{
        position: relative;
        text-align: center;
        height: 3.7rem;
        /* background-color: cyan; */
    }
    .input input{
        width: 3.3rem;
        height: 0.6rem;
        border: none;
        border-bottom: 1px #d3d3d3 solid;
    }
    .ears{
        display: inline-block;
        position: absolute;
        right: 0.3rem;
        top: 0.85rem;
        width: 0.2rem;
        height: 0.121rem;
        background-color: #EF802E;
        background-image: url(../../assets/denlu/e7.png);
        background-size: 0.5rem;
    }
    .btn1{
        font-size: 0.18rem;
        color: white;
        position: absolute;
        bottom: 1.7rem;
        width: 3.3rem;
        left: 0.2rem;
        background-color: #EF802E;
        height: 0.45rem;
        border: none;
        border-radius: 5px;
        font-size: ;
    }
    .btn2{
        font-size: 0.18rem;
        position: absolute;
        bottom: 1rem;
        width: 3.3rem;
        left: 0.2rem;
        height: 0.45rem;
        border: none;
        border-radius: 5px;
        background-color: white;
        border: 1px #d3d3d3 solid;
    }
    .zc{;
        position: absolute;
        bottom: 0.6rem;
        left: 1rem;
    }
    .zc a{
        font-size: 0.17rem;
        text-decoration: none;
        color: #C7C7C7;
    }


    .dlcont3 p{
        margin-left: 0.2rem;
        font-size: 0.12rem;
        color: #C7C7C7;
    }
    .dl3 img{
        width: 0.34rem;
        margin-left: 0.1rem;
    }
    .dl3{
        margin-left: 1.1rem;
        margin-top: 0.2rem;
    }
    .delast a{
        margin-left: 0.18rem;
        text-decoration: none;
        color: #C7C7C7;
    }
    .delast{
        margin-top: 0.35rem;
        color: #C7C7C7;
    }



</style>
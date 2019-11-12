<template>

  <div class="header">
    <img class="t-1" src="../../assets/top/top1.png" width="28rem" >
    <input type="text" name="" id="" value="" />
    <img class="t-2" src="../../assets/top/top2.png" width="18rem">
<!--    <ul>-->
<!--      <li><a href="" style="color: #df5b42;border-bottom: 2px solid #df5b42;">推荐</a></li>-->
<!--      <li><a href="">手机</a></li>-->
<!--      <li><a href="">智能</a></li>-->
<!--      <li><a href="">电视</a></li>-->
<!--      <li><a href="">笔记本</a></li>-->
<!--      <li><a href="">家电</a></li>-->
<!--      <li><a href=""><img src="../../assets/top/top4.png" class="cont1-1" ></a></li>-->
<!--    </ul>-->
  </div>

</template>

<script>
  import cont1 from '../../components/first/cont1.vue'
  import cont2 from '../../components/first/cont2.vue'
  import cont3 from '../../components/first/cont3.vue'
export default {
  name: 'top',
  components: {
    cont1,
    cont2,
    cont3,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    position: fixed;
    height: 0.4rem;
    background-color: #f1f1f1;
    top: 0rem;
    z-index: 4;
  }
  .header input{
    background-image: url("../../assets/top/top3.png");
    background-repeat: no-repeat;
    background-position: 0.07rem 0.07rem;
    background-size: 0.15rem;
    position: absolute;
    top: 0.02rem;
    width: 2.7rem;
    height: 0.30rem;
    border: 1px solid #dddddd;
    left: 0.5rem;

  }
  .t-1{
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
  }
  .t-2{
    position: absolute;
    right: 0.2rem;
    top: 0.07rem;
  }
  .header a{
    text-decoration: none;
    color: #737373;
    display: inline-block;
    height: 0.25rem;
    text-align: center;
  }
  .header li{
    display: inline-block;
    margin-left: 0.2rem;
    margin-top: 0.4rem;
  }
  .cont1-1{
    width: 0.15rem;
    margin-left: 0.2rem;
  }
</style>

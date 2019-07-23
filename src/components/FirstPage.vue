<template>
  <div>
    <div class="picture">

    </div>
    <div class="body">
       <div class="content">
         <div class="block">
           <p class="version">基础版</p>
           <p class="price">RMB 4,999</p>
         </div>
         <div class="block" >
           <p class="version">高级版</p>
           <p class="price">RMB 6,999</p>
         </div>
         <div class="block" >
           <p class="version">连锁版</p>
           <p class="price">RMB 10,999</p>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage'
}
</script>

<style scoped>
.picture{
  height: 42.86vw;
  background-color: #797979;
}
.body{
  height:102vw ;
  background-color: #F2F2F2;
  padding-left: 8.07vw;
  padding-right: 8.07vw;
  padding-top:6.09vw;
}
.content{
  height:36.46vw;
  background-color: #FFFFFF;
}
.block{
  width: 17.71vw;
  height:25vw;
  border: 2px solid #C9C9C9;
  border-radius:10px;
  float: left;
  margin-left: 2.08vw;
  margin-top: 5.73vw;
}
.block:first-child{
  margin-left: 13.2vw;
}
.block:hover{
  border: 2px solid #00A2FF;
}
.version{
  margin-left: 6.77vw;
  margin-top: 2.08vw;
  font-family: "PingFang SC";
  font-size:1.25vw;
  color:#0D0D0D;
}
.price{
  margin-left: 5.21vw;
  margin-top:18.13vw;
  font-family: "PingFang SC";
  font-size:1.25vw;
  color:#0D0D0D;
  font-weight: 700;
}
</style>

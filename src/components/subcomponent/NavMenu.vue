<template>
   <div id="nav">
       <ul id="title">
         <li><router-link  id="Modreat" to="/" class="before">魔锥科技</router-link></li>
         <li><router-link  id="FirstPage" to="/酒店智能管理系统" class="before">酒店智能管理系统</router-link></li>
         <li><router-link  id="SecondPage" to="/自助入住设备" class="before">自助入住设备</router-link></li>
         <li><router-link  id="ThirdPage" to="/购买方案" class="before">购买方案</router-link></li>
       </ul>
   </div>
</template>

<script>
export default {
  name: 'NavMenu'
}

</script>

<style scoped>
#nav{
  height:2.8vw;
  background-color: #0D0D0D;
}
#title {
  float:left;
  list-style-type:none;
  position: absolute;
  padding: 0.73vw 21.875vw;
}
#title li{
  padding-left:6.25vw;
  display:inline;
}

#title a{
    text-align: center;
    text-decoration: none;
    /*font-size: 16px;*/
    font-size:0.83vw;
    font-family: "PingFang SC";
    height:0.83vw;
  }
.before{
  color:#FFFFFF;
}
#title a:hover{
  color:#C1C1C1;
}
#title a:active{
    color:#C1C1C1;
}
a.router-link-exact-active {
  color: #C1C1C1;
}

</style>

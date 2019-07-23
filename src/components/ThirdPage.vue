<template>
  <div class="body">
    <div class="versionContent">
      <p class="versionTitle">选择酒店智能管理系统版本。</p>
      <div class="block">
        <p class="version">基础版</p>
        <p class="price">RMB 4,999</p>
      </div>
      <div class="block">
        <p class="version">高级版</p>
        <p class="price">RMB 6,999</p>
      </div>
      <div class="block">
        <p class="version">连锁版</p>
        <p class="price">RMB 10,999</p>
      </div>
    </div>
    <div class="serviceContent">
      <p class="serviceTitle">选择所需要的增值服务。</p>
      <div class="rectangle" >
        <p class="servicePrivate">私有云部署</p>
      </div>
      <div class="rectangle" >
        <p class="service">自助入住设备</p>
      </div>
      <div class="rectangle">
        <p class="service">数据分析服务</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdPage'
}
</script>

<style scoped>
.body{
  height:105vw ;
  background-color: #F2F2F2;
  padding-left: 8.07vw;
  padding-right: 8.07vw;
}
.versionContent{
  height:42.19vw;
  background-color: #FFFFFF;
}
.versionTitle{
  height:2.86vw;
  padding-left:25.6vw;
  padding-top:4.89vw;
  font-family:"PingFang SC";
  font-size:2.5vw;
  color:#101010;
  font-weight: 700;
}
.block{
  width:17.71vw;
  height:25vw;
  border: 2px solid #C9C9C9;
  border-radius: 10px;
  float: left;
  margin-left:2.08vw;
  margin-top:3.6vw;
}
.block:first-of-type{
  margin-left: 13.2vw;
}
.block:hover{
  border: 2px solid #00A2FF;
}
.version{
  margin-left:6.77vw;
  margin-top:2.08vw;
  font-family: "PingFang SC";
  font-size:1.25vw;
  color:#0D0D0D;
}
.price{
  margin-left:5.21vw;
  margin-top:18.1vw;
  font-family: "PingFang SC";
  font-size:1.25vw;
  color:#0D0D0D;
  font-weight: 700;
}
.serviceContent{
  height: 25vw;
  background-color: #FFFFFF;
  margin-top:0.78vw;
}
.serviceTitle{
  height:2.60vw;
  padding-left:28.4vw;
  padding-top:5.21vw;
  font-family:"PingFang SC";
  font-size:2.5vw;
  color:#101010;
  font-weight: 700;
}
.rectangle{
  width:17.71vw ;
  height:8.02vw;
  border:2px solid #C9C9C9;
  border-radius: 10px;
  float: left;
  margin-left: 2.08vw;
  margin-top:3.65vw;
}
.rectangle:first-of-type{
  margin-left: 13.2vw;
}
.rectangle:hover{
  border: 2px solid #00A2FF;
}
.servicePrivate, .service{
  margin-top:1.98vw;
  margin-left:5.21vw;
  font-family: "PingFang SC";
  font-size:1.25vw;
  color:#0D0D0D;
}
.servicePrivate{
  margin-left: 5.63vw;
}
</style>

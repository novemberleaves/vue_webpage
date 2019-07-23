<template>
  <div>
  <div class="image">
      <p class="name"><strong>魔锥，使智能旅居触手可及。</strong></p>
      <p class="nameText">
        我们致力于为中高端连锁酒店的管理提供智能系统相关产品和服务，主要包括<br>
        酒店智能管理系统、三维人脸识别系统和自助入住设备。利用人工智能技术帮助中高端连锁酒店<br>
        优化企业管理、整合门店数据和实现智能自助入住，以此实现酒店的快速扩张和降低成本。
      </p>
  </div>
  <div class="body">
    <p class="core">核心产品与服务</p>
    <p class="coreText">
      更聪明好用的酒店管理系统，并能<br>
      与自助入住设备无缝衔接，让酒店<br>
      业务管理更省心省事。
    </p>
    <div class="coreBlock">
      <img  class="picture" src="../assets/系统.jpg">
      <div class="literal">
        <p class="systemTitle">酒店智能管理系统</p>
        <p class="systemText">
          酒店智能管理系统根据酒店的不同需求共分为 3 个
          版本：基础版、高级版和连锁版。高级版面向单体型
          酒店，连锁版面向品牌连锁化酒店企业。该产品还可
          针对酒店需求进行私有云部署，以更好地协助酒店进
          行数据收集及业务管理。后续还可利用酒店积累的大
          量用户信息，结合 AI 算法，为客户定制数据分析及
          数据挖掘服务，用以更精准地协助酒店进行决策。
        </p>
        <a class="systemLink" href="#">了解更多 ></a>
        <a class="systemLink" href="#">购买 ></a>
      </div>
    </div>
    <div class="coreBlock">
      <div class="picture"></div>
      <div class="literal">
        <p class="systemTitle">自助入住设备</p>
        <p class="systemText">
          自助入住设备利用三维人脸识别技术对客户进行身份
          识别，无缝对接酒店智能管理系统，无需前台服务人
          员，客户可以自助办理选房、入住、续房、退房等业
          务，简化酒店的入住退房流程，在提高服务效率的同
          时减少酒店前台员工的数量，为酒店节省人员开销。
        </p>
        <a class="systemLink" href="#">了解更多 ></a>
        <a class="systemLink" href="#">购买 ></a>
      </div>
    </div>
    <div class="coreRectangle">
      <div class="square">
        <img  class="icon" src="../assets/矩阵.png">
        <div class="grayLine"></div>
        <p class="software">多元化的软件矩阵</p>
        <p class="introduction">
          酒店智能管理系统针对酒店的不同需求推出不同版本，且
          基于当前酒店行业的连锁化和数字化趋势，独有的连锁版
          酒店智能管理系统可帮助连锁酒店管控门店和整合数据。
        </p>
        <div class="blackLine"></div>
      </div>
      <div class="square">
        <img class="icon" src="../assets/人脸识别.png">
        <div class="grayLine"></div>
        <p class="faceID">三维人脸识别技术</p>
        <p class="introduction">
          区别于市场上的二维图像识别，我们所采用三维人脸识别
          算法对人脸的识别精度更高，更安全，也更符合未来的发
          展趋势。
        </p>
        <div class="blackLine"></div>
      </div>
      <div class="square">
        <img class="icon" src="../assets/产品链.png">
        <div class="grayLine"></div>
        <p class="chain">完整的产品生态链</p>
        <p class="introduction">
          以酒店管理系统、自助入住设备为基础，形成初步的智能
          酒店解决方案，并且可以通过进一步整合产业的上下游资
          源，构建完整的智能旅居物联网生态 。
        </p>
        <div class="blackLine"></div>
      </div>
    </div>
    <div class="separator"></div>
      <ul class="footer">
        <li>关于我们</li>
        <li>服务协议</li>
        <li>技术咨询</li>
        <li>业务合作</li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Modreat'
}
</script>

<style scoped>
.image{
  height: 42.86vw;
  background-image: url("../assets/bed_s.jpg");
  background-size:100% 100%;
}
.name{
  padding-top:14.9vw;
  padding-left:30.73vw;
  font-size:3.125vw;
  font-family: "PingFang SC";
}
.nameText{
  padding-top:1.61vw;
  text-align: center;
  font-size:1.25vw ;
  font-family: "PingFang SC";
  font-weight:100;
  line-height:1.875vw;
}
.body{
  height:87.5vw;
  background-color: #F2F2F2;
}
.core{
  padding-left:10.42vw;
  padding-top:5.57vw;
  text-align: left;
  font-size:1.04vw;
  font-family: "PingFang SC";
  font-weight: 700;
  color:#338AE5;
}
.coreText{
  padding-left:10.31vw;
  padding-top:0.83vw;
  text-align:left;
  font-size:2.5vw;
  font-family: "PingFang SC";
  font-weight: 800;
  color:#101010;
  line-height:3.125vw;
}
.coreBlock{
  float:left;
  width:41.67vw;
  height:26.04vw;
  background-color: #FFFFFF;
  margin-left:0.52vw;
  margin-top:5.52vw;
}
.coreBlock:first-of-type{
  margin-left:8.07vw;
}
.picture{
  float:left;
  width:11.56vw;
  height:9.74vw;
  margin-left:3.91vw;
  margin-top:4.22vw;
}
.literal{
  float:left;
  width:19.27vw;
  height:17.4vw;
  margin-top:4.4vw;
  margin-left:4.58vw;
}
.systemTitle{
  font-size:1.875vw;
  font-family: "PingFang SC";
  color:#101010;
  font-weight:800;
}
.systemText{
  height:12.2vw;
  margin-top: 2.14vw;
  font-size:0.83vw;
  font-family: "PingFang SC";
  color:#101010;
  font-weight:200;
  line-height:1.41vw;
}
.systemLink{
  text-decoration: none;
  font-size:0.83vw;
  font-family: "PingFang SC";
  color:#169BD5;
}
.systemLink:last-child{
  margin-left: 1.3vw;
}
.coreRectangle{
  float:left;
  width:83.85vw;
  height:23.44vw;
  background-color: #FFFFFF;
  margin-left:8.07vw;
  margin-top:0.52vw;
}
.square{
  width:20.9vw;
  height:14.27vw;
  float:left;
  margin-top:4.43vw;
  margin-left:4.49vw;
}
.square:first-of-type{
  margin-left:5.85vw;
}
.icon{
  width:3.44vw;
  height:3.44vw;
}
.grayLine{
  height:1px;
  background-color: #C9C9C9;
  margin-top:1.04vw;
}
.software,.faceID,.chain{
  font-size:1.25vw;
  font-family: "PingFang SC";
  font-weight:800;
  margin-top:1.2vw;
}
.software{
  color:#DC3389;
}
.faceID{
  color:#16B0C9;
}
.chain{
  color:#338AE5;
}
.introduction{
  height:5.45vw;
  margin-top:1.2vw;
  font-size:0.83vw;
  font-family: "PingFang SC";
  color:#101010;
  font-weight: 300;
  line-height:1.46vw;
}
.blackLine{
  height:0.26vw;
  background-color: #333333;
}
.separator{
  margin-top:64.85vw;
  margin-left:auto;
  margin-right:auto;
  width:57.29vw;
  height:1px;
  background-color: #AEAEAE;
}
.footer{
  width:15.625vw;
  height:1.04vw;
  margin-left:20.99vw;
  margin-top:1.31vw;
  float:left;
  list-style-type:none;
}
.footer li{
  display:inline;
  color: #797979;
  font-size:0.677vw;
  text-align: center;
  padding: 0 0.26vw 0 0.47vw;
  border-left: 1px solid #AEAEAE;
}
.footer li:first-child{
  border-left: none;
}
</style>

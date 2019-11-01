<template>
   <div class="starProduct">

     <div class="starProductLeft">
       <div class="starProductLeftOne">明星产品</div>
       <div class="starProductLeftTwo">
         <swiper  :options="swiperOption" ref="mySwiper" name="swiper" >
           <swiper-slide v-for="(item,index) in productData" :key="index">
              <div class="show-img">
<!--                <img src="../../assets/images/bg.jpg" alt="">-->
                <img :src="item.url" alt="">
              </div>
           </swiper-slide>
<!--           <swiper-slide>-->
<!--             <div class="show-img">-->
<!--               <img src="../../assets/images/bg.jpg" alt="">-->
<!--             </div>-->
<!--           </swiper-slide>-->
<!--           <swiper-slide>-->
<!--             <div class="show-img">-->
<!--               <img src="../../assets/images/bg.jpg" alt="">-->
<!--             </div>-->
<!--           </swiper-slide>-->
         </swiper>
         <div class="swiper-pagination"></div>
       </div>
       <div class="starProductLeftThree">热卖产品排行</div>
       <div class="starProductLeftFour">
          <div class="rankingItem" v-for="(item,index) in productData" :key="index">
            <img src="../../assets/images/ranking_1.png" alt="" class="rankingItem_a" v-if="index === 0">
            <img src="../../assets/images/ranking_2.png" alt="" class="rankingItem_a" v-if="index === 1">
            <img src="../../assets/images/ranking_3.png" alt="" class="rankingItem_a" v-if="index === 2">
            <div class="rankingItem_aLast" v-if="index > 2">{{index + 1}}</div>
            <div class="rankingItem_b">{{item.name}}</div>
            <progress  :value="item.num" max="1000000" :class="item.highlight === true ? 'rankingItem_c' : 'rankingItem_cLast'" ></progress>
            <div class="rankingItem_e">{{item.num}}</div>
            <div class="rankingItem_f" :class="item.dis > 0 ? 'rankingItem_fAdd' : 'rankingItem_fDis'">{{item.dis | plusOrMinus}}</div>
          </div>
       </div>
     </div>


     <div class="starProductRight">
       <div class="starProductRightOne">
         <img src="../../assets/images/goSetting_title.png" alt="" class="starProductRightOne_a">
         <div class="starProductRightOne_b">选择客户区域并填写该区域的数字</div>
       </div>
       <div class="starProductRightTwo">
         <table class="table" style="width: 500px">
           <thead>
           <tr class="starProductRightTwoTr">
             <th width="15%" class="textCenter thTitle">序号</th>
             <th width="25%" class="textLeft thTitle">产品名称</th>
             <th width="15%" class="textLeft thTitle">数量</th>
             <th width="15%" class="textLeft thTitle">增减值</th>
             <th width="30%" class="textCenter">
              <div class="starProductRightTwo_a">产品图片</div>
              <div class="starProductRightTwo_b">建议尺寸280*280以上</div>
             </th>
           </tr>
           </thead>
           <tbody v-if="productData.length > 0" >
             <tr v-for="(item,index) in productData" :key="index" class="starProductRightTwoTrTwo">
               <td class="textCenter">{{index + 1 }}</td>
               <td class="textLeft">
                 <span class="canClick" v-if="item.canUpdate_a === false" @click="updateName(index)">{{item.name}}</span>
                 <el-input v-if="item.canUpdate_a === true" v-model="item.name" maxLength="16" @blur="verifyName(index)"></el-input>
               </td>
               <td class="textLeft">
                 <span class="canClick" v-if="item.canUpdate_b === false" @click="updateNum(index)">{{item.num}}</span>
                 <el-input v-if="item.canUpdate_b === true" v-model="item.num" @blur="verifyNum(index)"></el-input>
               </td>
               <td class="textLeft">
                 <span class="canClick" v-if="item.canUpdate_c === false" @click="updateDis(index)">{{item.dis}}</span>
                 <el-input type="number" v-if="item.canUpdate_c === true" v-model="item.dis" @blur="verifyDis(index)"></el-input>
               </td>
               <td class="textCenter">
                 <div class="upload-img">
                   <input type="file"  @change="changeFile($event,index)" ref="uploadImg" accept=“image/*,video/*”  v-show="item.status == 0 || item.status == 3">
                   <i class="el-icon-plus addIcon"></i>
                   <!--上传成功-->
                   <div class="upload-con" v-if="item.url">
                     <img :src="item.url" alt="" v-if="item.url && item.type == 1" class="upload-file-img">
                     <video :src="item.url" v-if="item.url && item.type == 2"  class="upload-file-video"></video>
                     <img src="../../assets/images/deleteBtn.png" alt="" class="delete-upload-img" @click="deleteImg(index)">
                   </div>
                   <div class="upload-fail" v-if="item.status == 3">
                     <img src="" alt="">
                   </div>
                   <div class="progress1" v-if="item.status == 1">
                     <div class="progress1-t" ref="progress1-t" :style="'width:' + (item.progress)"></div>
                     <span ref="progress1-n">{{item.progress}}</span>
                   </div>
                 </div>
               </td>
             </tr>
           </tbody>

         </table>
       </div>

       <div class="button_106_style" style="margin-top: 101px">
         <a class="button_106_style_a">保存</a>
       </div>

     </div>


   </div>
</template>

<script src="@/assets/js/data/starProduct.js"></script>

<style scoped lang="scss" src="@/assets/css/data/starProduct.scss"></style>

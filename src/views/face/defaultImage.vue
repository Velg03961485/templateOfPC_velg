<template>
  <div class="defaultImg-list-page" :style="{height: boxHeight}">

    <div class="defaultBoxLeft">
      <div class="defaultBoxLeftOneTop">接待提醒</div>
      <img src="../../assets/images/bg.jpg" alt="" class="defaultBoxLeftOne">
      <div class="defaultBoxLeftTwo">
        欢迎梵克雅宝中国大区
        李总莅临指导工作!
      </div>
      <div class="defaultBoxLeftThree">
        <span class="defaultBoxLeftThree_a">李胜利 总经理</span>
        <span class="defaultBoxLeftThree_a defaultBoxLeftThree_b">公司：法国梵克雅宝这里公司名称可以填写二十个字</span>
      </div>
    </div>

    <div class="defaultBoxRight">

      <div class="defaultBoxRightOne">
        <img src="../../assets/images/goSetting_title.png" alt="" class="defaultBoxRightOne_a">
        <div class="defaultBoxRightOne_b">上传默认图片，建议尺寸500*500以上</div>
        <el-tooltip class="item staticsT_textImg" effect="dark"  placement="top-start">
          <div slot="content">
            图1 为系统自带图片 ，不可删除<br/>
            图2，3，4 位置可上传新的图片，可选中删除<br/>
            eg:当选择图x为默认展示图片时，无客流经过时接待提醒处展示图x 
          </div>
          <img src="../../assets/images/noKonw.png" alt="" class="contentFiveCenterTop_aTitImg">
        </el-tooltip>
      </div>

      <div class="defaultBoxRightTwo">

        <div class="defaultBoxRightItem" >
          <img src="../../assets/images/bg.jpg" alt="" class="defaultBoxRightItem_a" @click="chooseThisZero" :class="choseType[0] === true ? 'activityChose' : ''" >
        </div>

        <div class="defaultBoxRightItem">
          <div class="imgbox">
            <el-upload
              class="avatar-uploader"
              :action="importFileUrl()"
              :show-file-list="false"
              :data="upLoadData"
              :on-success="handleSuccessOne"
              :before-upload="beforeMaterialUpload" v-if="imageUrlOne === ''">
              <div  v-if="imageUrlOne" >
                <img :src="imgUrlHead + imageUrlOne" class="avatar" >
              </div>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <img v-if="imageUrlOne" :src="imgUrlHead + imageUrlOne" alt="" class="avatar" @click="chooseThisOne" :class="choseType[1] === true ? 'activityChose' : ''">
            <img v-if="imageUrlOne" src="../../assets/images/deleteBtn.png" alt="" @click="deleteThisOne" class="imgDeleteStyle">
          </div>
        </div>

        <div class="defaultBoxRightItem">
          <div class="imgbox">
            <el-upload
              class="avatar-uploader"
              :action="importFileUrl()"
              :show-file-list="false"
              :data="upLoadData"
              :on-success="handleSuccessTwo"
              :before-upload="beforeMaterialUpload" v-if="imageUrlTwo === ''">
              <div  v-if="imageUrlTwo" >
                <img :src="imgUrlHead + imageUrlTwo" class="avatar">
                <img src="../../assets/images/deleteBtn.png" alt="" class="imgDeleteStyle">
              </div>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <img v-if="imageUrlTwo" :src="imgUrlHead + imageUrlTwo" alt="" class="avatar" @click="chooseThisTwo" :class="choseType[2] === true ? 'activityChose' : ''">
            <img v-if="imageUrlTwo" src="../../assets/images/deleteBtn.png" alt="" @click="deleteThisTwo" class="imgDeleteStyle">
          </div>
        </div>

        <div class="defaultBoxRightItem">
          <div class="imgbox">
            <el-upload
              class="avatar-uploader"
              :action="importFileUrl()"
              :show-file-list="false"
              :data="upLoadData"
              :on-success="handleSuccessThree"
              :before-upload="beforeMaterialUpload" v-if="imageUrlThree === ''">
              <div  v-if="imageUrlThree" >
                <img :src="imgUrlHead + imageUrlThree" class="avatar">
                <img src="../../assets/images/deleteBtn.png" alt="" class="imgDeleteStyle">
              </div>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <img v-if="imageUrlThree" :src="imgUrlHead + imageUrlThree" alt="" class="avatar" @click="chooseThisThree" :class="choseType[3] === true ? 'activityChose' : ''">
            <img v-if="imageUrlThree" src="../../assets/images/deleteBtn.png" alt="" @click="deleteThisThree" class="imgDeleteStyle">
          </div>
        </div>

      </div>

      <div class="button_106_style bottomBtnStyle_de">
        <a  class="button_106_style_a">保存</a>
      </div>

    </div>

  </div>
</template>

<script src="@/assets/js/face/defaultImage.js"></script>

<style scoped lang="scss" src="@/assets/css/face/defaultImage.scss"></style>

<style lang="scss">
   .defaultImg-list-page{
     .el-upload--picture-card{
       width: 100px;
       height: 100px;
       line-height: 100px;
     }
     .el-upload-list--picture-card .el-upload-list__item-actions{
       width: 100px;
       height: 100px;
       line-height: 100px;
     }
     .el-upload-list__item-thumbnail{
       width: 100px;
       height: 100px;
     }
     .el-upload-list__item is-success{
       width: 100px;
       height: 100px;
     }
     .el-upload-list--picture-card .el-upload-list__item{
       width: 100px;
       height: 100px;
     }
   }
</style>

<template>
    <div class="contain">
        <div class="contain-top">
            <img src="../../assets/images/activity_tit.png" alt="">
            <p>上传默认图片，建议尺寸1440*960以上</p>
        </div>
        <div class="contain-con">
          <vuedraggable v-model="imgList" class="wrapper">
            <transition-group class="wrapperSpan">
              <li v-for="(item,index) in imgList" :key="item.id">
                <input type="file"  @change="changeFile($event,index)" ref="uploadImg" accept=“image/*,video/*”  v-show="item.status == 0 || item.status == 3">
                <i class="el-icon-plus addIcon"></i>
                <!--上传成功-->
                <div class="upload-con" v-if="item.url">
                  <img :src="item.url" alt="" v-if="item.url && item.type == 1" class="upload-file-img">
                  <video :src="item.url" v-if="item.url && item.type == 2"  class="upload-file-video"></video>
                  <img src="../../assets/images/deleteBtn.png" alt="" class="delete-upload-img" @click="deleteImg($event,index)">
                </div>
                <div class="upload-fail" v-if="item.status == 3">
                  <img src="" alt="">
                </div>
                <div class="progress1" v-if="item.status == 1">
                  <div class="progress1-t" ref="progress1-t" :style="'width:' + (item.progress)"></div>
                  <span ref="progress1-n">{{item.progress}}</span>
                </div>

                <!--<el-upload-->
                <!--:data="item"-->
                <!--class="avatar-uploader"-->
                <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                <!--:show-file-list="false"-->
                <!--:on-success="handleAvatarSuccess"-->
                <!--:before-upload="beforeAvatarUpload"-->
                <!--:on-change="changeFile">-->
                <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                <!--</el-upload>-->
              </li>
            </transition-group>
          </vuedraggable>
        </div>
        <div class="button_106_style">
            <a href="javascript:;" class="button_106_style_a">保存</a>
        </div>
    </div>
</template>

<script src="@/assets/js/culture/culturePropaganda.js"></script>

<style scoped lang="scss" src="@/assets/css/culture/culturePropaganda.scss"> </style>

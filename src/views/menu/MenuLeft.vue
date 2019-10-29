<template>
  <div class="left-menu1">
    <el-menu :default-active="currentMenu"
             class="el-menu-vertical-demo"
             :collapse="isCollapse"
             text-color="#fff"
             active-text-color="#FFFFFF"
             @select="handleSelect">

      <template v-for="(item,index) in tableData">
        <el-menu-item class="leftIcon" :index="item.front_url" :key="index" v-if="item.childList.length === 0 && item.id !== '' " :id="item.id">
          <div  :id="item.name">
            <!--<i :class="item.front_icon"></i>-->
              <img :src="iconUrlHead + item.front_icon_url + '.png'" alt="" style="margin-right: 15px;">
            <span slot="title">{{item.name}}</span>
          </div>

        </el-menu-item>
<!--v-else-->
        <el-submenu v-if="item.childList.length !== 0 && item.id !== '' "   :key="index"  :index="item.name">
         <template slot="title">
          <!--<i  :class="item.front_icon"></i>-->
             <img :src="iconUrlHead + item.front_icon_url + '.png'" alt="" style="margin-right: 15px;">
          <span slot="title">{{item.name}}</span>
         </template>
          <template v-for="(item1,index1) in item.childList">
          	<el-menu-item :index="item1.front_url" v-if="item1.id !== ''" :key="index1" style="padding-left:53px;" :id="item1.id" >
              <div  :id="item1.name">
              {{item1.name}}
              </div>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>




    </el-menu>
  </div>
</template>
<script src="@/assets/js/menu/MenuLeft.js"></script>
<style lang="scss"  src="@/assets/css/menu/MenuLeft.scss"></style>

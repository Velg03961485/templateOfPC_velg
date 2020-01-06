<!-- 用户登录后的首页 -->
<template>
    <div class="main-box">
        <div  class="header-wrap">
            <div :class="[isCollapse ? 'ml90' : 'ml190' , 'companyPoint']"><img src="../../assets/images/logo_2.png" style="width: 40px;height:40px"/></div>
            <div :class="[isCollapse ? 'ml90' : 'ml190' , 'company']">互宝互巴</div>
            <div class="top-menu" style="float:left;margin-left: 10px;height: 70px">
                <el-menu :default-active="horizontalIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         background-color="#fff"
                         text-color="#666666"
                         active-text-color="#457adb" style="height: 70px">

                    <el-menu-item v-for="(item,index) in topMenuData" :index="index+''" :key="index" style="height: 70px;width: 70px;" class="topMenuStyle" >{{item.name}}</el-menu-item>

                </el-menu>
            </div>
            <img :src="userImg" alt="" class="loginUserHead">
            <div class="user">
                <el-dropdown trigger="hover" >
                    <span class="el-dropdown-link" style="color:#2A2A2A;cursor: pointer">
                      您好，{{userName}}
                      <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="text-align:center;">
                        <el-dropdown-item divided @click.native="user_personal">个人中心</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout" command="logout" >退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <!--<span class="el-icon-yy-home_icon briefing-btn" @click="goDataView"></span>-->


        </div>
        <div class="left-menu-wrap">
        	<div class="leftNav">
              <!--<img  :width="isCollapse ? 54 : 84" src="../../assets/images/leftLogo.png" />-->
              <!--&lt;!&ndash;<img  v-if="isCollapse" src="../../assets/images/leftLogoMini.png"/>&ndash;&gt;-->
            </div>
            <!--<div class="left-arrow">-->
            	<!--<ul class="arrow-wrap">-->
            		<!--<li v-if="isCollapse" @click="isCollapse = false"><img class="moveImg" src="../../assets/images/right.png"/></li>-->
            		<!--<li v-if="!isCollapse" @click="isCollapse = true"><img class="moveImg" src="../../assets/images/left.png"/></li>            		-->
            	<!--</ul>-->
            <!--</div>-->
            <MenuLeft v-if="leftMenu.leftMenu1" :isCollapse="isCollapse" :isShow="leftMenu.leftMenu1"></MenuLeft>
        </div>
        <div class="content-wrap" ref="content" :style="isCollapse ? 'margin-left:74px;' : 'margin-left:190px;'">
            <router-view></router-view>
        </div>
    </div>
</template>
<script src="@/assets/js/menu/Main.js"></script>

<style lang="scss" scoped src="@/assets/css/menu/main.scss"></style>

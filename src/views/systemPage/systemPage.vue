<template>
    <div class="systemPage-list-page">

<!--      时间选择-->
      <div class="contentTwo">
        <el-form :inline="true" :model="timeFrom" class="demo-form-inline" style="margin-left: 0;margin-top: 20px;margin-right: 0;">
          <el-form-item  >
            <template>
              <div class="timeTitleBox">
                <div class="timeTitleStyle">时间选择</div>
                <el-date-picker
                  :picker-options="pickerOptionsSet"
                  v-model="timeFrom.time1"
                  type="date"
                  @change="isChoseTimeBtnOne"
                  placeholder="选择开始日期" style="width: 200px;margin-right: 5px;height: 40px !important;">
                </el-date-picker>-
                <el-date-picker
                  :picker-options="pickerOptionsSet"
                  v-model="timeFrom.time2"
                  type="date"
                  placeholder="选择结束日期" @change="isChoseTimeBtn" style="width: 200px;height: 40px !important;margin-left: 5px">
                </el-date-picker>
              </div>

            </template>
          </el-form-item>
          <el-form-item  style="line-height: 40px">
            <template>
              <el-radio-group v-model="timeFrom.tabPosition" @change="choseTimeTypeBtn" style="margin-bottom: 30px;">
                <el-radio-button label="0">全部</el-radio-button>
                <el-radio-button label="1">今天</el-radio-button>
                <el-radio-button label="2">本周</el-radio-button>
                <el-radio-button label="3">最近30天</el-radio-button>
                <el-radio-button label="4">最近90天</el-radio-button>
              </el-radio-group>
            </template>
          </el-form-item>

        </el-form>
      </div>
<!--      柱状图-->
      <CustomerLineData :lineFlag="lineFlag" :chartData="guestParameters" style="margin-top: 21px"></CustomerLineData>
<!--      环状图-->
      <ActivityRingTwo :timeTakeTwo="timeTakeTwo" :CusDataTwo="CusDataTwo" style="margin-top: 21px"></ActivityRingTwo>
<!--      饼状图-->
      <ActivityPie :timeing="timeing" :ageData="ageData" style="margin-top: 21px;" ></ActivityPie>



    </div>
</template>

<script src="@/assets/js/systemPage/systemPage.js"></script>

<style scoped lang="scss" src="@/assets/css/systemPage/systemPage.scss"></style>

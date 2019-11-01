<template>
    <div class="strategic-list-page">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="顾客分布/区域排名" name="first">
          <Customer></Customer>
        </el-tab-pane>
        <el-tab-pane label="明星产品/热卖排行" name="second">
          <StarProduct></StarProduct>
        </el-tab-pane>
      </el-tabs>

    </div>
</template>

<script src="@/assets/js/data/StrategicData.js"></script>

<style scoped lang="scss" src="@/assets/css/data/StrategicData.scss"></style>

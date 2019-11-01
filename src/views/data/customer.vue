<template>
    <div class="customer">

      <div class="customerLeft">
        <div class="customerLeftOne">客户分布</div>
        <div class="customerLeftTwo">区域排名</div>
        <div class="customerLeftThree">
          <DataLine :chartData="chartData" :lineFlag="lineFlag"></DataLine>
        </div>
      </div>

      <div class="customerRight">
        <el-form ref="formCustomer" :model="formCustomer" :rules="formCustomerRules" label-width="80px">
          <el-form-item label="公司名称" prop="name">
            <div class="customerRightOneBox">
              <el-input v-model="formCustomer.name" @input="nameChangeInput" maxLength="16" style="width: 187px;margin-left: 0;margin-right: 0"></el-input>
              <span class="customerRightOne">
                <span class="customerRightOne_a">{{nameNumber}}</span>
                <span class="customerRightOne_b">/16</span>
              </span>
            </div>
          </el-form-item>
          

          <div class="customerRightTwo">

            <div class="customerRightTwoItem" v-for="(item,index) in areaData">
              <div class="customerRightTwoItemTop">
                <div class="customerRightTwoItemTop_a" :style="{backgroundColor: item.color}"></div>
                <div class="customerRightTwoItemTop_b">{{item.name}}</div>
              </div>
              <div class="customerRightTwoItemCenter" v-for="(list,num) in item.children">
                <el-checkbox v-model="list.check" class="customerRightTwoItemCenter_a"></el-checkbox>
                <div class="customerRightTwoItemCenter_b">{{list.name}}</div>
                <el-input class="customerRightTwoItemCenter_c" @blur="verifyInputBtn(index,num)" :disabled="list.check === true ? false : true" v-model="list.data"></el-input>
              </div>
            </div>

          </div>

          <div class="customerRightThree">
            <img src="../../assets/images/goSetting_title.png" alt="" class="customerRightThree_a">
            <div class="customerRightThree_b">选择客户区域并填写该区域的数字</div>
          </div>

          <div class="button_106_style" style="margin-top: 26px" @click="saveCustomerData">
            <a class="button_106_style_a">保存</a>
          </div>

        </el-form>
      </div>

    </div>
</template>

<script src="@/assets/js/data/customer.js"></script>

<style scoped lang="scss" src="@/assets/css/data/customer.scss"></style>

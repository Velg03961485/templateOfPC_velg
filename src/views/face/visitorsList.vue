<template>
    <div class="visitorsList-list-page">

      <el-form :inline="true"  size="mini" >
        <el-form-item  label="关注时间">
          <el-date-picker
            :picker-options="pickerOptionsSet"
            v-model="search.createBeginTime"
            type="date"
            placeholder="选择开始日期" style="width: 150px;margin-right: 5px">
          </el-date-picker>-
          <el-date-picker
            :picker-options="pickerOptionsSet"
            v-model="search.createEndTime"
            type="date"
            placeholder="选择结束日期" @change="timeChoseBtn_one" style="width: 150px">
          </el-date-picker>

        </el-form-item>
        <el-form-item  label="注册时间">
          <el-date-picker
            :picker-options="pickerOptionsSet"
            v-model="search.registrationBeginTime"
            type="date"
            placeholder="选择开始日期" style="width: 150px;margin-right: 5px">
          </el-date-picker>-
          <el-date-picker
            :picker-options="pickerOptionsSet"
            v-model="search.registrationEndTime"
            type="date"
            placeholder="选择结束日期" @change="timeChoseBtn_tow" style="width: 150px">
          </el-date-picker>
        </el-form-item>
        <el-form-item  label="顾客类型">
          <div style="display: flex;margin-left: 0">
            <el-select v-model="search.userType" placeholder="请选择">
              <el-option
                v-for="item in customerTypeData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <div class="globalSearchBtn" @click="getStoreListByQuery" style="margin-left: 15px">
              <a class="globalSearchBtn_a">查询</a>
            </div>



          </div>
        </el-form-item>



      </el-form>
      <template>
        <el-table stripe
                  :data="tableData"
                  style="width: 100%"
                  ref="multipleTable"
                  tooltip-effect="dark"
                  @selection-change="handleSelectionChange"
        >

<!--          <el-table-column-->
<!--            label="序号"-->
<!--            width="80" align="center" type="index" :index="indexMethod">-->
<!--          </el-table-column>-->
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="顾客姓名" align="center">
            <template slot-scope="scope" style="text-align: center">
              <span>{{scope.row.name === '' ? '--' : scope.row.name}}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="昵称" align="left">
            <template slot-scope="scope" style="text-align: left">
              <span>{{scope.row.nickname === '' ? '--' : scope.row.nickname}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="性别" align="center">
            <template slot-scope="scope" style="text-align: center">
              <span>{{scope.row.sex === '0' ? '--' : (scope.row.sex === '1' ? '男' : '女')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="生日" align="left">
            <template slot-scope="scope" style="text-align: left">
              <span>{{scope.row.birth === '' ? '--' : scope.row.birth}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="年龄" align="center">
            <template slot-scope="scope" style="text-align: center">
              <span>{{scope.row.age === '' ? '--' : scope.row.age}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="手机号" align="left">
            <template slot-scope="scope" style="text-align: left">
              <span>{{scope.row.telephone}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="关注时间" align="center">
            <template slot-scope="scope" style="text-align: center">
              <span>{{scope.row.creatTime === '' ? '--' : scope.row.creatTime}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="注册时间" align="center">
            <template slot-scope="scope" style="text-align: center">
              <span>{{scope.row.registrationTime === '' ? '--' : scope.row.registrationTime}}</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页 -->
      <div v-if="tableData.length > 0" class="paginationBox">
        <el-pagination  class="pagination" layout="prev, pager, next" small @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-size="requestParameters.page_size" :total="pagination.totalCount">
        </el-pagination>
      </div>


    </div>
</template>

<script src="@/assets/js/systemPage/visitorsList.js"></script>

<style scoped>

</style>

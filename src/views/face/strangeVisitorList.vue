<template>
    <div>
        <el-form :inline="true"  size="mini">
            <el-form-item  label="">
                <el-date-picker
                        v-model="time1"
                        type="date"
                        placeholder="选择开始日期" style="width: 150px;margin-right: 5px">
                </el-date-picker>-
                <el-date-picker
                        v-model="time2"
                        type="date"
                        placeholder="选择结束日期" style="width: 150px">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button plain size="mini" @click="selectList" style="border: solid 1px #457adb;color: #457adb;">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="companyStaffList"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="序号" type="index"
                    :index="indexMethod">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="陌生访客人脸ID"
            >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="照片"
            >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="来访时间"  >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="来客提醒" >
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status_active === '0' ? false : true" active-color="#13ce66" inactive-color="#bfbfbf" @change="changeImportantBtn(scope.row)"></el-switch>
                </template>

            </el-table-column>
            <el-table-column
                    label="操作" width="160" align="center">
                <template slot-scope="scope">
                    <div class="btnStyleActivity">
                        <div class="btnStyleItemActivity  oneActivityS" @click="deleteBtn(scope.row)">删除</div>
                        <div class="btnStyleItemActivity  oneActivityS" @click="updateBtn(scope.row)" >修改</div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <div v-if="companyStaffList.length > 0" class="paginationBox">
            <el-pagination  class="pagination" layout="prev, pager, next" small @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-size="page_size" :total="pagination.totalCount">
            </el-pagination>
        </div>
        <el-dialog
                title="修改"
                :visible.sync="dialogAdd"
                width="500px"
                @closed="handleCloseDe('addForm')" >
            <div class="add-customer">
                <el-form ref="addForm" :model="addForm" label-width="80px">
                    <el-form-item label="客户类型">
                        <el-select v-model="addForm.type" placeholder="请选择" size="mini">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <!--<span slot="footer" class="dialog-footer">-->
                        <el-button size="medium" @click="sureAdd('addForm')" style="    margin-left: 30px;" type="primary">确 定</el-button>
                        <el-button size="medium" @click="handleCloseDe('addForm')" class="cancelBtn marginBtn">取 消</el-button>
                        <!--</span>-->
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>
<script src="@/assets/js/face/strangeVisitorList.js"></script>

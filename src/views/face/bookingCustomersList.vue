<template>
    <div>
        <div class="button_70_sure" style="float: right;margin-bottom: 20px">
            <a href="javascript:;" class="button_70_sure_a" @click="addInfo">新增</a>
        </div>
        <el-table
                :data="importantCustomersList"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="序号"
                    width="60"  type="index"
                    :index="indexMethod">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="客户姓名"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="照片"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="职位" width="100">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="公司名称" >
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="欢迎语"  >
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="新增时间"  width="160">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="来客提醒" width="90">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status_active === '0' ? false : true" active-color="#13ce66" inactive-color="#bfbfbf" @change="changeImportantBtn(scope.row)"></el-switch>
                </template>

            </el-table-column>
            <el-table-column
                    label="操作" width="300" align="center">
                <template slot-scope="scope">
                    <div class="btnStyleActivity">
                        <div class="btnStyleItemActivity  oneActivityS" @click="deleteBtn(scope.row)">删除</div>
                        <div class="btnStyleItemActivity  oneActivityS" @click="updateBtn(scope.row)" >修改</div>
                        <div class="btnStyleItemActivity  oneActivityS"  style="width: auto;" @click="reminderSettings(scope.row)">接待提醒设置</div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        <div v-if="importantCustomersList.length > 0" class="paginationBox">
            <el-pagination  class="pagination" layout="prev, pager, next" small @current-change="handleCurrentChange" :current-page="pagination.currentPage" :page-size="page_size" :total="pagination.totalCount">
            </el-pagination>
        </div>
        <el-dialog
                :title="title"
                :visible.sync="dialogAdd"
                width="500px"
                @closed="handleCloseDe('addForm')" >
            <div class="add-customer">
                <el-form ref="addForm" :model="addForm" label-width="80px"  :rules="insertRules">
                    <el-form-item label="访客姓名" prop="name">
                        <el-input v-model="addForm.name" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="照片">
                        <div class="uploadImg">
                            <el-upload
                                    ref='upload'
                                    :action="imgUploadUrl()"
                                    list-type="picture-card"
                                    accept="image/png,image/jpg,image/jpeg"
                                    :limit='1'
                                    :data="uploadToken"
                                    :file-list="editfileList"
                                    :on-exceed='exceedCallback'
                                    :on-success="getUploadImage"
                                    :on-error="uploadImgError"
                                    :on-remove="removeUploadImg"
                                    :before-upload="beforeAvatarUpload"
                                    :on-change="progressTipImg">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input v-model="addForm.name"  size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="公司名称">
                        <el-input v-model="addForm.name"  size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="欢迎语">
                        <div class="textStyle">
                            <el-input type="textarea" :rows="2" v-model="addForm.describe" maxlength="20" @input="getDescribeOneNum(addForm.describe)" class="cratedTextarea"></el-input>
                            <div class="text_numberStyle">
                                <span class="input_numberStyle_a">{{describeNum}}</span>
                                <span class="input_numberStyle_b">/20</span>
                            </div>
                        </div>
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

        <el-dialog
                title="接待提醒设置"
                :visible.sync="dialogReminds"
                width="500px"
                @closed="handleCloseDes('remindsForm')" >
            <div class="reminds-customer">
                <el-form ref="remindsForm" :model="remindsForm" label-width="80px"  :rules="insertRules" >
                    <el-form-item label="提醒方式">
                        <el-select v-model="remindsForm.remindsStyle" placeholder="请选择" size="mini">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="展示时长" v-if="remindsForm.remindsStyle == 0">
                        <el-select v-model="remindsForm.showTime" placeholder="请选择" size="mini">
                            <el-option
                                    v-for="item in timeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="照片" v-if="remindsForm.remindsStyle == 2">
                        <div class="uploadImg">
                            <ul>
                                <li v-for="item in defaultPictureList" @click="selectImg(item)">
                                    <img src="../../assets/images/bg.jpg" alt="">
                                    <img src="../../assets/images/selectedimg.png" alt="" class="xuanzhong" v-if="item.isSelect">
                                </li>
                            </ul>
                        </div>
                    </el-form-item>
                    <el-form-item label="照片" v-if="remindsForm.remindsStyle == 1">
                        <div class="uploadImg">
                            <el-upload
                                    ref='upload'
                                    :action="imgUploadUrl()"
                                    list-type="picture-card"
                                    accept="image/png,image/jpg,image/jpeg"
                                    :limit='1'
                                    :data="uploadToken"
                                    :file-list="editfileList"
                                    :on-exceed='exceedCallback'
                                    :on-success="getUploadImage"
                                    :on-error="uploadImgError"
                                    :on-remove="removeUploadImg"
                                    :before-upload="beforeAvatarUpload"
                                    :on-change="progressTipImg">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="展示时间" v-if="remindsForm.remindsStyle != 0">
                        <el-date-picker
                                v-model="remindsForm.time"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期" size="mini" :clearable="false">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <!--<span slot="footer" class="dialog-footer">-->
                        <el-button size="medium" @click="sureAdd('addForm')" style="    margin-left: 30px;" type="primary">确 定</el-button>
                        <el-button size="medium" @click="handleCloseDe('remindsForm')" class="cancelBtn marginBtn">取 消</el-button>
                        <!--</span>-->
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>
<script src="@/assets/js/face/bookingCustomersList.js"></script>
<style scoped lang="scss" src="@/assets/css/face/importantCustomersList.scss"></style>
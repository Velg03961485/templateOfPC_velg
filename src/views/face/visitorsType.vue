<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="访客类型"
                    width="180" >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="人数"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="欢迎语">
                <template slot-scope="scope">
                    <div class="welcomeStr">
                        <p>{{scope.row.str}}</p>
                        <img src="../../assets/images/edit.png" alt="" @click="updateBtn(scope.row)">
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    label="照片展示时长"
                    >
                <template slot-scope="scope">
                    <el-select v-model="scope.row.time" placeholder="请选择" size="mini">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column
                    label="来客提醒">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status_active === '0' ? false : true" active-color="#13ce66" inactive-color="#bfbfbf" @change="changeImportantBtn(scope.row)"></el-switch>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="编辑"
                :visible.sync="dialogEdit"
                width="500px"
                @closed="handleCloseDe('editForm')" >
            <div class="add-customer">
                <el-form ref="editForm" :model="editForm" label-width="80px">
                    <el-form-item label="访客类型">
                        <span>{{editForm.type}}</span>
                    </el-form-item>
                    <el-form-item label="欢迎语">
                        <div class="textStyle">
                            <el-input type="textarea" :rows="2" v-model="editForm.describe" maxlength="20" @input="getDescribeOneNum(editForm.describe)" class="cratedTextarea"></el-input>
                            <div class="text_numberStyle">
                                <span class="input_numberStyle_a">{{describeNum}}</span>
                                <span class="input_numberStyle_b">/20</span>
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <!--<span slot="footer" class="dialog-footer">-->
                        <el-button size="medium" @click="sureEdit('editForm')" style="    margin-left: 30px;" type="primary">确 定</el-button>
                        <el-button size="medium" @click="handleCloseDe('editForm')" class="cancelBtn marginBtn">取 消</el-button>
                        <!--</span>-->
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>


<script src="@/assets/js/face/visitorsType.js"></script>

<style scoped>
    .welcomeStr{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .welcomeStr p{
        margin: 0;
    }
    .welcomeStr img{
        width: 18px;
        height: 18px;
        margin: 2px 20px 0 0;
    }
    .textStyle{
        position: relative;
    }
    .text_numberStyle{
        position: absolute;
        bottom: -9px;
        right: -40px;
    }
    .input_numberStyle_a{

        color: #68a2f9;
    }
</style>

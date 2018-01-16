<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>
         <div>
            <el-button size="mini" plain icon="el-icon-plus">新增</el-button>
            <el-button size="mini" plain icon="el-icon-check">全选</el-button>
            <el-button size="mini" plain icon="el-icon-delete">删除</el-button>
            <el-input style="width: 200px; float: right;" size="mini"
                placeholder="请输入内容" prefix-icon="el-icon-search"
               ></el-input>
        </div>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="标题" >
                <template slot-scope="scope">
                <el-tooltip placement="right">
                    <div slot="content">
                        <img style="width: 200px" :src="scope.row.imgurl" alt="">
                        </div>
                        <router-link to="{name:'goodsCtEdit',params: { id: scope.row.id }}">{{scope.row.title}}</router-link>
                </el-tooltip>

                </template>
            </el-table-column>
            <el-table-column prop="categoryname" label="所属类别" width="120">
            </el-table-column>
            <el-table-column prop="stock_quantity" label="库存" width="120">
            </el-table-column>
            <el-table-column prop="market_price" label="市场价"  width="120">
            </el-table-column>
            <el-table-column prop="sell_price" label="销售价"  width="120">
            </el-table-column>
            <el-table-column label="状态"  width="120">
                <template slot-scope="scope">
                    
                </template>
            </el-table-column>
            <el-table-column  label="日期"  width="120">
            </el-table-column>
        </el-table>

</div>

</template>
<script>
    export default {
        data() {
            return {
                tableData3: [{
                    id: 103,
                    title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
                    is_top: 1,
                    is_hot: 1,
                    is_slide: 1,
                    categoryname: "男装",
                    img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                    imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                    goods_no: "NZ0000000002",
                    stock_quantity: 200,
                    market_price: 1000,
                    sell_price: 800
                },
                    {
                        id: 103,
                        title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
                        is_top: 1,
                        is_hot: 1,
                        is_slide: 1,
                        categoryname : "男装",
                        img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                        imgurl: "http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
                        goods_no: "NZ0000000002",
                        stock_quantity: 200,
                        market_price: 1000,
                        sell_price: 800
                    }],
                           gsListQuery: {
                    pageIndex: 1,
                    pageSize: 10,
                    searchvalue: ''
                },

                // 分页相关数据
                page: {
                    pageSizes: [10, 20, 30, 40],
                    total: 100
                }
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>



<style>

    .el-main{
        text-align: left;
        line-height: normal;
    }
</style>
<template>
    <div class="dropx">
        <DragSort
            :imageList="imageList"
            :sortType="'exchange'"
            :item-class="'citem'"
            @change="sortChange"
        />
    </div>

    <div class="dropx">
        <DragSort
            :imageList="imageList"
            :sortType="'insert'"
            :item-class="'bitem'"
            @change="sortChange"
        />
    </div>
	
	<div class="test"></div>
</template>

<script>
import DragSort from '../../components/DragSort.vue'

export default {
    name: 'App',
    components: {
        DragSort
    },
    setup() {
        const imageList = [
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/PDF%402x.png',
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud-product.png',
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud_coupon_bg.png',
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud_coupon_icon.png',
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/patient_logo.png',
            'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/service2.png',
        ]

        function sortChange(newArr) {
            console.log(newArr);
        }

        return {
            imageList,
            sortChange
        }
    }
}
</script>

<style scoped>
.dropx {
    width: 80vw;
    height: 200px;
    border: 1px dashed #999;
    margin: 50px auto;
}
</style>
<style>
.citem {
    border: 1px dashed red;
}
.bitem {
    border: 1px dashed green;
}
.test{
	width: 100px;
	height: 100px;
	background-color: red;
	border:2px solid yellow;
}
</style>



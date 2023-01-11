<template>
  <div class="dragList">
    <div class="dragList-list1">
      <h3 style="text-align:center">标签选择</h3>
      <Draggable :list="list2" item-key="id" :animation="100" :sort='false' :group="{name: 'article',pull:'clone'}"  @end="end1" class="dragArea1">
        <template #item="{ element }"  >
          <div class="list-complete-item1">
            <div class="list-complete-item-handle2"> {{element.name}}</div>
          </div>
        </template>
      </Draggable>
    </div>

    <div class="dragList-list2">
      <h3 style="text-align:center">拖动至此处</h3>
	  <!-- <div class="list-complete-item2">
	    <div class="list-complete-item-handle">{{element.name}}</div>
	    <div>
	      <i class="el-icon-delete"  @click="handleDel(index, element.id)"></i>
	    </div>
	  </div> -->
      <Draggable :list="list1" item-key="id"  :group="{sort:true}"  :disabled="false"  @start="start2" @end="end2" class="dragArea2" >
        <template #item="{ element,index }" >
          <img :src="element" alt="" class="img">
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script>
	// 参考:https://www.cnblogs.com/lt66/p/15533021.html#:~:text=vue3%E4%B8%AD%E4%BD%BF%E7%94%A8draggable%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%85%83%E7%B4%A0%E7%9A%84%E6%8B%96%E6%8B%BD%2C%E6%8E%92%E5%BA%8F%EF%BC%8C%E5%85%8B%E9%9A%86,vue2.x%E7%89%88%E6%9C%AC%E4%B8%AD%E5%88%A9%E7%94%A8draggable%E6%8F%92%E4%BB%B6%E5%AE%9E%E7%8E%B0%E5%85%83%E7%B4%A0%E7%9A%84%E6%8B%96%E6%8B%BD%2C%E6%8E%92%E5%BA%8F%EF%BC%8C%E5%85%8B%E9%9A%86%E7%9A%84%E4%BE%8B%E5%AD%90%E7%BD%91%E4%B8%8A%E6%9C%89%E5%BE%88%E5%A4%9A%EF%BC%8C%E8%BF%99%E9%87%8C%E4%B8%8D%E5%86%8D%E8%B5%98%E8%BF%B0%EF%BC%8C%E6%9C%89%E7%AF%87%E6%96%87%E7%AB%A0%E5%86%99%E5%BE%97%E5%BE%88%E4%B8%8D%E9%94%99%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%8F%82%E8%80%83%EF%BC%9Ahttps%3A%2F%2Fblog.csdn.net%2Fblue__k%2Farticle%2Fdetails%2F120202902
import {ref,reactive} from 'vue'
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  setup() {
    const disabled = ref(false)
    const list1 = reactive([
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/PDF%402x.png',
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud-product.png',
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud_coupon_bg.png',
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/cloud_coupon_icon.png',
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/patient_logo.png',
		'https://zhonghehulianwang.oss-cn-hangzhou.aliyuncs.com/_f/icon/service2.png',
	])
    const list2 = reactive(
      [
        {id: 1, name: '标签1'}, 
        {id: 2, name: '标签2'}, 
        {id: 3, name: '标签3'}, 
        {id: 4, name: '标签4'}, 
        {id: 5, name: '标签5'}, 
      ]
    )
    const end1 = (ev) => {
      console.log("拖动结束1",ev)
    }
    const start2 = (event) => {
      console.log("开始拖动",event)
    }
    const end2 = (ev) => {
      console.log("拖动结束2",ev)
    }
    const handleDel = (index, id) => {
      list1.splice(index, 1)
      let q = list2.find((value, index, arr) => {
        return value.id === id
      })
    }
    return {
      disabled,
      list1,
      list2,
      end1,
      start2,
      end2,
      handleDel
    }
  }
}
</script>

<style lang="scss"  scoped>
  .dragList{
    width: 500px;
    height:300px;
    padding: 20px;
  }
  .dragList-list1{
    width: 120px;
  }
  .list-complete-item1{
    cursor: pointer;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
    margin-bottom: 10px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #bfcbd9;
    transition: all 1s;
  }
  .dragArea1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dragList-list2{
    margin-top: 20px;
    height: 200px;
    border: 1px solid #8a8a8a;
  }
  .dragArea2{
    display: flex;
    align-items: center;
	flex-wrap: wrap;
  }
  .list-complete-item2 {
    cursor: pointer;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
    margin: 10px;
    width: 100px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bfcbd9;
    transition: all 1s;
	flex-shrink: 0;
  }
  .img{
	  width: 50px;
	  height: 50px;
  }
</style>
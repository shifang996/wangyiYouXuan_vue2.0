<template>
  <div>
	<van-sticky>
 <classifyheaderCom></classifyheaderCom></van-sticky>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="item" v-for="(item,index) in cateLtext" :key="index" />
    </van-sidebar>
	<footerComponent> </footerComponent>
  </div>
</template>

<script>
//引入分类也搜索插件
import classifyheaderCom from '../../components/classify_header/index.vue';
import footerComponent from '../../components/footer_components'
import { classifyList } from "../../api";
export default {
  name: "classify",
  components:{
classifyheaderCom,
footerComponent,
  },
  data() {
    return {
      activeKey: 0,
      cateLtext: ""
    };
  },
  mounted() {
    classifyList().then(res => {
      this.cateLtext = res.data;
    });
  }
};
</script>

<style>
</style>

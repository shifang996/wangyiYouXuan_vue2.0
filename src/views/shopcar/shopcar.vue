<template>
	<div>
		<van-row>
			<van-nav-bar title="购物车" left-arrow>
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</van-row>
		<!-- 商品 -->
		<div class="shopcar_set">
			<div class="shopreal">
				<van-card v-for="(item,index) in reader_shopcate" :key="index" num="1" :price="item.price" :tag="item.orgin" :title="item.title" :thumb="item.imgurl">
					<div slot="footer">
						<!-- 单选框 -->
						<van-checkbox-group v-model="result" ref="checkboxGroup">
							<van-checkbox name="a" class="title_box_content">{{item.title}}</van-checkbox>
						</van-checkbox-group>
						<!-- 实物加减 -->
						<span class="payMoneny">
							￥
							<span>{{item.price}}</span>
						</span>
						<van-button size="mini">+</van-button>
						<span>1</span>
						<van-button size="mini">-</van-button>
					</div>
				</van-card>
			</div>
		</div>
		<div class="zongjia">
			<van-checkbox-group v-model="result" ref="checkboxGroup" class="zongji_button">
				<van-checkbox name="a">总计</van-checkbox>
			</van-checkbox-group>
			<b>
				<span>￥</span>
				<span>45454</span>
			</b>
		</div>
		<!-- 底部导航 -->
		<!-- {{shopcarlist}} -->
		<footercomponents />
	</div>
</template>

<script>
	import footercomponents from "../../components/footer_components/index.vue";
	import {
		mapState,
		mapGetters
	} from 'vuex';
	export default {
		name: "shopcar",
		components: {
			footercomponents
		},
		data() {
			return {
				result: [],
				shopcateList: [],
			};
		},
		computed: {
			...mapState(['shopcarlist']),
			...mapGetters(['reader_shopcate'])
		},
		methods: {
		},
		mounted() {
			console.log(this.shopcateList)
		}
	};
</script>

<style scoped="scoped">
	.shopcar_set {
		width: 100%;
		background: #666;
	}

	.zongjia {
		position: relative;
		bottom: 0;
	}

	.zongji_button {
		display: inline;
	}

	.title_box_content {
		width: 100%;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>

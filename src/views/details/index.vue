<template>
	<div>
		<van-sticky>
			<van-nav-bar title="商品详情" left-text="返回" left-arrow :shopid="info.shopid">
			</van-nav-bar>
		</van-sticky>
		<div class="inforImg_set">
			<img :src="info.imgherf" />
		</div>
		<div class="infor_price">
			￥
			<span class="priceNum" :shoppid="info.shopid">{{info.sellprice}}</span>
		</div>
		<!-- 详情 -->
		<h3 class="shopdet_info">
			<div><span class="shopdet_info_selfset">{{info.selfsell}}</span>{{info.shopname}}</div>
		</h3>
		<!-- 底部付款支付栏 -->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" />
			<van-goods-action-icon icon="cart-o" text="购物车" to="/shopcar" />
			<van-goods-action-button type="warning" text="加入购物车" @click="shopadd(tips)" :shoppid="info.shopid" />
		</van-goods-action>
		<!-- {{shopcarlist}} -->
	</div>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex';
	// import {
	// 	SHOPCAR_ADD
	// } from '../../store/index.js'
	export default {
		name: "catedetails",
		data() {
			return {
				tips: this.$route.query,
				info: {
					imgherf: this.$route.query.imgurl,
					shopname: this.$route.query.title,
					selfsell: this.$route.query.orgin,
					sellprice: this.$route.query.price,
					merbership: this.$route.query.member,
					shopid: this.$route.query.cateid,
					similery: this.$route.query.similarity
				}
			};
		},
		methods: {
			...mapMutations(['shopadd']),
		},
		computed: {
			...mapState(['shopcarlist'])
		},
		mounted() {
			console.log(this.tips);
		}
	};
</script>

<style scoped>
	.shopdet_info {
		width: 100%;
		box-sizing: border-box;
	}

	.shopdet_info_selfset {
		background: red;
		color: white;
		font-size: .1rem;
		padding: .1rem;
		border-radius: .1rem;
	}

	.inforImg_set {
		width: 100%;
	}

	.inforImg_set img {
		width: 100%;
		height: auto;
	}

	.infor_price {
		box-sizing: border-box;
		width: 100%;
		color: red;
		font-size: 0.6rem;
		padding-left: 0.8rem;
	}

	.priceNum {
		font-size: 1rem;
	}
</style>

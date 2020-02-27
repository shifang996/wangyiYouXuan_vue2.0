<template>
	<div>
		<HeaderCom />
		<div>
			<!-- header下面的第一个轮播图 -->
			<van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
				<van-swipe-item v-for="(ite,ind) in swiper_ad_url" :key="ind" class="swiper_contanier">
					<img :src="ite.imgurl" class="swiper_img_set" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div>
			<!-- 轮播图下面的小型宣传ad -->
			<van-row class="swi_areabigset">
				<van-col span="8" class="swi_areaset" v-for="(ite,ind) in swiper_nextText" :key="ind">
					<i class="swiper_next">
						<img :src="ite.imgurl" class="swiper_next_imgset" />
					</i>
					<span class="text" data-reactid=".0.2.0.$0.0.1">{{ite.title}}</span>
				</van-col>
			</van-row>
		</div>
		<div>
			<!-- nav导航栏目 -->
			<van-grid square column-num="5" class="nav_setwd" icon-size="1.2rem">
				<van-grid-item v-for="(item,index) in navMessage" :key="index" :icon="item.imgurl" :text="item.tips" />
			</van-grid>
		</div>
		<!-- nav下的大型图片导航 -->
		<van-row class="nav_next_adset">
			<van-col>
				<img :src="nav_next_bigherf" class="navnext_imgset" />
			</van-col>
		</van-row>
		<!-- 九宫格广告 -->
		<van-grid column-num="2" class="nineboxcon_set">
			<van-grid-item v-for="(item,index) in ninebox_ad_con" :key="index" :icon="item.url" class="ninebox_set" />
		</van-grid>
		<!-- 商品目录 -->
		<div class="shop_set">
			<dl class="shop_set_cate" v-for="(ite,ind) in shopcateList" :key="ind" :cateip="ite.cateid">
				<dt>
					<img :src="ite.imgurl" />
				</dt>
				<!-- v-for循环和v-ifde判断 -->
				<dd class="shop_set_catearea">
					<button class="shop_set_cateonly" v-if="ite.orgin!=''">{{ite.orgin}}</button>
					<span class="shop_setwordline">{{ite.title}}</span>
				</dd>
				<div class="shop_set_cateflex">
					<dd>
						￥
						<span class="shop_set_catewordbig">{{ite.price}}</span>
					</dd>
					<button>
						<router-link :to="{path:'/catedetails',query:ite}">查看详情</router-link>
					</button>
				</div>
			</dl>
		</div>
		<div class="footer_button"></div>
		<FooterCom />
	</div>
</template>

<script>
	//引入vuex
	//导入头部组件
	import HeaderCom from "../../components/header_components";
	import FooterCom from "../../components/footer_components";
	//导入尾部组件
	import {
		swiper_adT,
		swiper_nextText,
		moreNav,
		navBigNav,
		nineboxT
	} from "../../api";
	//引入商品列表

	import {
		recShoparea
	} from "../../api/shopcontaninerList.js";

	export default {
		name: "index",
		components: {
			HeaderCom,
			FooterCom
		},
		data() {
			return {
				search_text: "",
				active: "",
				header_tabText: "",
				swiper_ad_url: "",
				swiper_nextText: "",
				navMessage: "",
				nav_next_bigherf: "",
				ninebox_ad_con: "",
				shopcateList: ""
			};
		},
		computed: {
			// ...mapState(["info.name", "info.age",'info',"shopcarlist"])
		},
		methods: {},
		mounted() {
			swiper_adT().then(res => {
				this.swiper_ad_url = res.data;
			});
			swiper_nextText().then(res => {
				this.swiper_nextText = res.data;
			});
			moreNav().then(res => {
				this.navMessage = res.data;
			});
			navBigNav().then(res => {
				this.nav_next_bigherf = res.data;
			});
			nineboxT().then(res => {
				this.ninebox_ad_con = res.data;
			});
			recShoparea().then(res => {
				this.shopcateList = res.data;
			});
		}
	};
</script>

<style scoped>
	.header_set {
		width: 100%;
	}

	.header_logo_set {
		width: 1.84rem;
		height: 0.53333rem;
	}

	.header_logo_set img {
		width: 1.84rem;
		height: 0.53333rem;
		display: inline-block;
		margin: 0.26667rem;
	}

	.header_search {
		background: none;
		padding: 0;
		margin: 0;
		outline: none;
		display: inline-block;
		height: 0.92rem;
		width: 60%;
		height: 0.9rem;
	}

	.header_search_set {
		background: none;
		padding: 0;
		margin: 0;
		outline: none;
		display: inline-block;
		height: 0.92rem;
		margin-left: 0.5rem;
		margin-top: 0.1rem;
		width: 100%;
		height: 0.9rem;
	}

	.van-icon van-icon-search {
		background: #666;
	}

	.header_login {
		width: 1.2rem;
		height: 0.6rem;
		line-height: 0.6rem;
	}

	.header_login_set {
		width: 1.2rem;
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.32rem;
		margin: 0;
		padding: 0;
		color: #dd1a21;
		border: 1px solid #dd1a21;
		border-radius: 0.10667rem;
		display: inline-block;
		margin-left: 0.7rem;
		margin-top: 0.2rem;
	}

	.swiper_contanier {
		width: 100%;
		height: auto;
	}

	.swiper_img_set {
		width: 100%;
		height: auto;
	}

	.swi_areabigset {
		height: 0.72rem;
		line-height: 0.72rem;
	}

	.swi_areaset {
		text-align: center;
		vertical-align: middle;
	}

	.swiper_next_imgset {
		width: 0.32rem;
		height: 0.32rem;
	}

	.nav_setwd {
		height: 3.4rem;
		box-sizing: border-box;
	}

	.van-grid-item__icon {
		background: #666;
	}

	.footer_button {
		background: darkslategrey;
		height: 4.74rem;
	}

	.van-grid-item__icon+.van-grid-item__text {
		margin-top: 0;
	}

	.nav_next_adset {
		box-sizing: border-box;
		height: auto;
		margin-top: 0.8rem;
	}

	.navnext_imgset {
		box-sizing: border-box;
		width: 100%;
	}

	.nineboxcon_set {
		padding: 0;
		margin: 0;
	}

	.ninebox_set {
		padding: 0;
		margin: 0;
		width: auto;
		height: 2rem;
	}

	.van-grid-item__content--center {
		width: auto;
		height: 2rem;
	}

	.stick_backgrounset {
		background: none;
	}

	.shop_set {
		width: 100%;
		background: #f0f2f5;
		display: flex;
		flex-wrap: wrap;
	}

	.shop_set dl {
		border: 0.06rem solid #f0f2f5;
	}

	.shop_set_cate {
		width: 48.5%;
		text-align: center;
		background: white;
	}

	.shop_set_cate img {
		width: 90%;
	}

	.shop_set_catearea {
		text-align: left;
	}

	.shop_set_cateflex {
		display: flex;
	}

	.shop_set_cateflex dd {
		flex: 1;
		height: auto;
		line-height: auto;
		text-align: left;
	}

	.shop_set_cateonly {
		width: 1rem;
		height: 0.5rem;
		font-size: 0.1rem;
		border: none;
		background: red;
		color: white;
		border-radius: 0.1rem;
	}

	.shop_set_catewordbig {
		font-size: 0.42rem;
		color: red;
	}

	.shop_setwordline {
		width: 100%;
		/* display: inline-block; */
		/* overflow: hidden; */
		/* white-space: nowrap; */
		/* text-overflow: ellipsis; */
	}
</style>

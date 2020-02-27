<template>
	<div>
		<!-- footer组件 -->
		<!-- 底部的Tabbar 标签栏 -->
		<van-sticky class="stick_backgrounset">
			<van-tabbar v-model="active">
				<van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
				<van-tabbar-item icon="search" dot to="/classify">分类</van-tabbar-item>
				<van-tabbar-item icon="friends-o" info="5" to="/worthbuy">值得买</van-tabbar-item>
				<van-tabbar-item icon="friends-o" info="5" to="/shopcar">购物车</van-tabbar-item>
				<van-tabbar-item icon="setting-o" info="20" to="/mine">我的</van-tabbar-item>
			</van-tabbar>
		</van-sticky>
	</div>
</template>

<script>
	export default {
		name: "footer_components",
		data() {
			return {
				imgsrcLogo: require("../../assets/logo.webp"),
				search_text: "",
				active: "",
				header_tabText: "",
				swiper_ad_url: "",
				swiper_nextText: "",
				navMessage: "",
				nav_next_bigherf: "",
				ninebox_ad_con: ""
			};
		},
		mounted() {}
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
</style>

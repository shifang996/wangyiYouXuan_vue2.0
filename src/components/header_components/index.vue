<template>
	<div>
		<!-- 头部导航栏的组件 -->
		<!-- 头部部分 -->
		<van-sticky class="stick_backgrounset">
			<div class="stick_backgrounset">
				<van-row class="header_set">
					<van-col class="header_logo_set">
						<img :src="imgsrcLogo" />
					</van-col>
					<van-col class="header_search">
						<van-search class="header_search_set" v-model="search_text" placeholder="请输入搜索关键词" />
					</van-col>
					<van-col class="header_login">
						<van-button class="header_login_set" plain type="info">登录</van-button>
					</van-col>
				</van-row>
				<!-- tab标签页指导航条 -->
				<van-tabs v-model="active">
					<van-tab v-for="(item,index) in header_tabText" :key="index" :title="item"></van-tab>
				</van-tabs>
			</div>
		</van-sticky>
	</div>
</template>

<script>
	import {
		header_tabT,
		logoImgpage
	} from '../../api'
	export default {
		name: "header_components",
		data() {
			return {
				imgsrcLogo: '',
				search_text: "",
				active: "",
				header_tabText: '',
				swiper_ad_url: "",
				swiper_nextText: "",
				navMessage: "",
				nav_next_bigherf: "",
				ninebox_ad_con: ""
			}
		},
		mounted() {
			header_tabT().then(res => {
				this.header_tabText = res.data;
			});
			logoImgpage().then(res => {
				this.imgsrcLogo = res.data;
			})
		}
	}
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

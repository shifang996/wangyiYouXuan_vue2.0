<template>
	<div>
		<keep-alive>
		<!-- 头部组件 -->
		<!-- <HeaderComponent /> -->
		<router-view></router-view>
		<!-- 底部导航栏组件 -->
		<!-- <FooterConponent /> -->
		</keep-alive>
	</div>
</template>

<script>
	// import HeaderComponent from '../components/header_components';
	// import FooterConponent from '../components/footer_components';
	export default {
		name: "mainAdmin",
		components: {
			// HeaderComponent,
			// FooterConponent,
		},
		mounted(){
			console.log(this)
		}
	}
</script>

<style>

</style>

import Vue from 'vue'
import Vuex from 'vuex'
// import {
// 	SHOPCAR_ADD
// } from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		shopcarlist: [],
	},
	getters:{
		reader_shopcate(state){
			return state.shopcarlist
		}
	},
	mutations: {
		// [SHOPCAR_ADD](state, payLoad) {
		// 	state.shopcarlist.push(payLoad);
		// },
		//加入购物车vuex函数
		shopadd(state, payLoad) {
			state.shopcarlist.push(payLoad);
		}
	},
	actions: {},
	modules: {}

});

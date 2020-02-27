import http from './http';

export let shopListarea = () => {
	return http.get("/shopList");
}

export let recShoparea = () => {
	return http.get("/recShop");
}

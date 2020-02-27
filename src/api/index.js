import http from './http';


//这个是logo头像
export let logoImgpage=()=>{
    return http.get("/logo");
}

//tab首页导航文件
export let header_tabT = () => {
    return http.get("/tabText");
}
//轮播图数据获取
export let swiper_adT = () => {
    return http.get("/swiperData");
}

//轮播图下面的广告
export let swiper_nextText = () => {
    return http.get("/swiper_nextad");
}

//多组导航图
export let moreNav = () => {
    return http.get("/moreNavMessage");
}

//大的nav下面的导航
export let navBigNav = () => {
    return http.get("/nav_next_bigherf")
}

//九个盒子数据href
export let nineboxT = () => {
    return http.get("/ninebox");
}

//分类列表
export let classifyList =()=>{
	return http.get("/cateList");
}



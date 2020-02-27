var express = require('express');
var app = express();
//post访问
var bodyParse = require('body-parser')
var path = require('path')
app.use(express.static(path.join(__dirname, "public")))

//设置允许跨域访问该服务.
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});
app.use(bodyParse.urlencoded({
	extended: false
}));

app.get("/top", function(req, res) {
	var tops = "123456";
	res.send(tops);
})

app.get("/logo", function(req, res) {
	res.send([
		"https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
	])
})

//tab首部的导航栏
app.get("/tabText", function(req, res) {
	var header_tabText = [
		"推荐",
		"居家生活",
		"服饰鞋包",
		"美食酒水",
		"个护清洁",
		"母婴亲子",
		"运动旅行",
		"数码家电",
		"全球特色"
	];
	res.send(header_tabText);
})
//轮播图数据
app.get("/swiperData", function(req, res) {
	res.send(
		[{
				imgurl: 'https://yanxuan.nosdn.127.net/3384a82342d879431080386cf73200b3.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
			},
			{
				imgurl: "https://yanxuan.nosdn.127.net/6b1ebd19470cea9a7b8e81a52485f414.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
			},
			{
				imgurl: "https://yanxuan.nosdn.127.net/2ce9f4bca5e3c9cf4857bd216ab71162.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
			},
			{
				imgurl: "https://yanxuan.nosdn.127.net/67603d12ff61c98d5ebf02c3886382bd.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
			},
			{
				imgurl: "https://yanxuan.nosdn.127.net/5dd18d340a082b59530fe6dd6e131d44.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
			}
		]
	)
})
//轮播图下面的广告
app.get("/swiper_nextad", function(req, res) {
	var swiper_nextText = [{
			imgurl: "https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png",
			title: "网易自营品牌"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png",
			title: "30天无忧退货"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png",
			title: "48小时快速退款"
		}
	];
	res.send(swiper_nextText);
})

//多组导航图
app.get("/moreNavMessage", function(req, res) {
	var navMessage = [{
			imgurl: "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
			tips: "新品首发"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
			tips: "居家生活"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
			tips: "服饰鞋包"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
			tips: "美食酒水"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
			tips: "个护清洁"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
			tips: "母婴亲子"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
			tips: "运动旅行"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
			tips: "数码家电"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
			tips: "全球特色"
		},
		{
			imgurl: "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
			tips: "好货抄底"
		}
	];
	res.send(navMessage);
})
//大的nav下面的导航
app.get("/nav_next_bigherf", function(req, res) {
	var nav_next_bigherf = [
		"https://yanxuan.nosdn.127.net/ddb91f4ddfd2cd4d8974939624c482d2.gif?imageView&quality=75"
	];
	res.send(nav_next_bigherf);
})

//九个盒子数据 href
app.get("/ninebox", function(req, res) {
	var ninebox_ad_con = [{
			url: "https://yanxuan.nosdn.127.net/812999d8927e29eb3753cc1e37a023bc.png?quality=75&type=webp&imageView&thumbnail=375x0"
		},
		{
			url: "https://yanxuan.nosdn.127.net/790d985f789f277c028f37d940c62937.png?quality=75&type=webp&imageView&thumbnail=375x0"
		},
		{
			url: "https://yanxuan.nosdn.127.net/790d985f789f277c028f37d940c62937.png?quality=75&type=webp&imageView&thumbnail=375x0"
		},
		{
			url: "https://yanxuan.nosdn.127.net/790d985f789f277c028f37d940c62937.png?quality=75&type=webp&imageView&thumbnail=375x0"
		},
		{
			url: "https://yanxuan.nosdn.127.net/790d985f789f277c028f37d940c62937.png?quality=75&type=webp&imageView&thumbnail=375x0"
		},
		{
			url: "https://yanxuan.nosdn.127.net/790d985f789f277c028f37d940c62937.png?quality=75&type=webp&imageView&thumbnail=375x0"
		}
	];
	res.send(ninebox_ad_con);
})

app.get("/cateList", function(req, res) {
	var listCon = [
		'推荐专区',
		'宅家防护',
		'爆品专区',
		'新聘专区',
		'居家生活',
		'服饰鞋包',
		'美食酒水',
		'个护清洁',
		'母婴亲子',
		'运动旅行',
		'数码家电',
		'全球特色'
	];
	res.send(listCon);
})

app.get("/shopList", function(req, res) {
	var cate = [{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/102436/22/11926/245401/5e3e839bE1446d126/1b41722bd7de7648.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 3匹 一级能效 变频冷暖 智能 空调立式 倾城立柜式空调柜机(KFR-72LW/BpR3NHA2+1)",
			orgin: "自营",
			price: 5699,
			member: "",
			similarity: '',
			cateid:12
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/6547/25/6829/179245/5be13c32Edc715cce/3072294aa7ab552d.jpg!q70.dpg.webp",
			title: "新品亚麻新款坐垫 汽车座垫通风坐垫全包3D坐套 汽车座椅套 温馨米",
			orgin: "自营",
			price: 481,
			member: "",
			similarity: ''
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/110171/10/5694/251147/5e3e8241E24e8837f/1245f67b493ddb09.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 1.5匹 京灿 一级能效 全直流变频冷暖 60秒速热 智能壁挂式空调挂机(KFR-35GW/BpR3GYA1+1)",
			orgin: "自营",
			price: 2099,
			member: "",
			similarity: '',
			cateid:13
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/11703/37/7935/223893/5c663fa0E23927278/562bbbc83fd98a80.jpg!q70.dpg.webp",
			title: "SHIROMA 港风潮牌法国2019新款女装春装过年韩版洋气修身红色连衣裙女气质名媛显瘦鱼尾裙 红色 L",
			orgin: "",
			price: 496,
			member: "",
			cateid:14,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/51656/31/12649/255000/5d9c54aaEd39bbe69/4e4f8c58e538c459.jpg!q70.dpg.webp",
			title: "金龙鱼 食用油 非转基因 压榨 一级 纯正玉米油4L（新老包装随机发货）",
			orgin: "自营",
			price: 41.8,
			member: "",
			cateid:15,
			similarity: ''
		},
		{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t25429/197/1311561365/261906/77b316d4/5b90f007N826e9f76.jpg!q70.dpg.webp",
			title: "德芙 Dove香浓黑巧克力（分享碗装） 新年春节办公室休闲零食员工福利 252g",
			orgin: "自营",
			price: 29.9,
			member: "",
			cateid:16,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t12844/253/1149354226/276780/52ccb055/5a1c15e6N6da5f4b0.jpg!q70.dpg.webp",
			title: "可复制的领导力 樊登的9堂商业课",
			orgin: "自营",
			price: 36.8,
			member: 35.8,
			cateid:17,
			similarity: ''
		},
		{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/102436/22/11926/245401/5e3e839bE1446d126/1b41722bd7de7648.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 3匹 一级能效 变频冷暖 智能 空调立式 倾城立柜式空调柜机(KFR-72LW/BpR3NHA2+1)",
			orgin: "自营",
			price: 5699,
			member: "",
			cateid:18,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/51656/31/12649/255000/5d9c54aaEd39bbe69/4e4f8c58e538c459.jpg!q70.dpg.webp",
			title: "金龙鱼 食用油 非转基因 压榨 一级 纯正玉米油4L（新老包装随机发货）",
			orgin: "自营",
			price: 41.8,
			member: "",
			cateid:19,
			similarity: ''
		}
	];
	res.send(cate);
})

//推荐
app.get("/recShop", function(req, res) {
	var rec = [{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/102436/22/11926/245401/5e3e839bE1446d126/1b41722bd7de7648.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 3匹 一级能效 变频冷暖 智能 空调立式 倾城立柜式空调柜机(KFR-72LW/BpR3NHA2+1)",
			orgin: "自营",
			price: 5699,
			member: "",
			cateid:22,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/6547/25/6829/179245/5be13c32Edc715cce/3072294aa7ab552d.jpg!q70.dpg.webp",
			title: "新品亚麻新款坐垫 汽车座垫通风坐垫全包3D坐套 汽车座椅套 温馨米",
			orgin: "自营",
			price: 481,
			member: "",
			cateid:23,
			similarity: ''
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/110171/10/5694/251147/5e3e8241E24e8837f/1245f67b493ddb09.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 1.5匹 京灿 一级能效 全直流变频冷暖 60秒速热 智能壁挂式空调挂机(KFR-35GW/BpR3GYA1+1)",
			orgin: "自营",
			price: 2099,
			member: "",
			cateid:24,
			similarity: ''
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/11703/37/7935/223893/5c663fa0E23927278/562bbbc83fd98a80.jpg!q70.dpg.webp",
			title: "SHIROMA 港风潮牌法国2019新款女装春装过年韩版洋气修身红色连衣裙女气质名媛显瘦鱼尾裙 红色 L",
			orgin: "自营",
			price: 496,
			member: "",
			cateid:25,
			similarity: ''
		},
		{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/102436/22/11926/245401/5e3e839bE1446d126/1b41722bd7de7648.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 3匹 一级能效 变频冷暖 智能 空调立式 倾城立柜式空调柜机(KFR-72LW/BpR3NHA2+1)",
			orgin: "自营",
			price: 5699,
			member: "",
			cateid:26,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/6547/25/6829/179245/5be13c32Edc715cce/3072294aa7ab552d.jpg!q70.dpg.webp",
			title: "新品亚麻新款坐垫 汽车座垫通风坐垫全包3D坐套 汽车座椅套 温馨米",
			orgin: "",
			price: 481,
			member: "",
			cateid:27,
			similarity: ''
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/110171/10/5694/251147/5e3e8241E24e8837f/1245f67b493ddb09.jpg!q70.dpg.webp",
			title: "奥克斯 (AUX) 1.5匹 京灿 一级能效 全直流变频冷暖 60秒速热 智能壁挂式空调挂机(KFR-35GW/BpR3GYA1+1)",
			orgin: "自营",
			price: 2099,
			member: "",
			cateid:28,
			similarity: ''
		},
		{
			imgurl: "http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/11703/37/7935/223893/5c663fa0E23927278/562bbbc83fd98a80.jpg!q70.dpg.webp",
			title: "SHIROMA 港风潮牌法国2019新款女装春装过年韩版洋气修身红色连衣裙女气质名媛显瘦鱼尾裙 红色 L",
			orgin: "自营",
			price: 496,
			member: "",
			cateid:29,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/51656/31/12649/255000/5d9c54aaEd39bbe69/4e4f8c58e538c459.jpg!q70.dpg.webp",
			title: "金龙鱼 食用油 非转基因 压榨 一级 纯正玉米油4L（新老包装随机发货）",
			orgin: "自营",
			price: 41.8,
			member: "",
			cateid:30,
			similarity: ''
		},
		{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t25429/197/1311561365/261906/77b316d4/5b90f007N826e9f76.jpg!q70.dpg.webp",
			title: "德芙 Dove香浓黑巧克力（分享碗装） 新年春节办公室休闲零食员工福利 252g",
			orgin: "自营",
			price: 29.9,
			member: "",
			cateid:221,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t12844/253/1149354226/276780/52ccb055/5a1c15e6N6da5f4b0.jpg!q70.dpg.webp",
			title: "可复制的领导力 樊登的9堂商业课",
			orgin: "自营",
			price: 36.8,
			cateid:222,
			member: 35.8,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/51656/31/12649/255000/5d9c54aaEd39bbe69/4e4f8c58e538c459.jpg!q70.dpg.webp",
			title: "金龙鱼 食用油 非转基因 压榨 一级 纯正玉米油4L（新老包装随机发货）",
			orgin: "",
			price: 41.8,
			member: "",
			cateid:223,
			similarity: ''
		},
		{
			imgurl: "http://img13.360buyimg.com/mobilecms/s372x372_jfs/t25429/197/1311561365/261906/77b316d4/5b90f007N826e9f76.jpg!q70.dpg.webp",
			title: "德芙 Dove香浓黑巧克力（分享碗装） 新年春节办公室休闲零食员工福利 252g",
			orgin: "自营",
			price: 29.9,
			member: "",
			cateid:224,
			similarity: ''
		},
		{
			imgurl: "http://img12.360buyimg.com/mobilecms/s372x372_jfs/t12844/253/1149354226/276780/52ccb055/5a1c15e6N6da5f4b0.jpg!q70.dpg.webp",
			title: "可复制的领导力 樊登的9堂商业课",
			orgin: "",
			price: 36.8,
			cateid:225,
			member: 35.8,
			similarity: ''
		}
	];
	res.send(rec);
})

app.listen('3000', "127.0.0.1", function() {
	console.log('-------服务器使用正常------');
})

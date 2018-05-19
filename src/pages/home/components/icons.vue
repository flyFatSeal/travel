<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide  v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
					   <img  class="icon-img-contenet" :src="item.url" >
					</div>
					<p class="icon-text" :content="item.des">{{item.des}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeIcons',
	data () {
		return {
			swiperOption: {
				loop:false
			},
			swiperList:[{
				id: '0001',
				url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				des: '热门景点'
			},{
				id:'0002',
				url:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
				des: 'Q+精选'
			},
			{
				id:'0003',
				url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
				des: '必游榜单'
			},
			{
				id:'0004',
				url:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
				des: '踏青赏花'
			},
			{
				id:'0005',
				url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				des: '一日游'
			},
			{
				id:'0006',
				url:'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
				des: '游船游艇'
			},
			{
				id:'0007',
				url:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
				des: '动植物园'
			},
			{
				id:'0008',
				url:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
				des: '全部游玩'
			},
			{
				id:'0009',
				url:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
				des: '演出'
			}
			]
		}
	},
	computed: {
		pages () {
			const pages= []
			this.swiperList.forEach((item,index)=>{
				const page =Math.floor(index/8)
				if(!pages[page]){
					pages[page]=[]
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}	
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	@import '~styles/minins.styl'
	.wrapper >>> .swiper-container
		height:0
		padding-bottom:50%
	.icon
		position:relative
		overflow:hidden
		height:0
		float:left
		width:25%
		padding-bottom:25%
		.icon-img
			position:absolute
			top:0
			left:0
			right:0
			bottom:.44rem
			padding:.1rem
			box-sizing:border-box
			.icon-img-contenet
				display:block
				margin:0 auto
				height:100%	
		.icon-text
			position:absolute
			left:0
			right:0
			bottom:0
			height:.44rem
			line-height:.44rem
			color:$iconText	
			text-align:center	
			ellipsis()	
</style>
/* eslint-disable */
<template>
	<div class="wrapper">
		<swiper :options="swiperOption" >
			<swiper-slide  v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
					   <img  class="icon-img-contenet" :src="item.imgUrl" >
					</div>
					<p class="icon-text" :content="item.desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeIcons',
	props:{
		List:Array
	},
	data () {
		return {
			swiperOption: {
				loop:false,
				pagination:'.swiper-pagination'
			}
		}
	},
	computed: {
		pages () {
			const pages= []
			this.List.forEach((item,index)=>{
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
	.wrapper
		border-bottom:.01rem solid #ccc
	.wrapper >>> .swiper-container
		height:0
		padding-bottom:55%
	.wrapper>>>.swiper-pagination-bullet-active
		background: rgba(0,175,190,.8) !important
	.icon
		position:relative
		overflow:hidden
		height:0
		float:left
		width:25%
		padding-bottom:24%
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
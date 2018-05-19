<template>
	<div class="wrap">
		<swiper :options="swiperOption">
		<!-- slides -->
		<swiper-slide v-for="item of swiperList" :key="item.id"
		>
			<img  class="swiper-img" :src="item.url">
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination:'.swiper-pagination',
				loop:true
			},
			swiperList:[{
				id: '0001',
				url:'http://img1.qunarzz.com/piao/fusion/1804/f2/91b285a08ee21c02.jpg_750x200_8a73fd08.jpg'
			},{
				id:'0002',
				url:'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
			},
			{
				id:'0003',
				url:'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
			}
			]
		}
	}
}	
</script>

<style lang="stylus" scoped>
	.wrap>>>.swiper-pagination-bullet-active
		background: #fff !important
	.wrap
		.swiper-img
			width:100%
</style>
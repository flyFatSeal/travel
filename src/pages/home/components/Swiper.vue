/* eslint-disable */
<template>
	<div class="wrap">
		<swiper :options="swiperOption" v-if="showImg">
		<!-- slides -->
		<swiper-slide v-for="item of List" :key="item.id"
		>
			<img  class="swiper-img" :src="item.imgUrl">
		</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeSwiper',
	props:{
		List:Array
	},
	data () {
		return {
			swiperOption: {
				pagination:'.swiper-pagination',
				loop:true,
			}
		}
	},
	computed:{
		showImg () {
			return this.List.length
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
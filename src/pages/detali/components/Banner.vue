<template>
	<div>
		<div class="banner" @click="handleGallaryClick">
			<img class="banner-img" :src="bannerImg" >
			<div class="banner-info">
				<div class="banner-title" :sightName="sightName">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont">&#xe650;</span>
					14
				</div>
			</div>
		</div>
		<fade-animation>
			<gallary
			 :imgs="gallaryImgs"
			 v-show="swiperSwitch"
			 @close="handleGallaryClick"
			 >
			 </gallary>
		</fade-animation>
	</div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fadeanimation/fade'
export default {
	name: 'DetaliBanner',
	props:{
		bannerImg:String,
		sightName:String,
		gallaryImgs:Array
	},
	data () {
		return {
			swiperSwitch:false
		}
	},
	methods: {
		handleGallaryClick () {
			this.swiperSwitch = !this.swiperSwitch
		}
	},
	components: {
		Gallary,
		FadeAnimation
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		overflow: hidden
		height: 0
		padding-bottom: 55%
		position: relative
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			bottom: 0
			right: 0
			color:#fff
			line-height: .6rem
			background-image: linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				flex: 1
				font-size: .36rem
				padding: .2rem 0rem .2rem .2rem
			.banner-number
				margin-top: .3rem
				margin-right: .2rem
				width: 1.2rem
				height: .4rem
				line-height: .4rem
				border-radius: .2rem
				background: rgba(0, 0, 0, .5)
				text-align:center
</style>
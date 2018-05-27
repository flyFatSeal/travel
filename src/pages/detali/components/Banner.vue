<template>
	<div>
		<div class="banner" @click="handleGallaryClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_600x330_0f80adad.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">成都熊猫基地(AAAA景区)</div>
				<div class="banner-number">
					<span class="iconfont">&#xe650;</span>
					14
				</div>
			</div>
		</div>
		<gallary
		 :imgs="imgs"
		 v-show="swiperSwitch"
		 @close="handleGallaryClick"
		 >
		 </gallary>
	</div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
	name: 'DetaliBanner',
	data () {
		return {
			imgs:['http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_r_800x800_3755d9a0.jpg','http://img1.qunarzz.com/wugc/p216/201207/16/40e62ea907230da393835fbb.jpg_r_800x800_949f826e.jpg'],
			swiperSwitch:false
		}
	},
	methods: {
		handleGallaryClick () {
			this.swiperSwitch = !this.swiperSwitch
		}
	},
	components: {
		Gallary
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
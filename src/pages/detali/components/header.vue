<template>
	<div class="header-wrapper">
		<div class="header-abs">
			<router-link tag="div" to='/' class="iconfont back-icon">&#xe624;</router-link>
		</div>
		<div class="header-fixed"
		 v-show="showTop"
		 :style="opacityStyle"
		 >
			景点详情
			<router-link tag="div" to='/' class="iconfont fixed-back">&#xe624;</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showTop:false,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			console.log('o')
			const top = document.documentElement.scrollTop
			if ( top > 50 ){
				const opacity = top/160
				this.opacityStyle = {
					opacity
				}
				this.showTop= true
			} else {
				this.showTop= false
			}
		}
	},
	mounted () {
		window.addEventListener('scroll',this.handleScroll)
	},
	destroyed () {
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.header-abs
		position: absolute
		left: .2rem
		top: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		background: rgba(0,0,0,0.7)
		text-align: center
		z-index: 2
		border-radius: .4rem
		.back-icon
			color:#fff
			font-size:.4rem
			text-align:center
	.header-fixed
		position:fixed
		top:0
		left:0
		right:0
		height:.86rem
		width: 100%
		line-height:.86rem
		text-align:center
		color:#fff
		background:$bgColor
		z-index: 3
		font-size:.34rem
		.fixed-back
			position: absolute
			top:0
			left:0
			right:0
			width: .64rem
			text-align:center
			font-size:.35rem
			margin-left:.2rem
			color:#fff
</style>



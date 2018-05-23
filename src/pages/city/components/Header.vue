<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div><span class="iconfont header-back">&#xe624;</span></div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.header
		position:relative
		overflow:hidden
		height:.86rem
		line-height:.86rem
		text-align:center
		color:#fff
		background:$bgColor
		.header-back
			text-align:center
			font-size:.3rem
			position:absolute
			top:0
			left:0
			margin-left:.2rem
			color:#fff
</style>
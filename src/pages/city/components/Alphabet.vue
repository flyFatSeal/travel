<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:0
		right:0
		bottom:0
		width:.4rem
		.item
			text-align:center
			line-height:.44rem
			color:$bgColor
</style>
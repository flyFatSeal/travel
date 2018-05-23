<template>
	<div class="search">
		<input class="SearchInput" type="text" placeholder="输入城市名或拼音">
	</div>
</template>

<script>
export default {
	name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.search
		height:.72rem
		background:$bgColor
		padding:0 0.1rem
		.SearchInput
			width:100%
			height:.62rem
			line-height:.62rem
			text-align:center
			border-radius:.05rem
			padding:0 0.1rem
			box-sizing:border-box
</style>
/* eslint-disable */
<template>
  <div class="header">
  	<div class="headerLeft">
  		<div class="iconfont back-icon">&#xe624;</div>
  	</div>
  	<div class="headerInput">
	<span class="iconfont">&#xe632;</span>
  	输入城市/景点/游玩主题</div>
  	<div class="headerRight">城市
	<span class="iconfont arrow-icon">&#xe62d;</span>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.header
		display:flex
		height:.86rem
		line-height:.86rem
		background:$bgColor
		color:#fff
		.headerLeft
			width:.64rem
			float:left
			.back-icon
				text-align:center	
		.headerInput
			flex:1
			margin-top:.12rem
			height:.64rem
			line-height:.64rem
			margin-left:.2rem
			margin-right:.2rem
			border-radius:.1rem
			background:#fff
			color:#ccc
			padding-left:0.2rem
		.headerRight
			width:1.24rem
			.arrow-icon
				font-size:0.24rem	
</style>
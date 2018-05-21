/* eslint-disable */
<template>
	<div class="wrap">
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class='border-bottom' v-for="item of List" :key="item.id">
				<div class="wrapper-img">
					<img class="info-img" :src="item.imgUrl" >
				</div>
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-text">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props:{
		List:Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/minins.styl'
	.recommend-title
		height:.8rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.wrapper-img
		height:0
		overflow:hidden
		padding-bottom:37.09%
		.info-img
			width:100%
	.info
		flex:1
		padding:.1rem
		min-width:0
		.info-title
			height:.7rem
			line-height:.7rem
			font-size:.36rem
			ellipsis()
		.info-text
			font-size:.31rem
			color:#ccc
			margin-bottom:.2rem
			ellipsis()
		.info-button
			height:.6rem
			border-radius:.06rem
			background:#ff9300
			margin-top:.2rem
			margin-left:.2rem
			font-size:.24rem
			color:#fff
</style>
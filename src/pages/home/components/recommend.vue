/* eslint-disable */
<template>
	<div class="wrap">
		<div class="recommend-title">热门推荐</div>
		<ul>
			<li class='recommend-li border-bottom' v-for="item of List" :key="item.id">
				<img class="info-img" :src="item.imgUrl" >
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-text">{{item.desc}}</p>
					<button class="info-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
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
	.recommend-li
		overflow:hidden
		display:flex
		height:1.9rem
		.info-img
			height:1.7rem
			margin-top:.1rem
			margin-left:.2rem
		.info
			flex:1
			padding:.1rem
			min-width:0
			.info-title
				height:.7rem
				font-size:.36rem
				line-height:.7rem
				margin-left:.2rem
				ellipsis()
			.info-text
				margin-left:.2rem
				color:#ccc
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
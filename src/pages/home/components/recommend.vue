/* eslint-disable */
<template>
	<div class="wrap">
		<div class="recommend-title">热门推荐</div>
		<ul>
			<li class='recommend-li border-bottom' v-for="item of recommendList" :key="item.id">
				<img class="info-img" :src="item.url" >
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-text">{{item.text}}</p>
					<button class="info-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recommendList : [
				{
					id:'0001',
					url:'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
					title:'武隆天坑地质国家公园',
					text:'这是无与伦比的度假胜地'
				},
				{
					id:'0002',
					url:'http://img1.qunarzz.com/sight/p0/1707/c5/c568c1adf9b18efa3.img.jpg_200x200_803087d7.jpg',
					title:'武隆天坑地质国家公园',
					text:'这是无与伦比的度假胜地'
				},
				{
					id:'0003',
					url:'http://img1.qunarzz.com/sight/p0/1709/63/63fe678289357513a3.img.jpg_200x200_362e3073.jpg',
					title:'武隆天坑地质国家公园',
					text:'这是无与伦比的度假胜地'
				},
				{
					id:'0004',
					url:'http://img1.qunarzz.com/sight/p0/201401/09/4dfba4792c7572b427ba445e900c3552.jpg_200x200_88ffeccf.jpg',
					title:'武隆天坑地质国家公园',
					text:'这是无与伦比的度假胜地'
				},
				{
					id:'0005',
					url:'http://img1.qunarzz.com/sight/p0/1505/ae/ae68c02701c5740a.water.jpg_200x200_824f1ec6.jpg',
					title:'武隆天坑地质国家公园',
					text:'这是无与伦比的度假胜地'
				},
			]
		}
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
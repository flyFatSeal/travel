/* eslint-disable */
<template>
	<div class="wrap">
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class='border-bottom' v-for="item of recommendList" :key="item.id">
				<div class="wrapper-img">
					<img class="info-img" :src="item.url" >
				</div>
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-text">{{item.text}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	data () {
		return {
			recommendList : [
				{
					id:'0001',
					url:'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
					title:'重庆必游TOP10',
					text:'重庆，非去不可'
				},
				{
					id:'0002',
					url:'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg',
					title:'重庆必游TOP10',
					text:'重庆，非去不可'
				},
				{
					id:'0003',
					url:'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg',
					title:'重庆必游TOP10',
					text:'重庆，非去不可'
				}
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
	.wrapper-img
		height:0
		overflow:hidden
		padding-bottom:33.9%
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
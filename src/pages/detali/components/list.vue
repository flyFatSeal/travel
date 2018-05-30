<template>
	<div class="wrapper">
		<div class="Title"
		v-for="(item,index) of list"
		:key="index"
		>
			<div class="firistTitle border-bottom">
				<span class="titleImg"></span>
				{{item.title}}
			</div>
			<div class="childTitle" v-if="item.children">
				<detail-list :list="item.children">
					{{item.title}}
				</detail-list>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'DetailList',
	props:{
		list:Array
	}
}
</script>

<style lang="stylus" scoped>
	.firistTitle
		position: relative
		color: #333
		font-size: .32rem
		line-height: .88rem
		height: .88rem
		margin-bottom: -.02rem
		z-index: 4
		text-indent: .4rem
		padding-left: .2rem
	.titleImg
		display: inline-block
		position: absolute
		width: .36rem
		height: .36rem
		top: .26rem
		left: .2rem
		background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
		margin-right: .1rem
		background-size: .4rem  3rem
	.childTitle
		margin-left:.4rem
</style>
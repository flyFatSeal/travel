<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="areaTitle border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrap">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="areaTitle border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrap"
					 v-for="item of hotCities" :key="item.id"
					 >
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities" :key="key">
				<div class="areaTitle border-topbottom">{{key}}
				</div>
				<div class="item-list" v-for="innerItem of item" :key="innerItem.id">
					<div class="item border-bottom">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CityList',
	props:{
		cities:Object,
		hotCities:Array

	},
	mounted () {
		this.scroll=new BScroll(this.$refs.wrapper)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.list
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		overflow:hidden
		.border-topbottom
			&:before
				border-color:#ccc
			&:after
				border-color:#ccc
		.border-bottom
			&:before
				border-color:#ccc
		.areaTitle
			height:.66rem
			background:#ccc
			line-height:.66rem
			font-size:.25rem
			padding-left:.3rem
		.button-list
			padding:.1rem .8rem .1rem .1rem
			overflow:hidden
			.button-wrap
				float:left
				width:33.33%
				.button
					margin:.1rem
					padding .1rem 0
					text-align:center
					border:.02rem solid #ccc
					border-radius:.06rem
		.item-list
			.item
				line-height:.54rem
				color:#666
				padding-left:.2rem
</style>
<template>
	<div class="search">
		<input v-model="keyWord" class="SearchInput" type="text" placeholder="输入城市名或拼音">
		<div class="search-content"
		v-show="hasList"
		ref="searchList"
		>
			<ul>
				<li
				class="item-list border-topbottom"
				v-for="item of list"
				:key="item.id"
				@click="handleLiClick"
				ref="searchLi"
				>{{item.name}}</li>
				<li
				class="item-list border-topbottom"
				v-show="hasDate">
					没有匹配的数据项
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props:{
		cities:Object
	},
	data () {
		return {
			keyWord: '',
			list: [],
			timer: null
		}
	},
	methods: {
		handleLiClick (e) {
			this.keyWord = e.target.innerText
		}
	},
	computed: {
		hasList () {
			return this.keyWord
		},
		hasDate () {
			return !this.list.length
		}
	},
	mounted () {
		this.scroll=new BScroll(this.$refs.searchList)
	},
	watch: {
		keyWord () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() =>{
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) =>{
						if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibies.styl'
	.border-topbottom
		&:before
			border-color:#ccc
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
	.search-content
		overflow:hidden
		position:absolute
		top:1.58rem
		right:0
		bottom:0
		left:0
		background:#ccc
		z-index:1
		.item-list
			overflow:hidden
			height:.5rem
			line-height:.5rem
			padding-left:.2rem
			color:#666
			background:#fff
			
			
			
</style>
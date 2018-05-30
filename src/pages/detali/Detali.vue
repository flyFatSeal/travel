<template>
	<div>
		<detail-header></detail-header>
		<detali-banner 
		:sightName="sightName"
		:bannerImg="bannerImg"
		:gallaryImgs="gallaryImgs"
		></detali-banner>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetaliBanner from './components/Banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
	name: 'Detali',
	components: {
		DetaliBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list:[],
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
		}
	},
	methods: {
    getHomeInfo () {
      axios.get('api/detail.json?id=' + this.$route.params.id )
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
    	res = res.data
    	if ( res.ret && res.data ) {
    		const data = res.data
    		this.list = data.categoryList
    		this.sightName = data.sightName
    		this.bannerImg = data.bannerImg
    		this.gallaryImgs = data.gallaryImgs

    	}
    }
  },
  mounted () {
  	this.getHomeInfo()
  },
}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>
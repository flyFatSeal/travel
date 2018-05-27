/* eslint-disable */
<template>
	<div>
		<home-header></home-header>
		<home-swiper :List="swiperList"></home-swiper>
		<home-icons :List="iconList"></home-icons>
    <home-recommend :List="recommendList"></home-recommend>
    <home-weekend :List="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res=res.data
      if(res.ret && res.data){
        const data =res.data
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.weekendList=data.weekendList
        this.recommendList=data.recommendList
      }

    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>	

</style>
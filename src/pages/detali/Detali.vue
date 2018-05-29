<template>
	<div>
		<detail-header></detail-header>
		<detali-banner></detali-banner>
		<div class="content"></div>
	</div>
</template>

<script>
import DetaliBanner from './components/Banner'
import DetailHeader from './components/header'
export default {
	name: 'Detali',
	components: {
		DetaliBanner,
		DetailHeader
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>
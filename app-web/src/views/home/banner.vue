<template>
	<div class="home-banner" :style="style"></div>
</template>
<script>
	import homeJson from '@/json/home.json'
	export default {
		data() {
			return {
				json: homeJson,
				style: {backgroundImage: `url(${homeJson.banner})`}
			}
		}
	}
</script>
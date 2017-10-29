<template>
  <div class="home-banner" :style="style">
    <div class="wrapper tc">
    	<h3>不一样的设计，不一样的感受</h3>
    	<p>Not the same concept, not the same as the pursuit of</p>
    </div>
  </div>
</template>
<script>
import homeJson from '@/json/home.json'
export default {
    data() {
        return {
            json: homeJson,
            style: { backgroundImage: `url(${homeJson.banner})` }
        }
    }
}

</script>

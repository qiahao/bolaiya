<template>
  <div>
    <!-- top -->
    <top></top>
    <!-- top end -->
    <i-banner></i-banner>

    <div class="wrapper">
        <div class="block-title mtb20">产品展示</div>
        <ul class="prd-list">
            <li class="prd-item" v-for="(item,i) in json.productList">
                <div class="img"><img :src="item.image" alt=""></div>
                <p>{{item.name}}</p>
            </li>
        </ul>
        
    </div>

  </div>
</template>
<script>

import homeJson from '@/json/home.json'

import top from '@/components/templ/top.vue'
import iBanner from './banner.vue'

export default {
    name: 'home',
    data() {
        return {
            json: homeJson
        }
    },
    components: {
        top,
        iBanner
    }
}

</script>
<style src="./style.scss" lang="scss"></style>
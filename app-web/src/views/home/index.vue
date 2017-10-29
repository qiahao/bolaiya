<template>
  <div>
    <!-- top -->
    <top></top>
    <!-- top end -->
    <i-banner></i-banner>

    <div class="wrapper">
        <!-- 列表二 -->
        <div class="block-title mtb20">案例展示</div>
        <ul class="row list-1 mb30 cf">
            <li class="col-3 item" v-for="(item,i) in json.caseList">
                <div class="img"><img :src="item.image" alt=""></div>
                <p>{{item.title}}</p>
            </li>
        </ul>

        <!-- 简介 -->
        <div class="row home-about-row mb30">
            <div class="col-4 left-col" :style="`background-image: url(${json.about.image})`"></div>
            <div class="col-8 right-col">
                <div class="block-title mb15">{{json.about.title}}</div>
                <p v-for="(item, i) in json.about.summarys">{{item}}</p>
            </div>
        </div>

        <!-- 列表一 -->
        <div class="block-title mtb20">材料展示</div>
        <ul class="row list-2 mb10">
            <li class="col-4 item" v-for="(item,i) in json.productList">
                <div class="img" :style="`background-image: url(${json.about.image})`">
                    <div>{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
    <!-- footer -->
    <footer-compo></footer-compo>
  </div>
</template>
<script>

import homeJson from '@/json/home.json'

import top from '@/components/templ/top.vue'
import footerCompo from '@/components/templ/footer.vue'
import iBanner from './banner.vue'

export default {
    name: 'home',
    data() {
        return {
            json: homeJson,
        }
    },
    components: {
        top,
        iBanner,
        footerCompo
    }
}

</script>
<style src="./style.scss" lang="scss"></style>
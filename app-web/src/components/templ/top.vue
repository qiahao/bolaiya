<template>
  <div class="header">
  	<div class="wrapper">
    <h1 class="fl"><a href="/">舶来雅全屋定制</a></h1>
    <nav class="fr">
      <ul>
        <li v-for="(item,i) in navMenu">
          <router-link :to="item.path">{{item.text}}</router-link>
        </li>
      </ul>
    </nav>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        nav: {
            default: () => []
        }
    },
    data() {
        return {
            navMenu: [{
                path: '/home',
                text: '首页'
            },{
                path: '/contactUs',
                text: '联系我们'
            }]
        }
    },
}

</script>
<style lang="scss">
@import '../../scss/helper/_variable.scss';
.header {
    height: 60px;
    // border-bottom: 5px solid $theme-color;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    h1{
    	line-height: 60px;
    	font-size: 28px;
    	font-weight: bold;
    	a{
		    color: $theme-color;
    	}
    }
    nav{
    	margin-top: 25px;
    	line-height: 26px;
    	font-size: 14px;
    	li{
    		float: left;
    		margin-left: 20px;
    		a{
    			// color: $theme-color;
    			font-weight: 400;
    			&:hover{
    				text-decoration: underline;
    			}
    		}
    	}
    }
}

</style>

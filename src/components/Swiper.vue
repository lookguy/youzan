<template>
  <div class="swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="list in lists" :key="list.index">
        <a class="js-no-follow" :href="list.clickUrl">
          <img
            class="goods-main-photo fadeIn format-img"
            :src="list.img"
          >
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'swipe',
    data: function(){
      return{
        swiperOption: {
          autoplay: true
        }
      }
    },
    props: {
      lists:{
        type: Array,
        required: true
      }
    },
    components:{
      swiper,
      swiperSlide
    }
}
</script>

<style scoped>
  .swiper-container .swiper-wrapper a {width:auto;}
  .swiper-slide .format-img {
    width: 100%;
    height: 100%;
  }
</style>

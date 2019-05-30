<template>
    <div class="index">
        <div class="container with-bottom-nav" style="min-height: 667px;">
        <div class="content">
          <div class="js-image-swiper
     custom-image-swiper  custom-image-swiper-single" data-images="1">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swp-page">
                  <a class="js-no-follow" href="https://h5.koudaitong.com/v2/index/rukou">
                    <img class="goods-main-photo fadeIn" src="https://img.yzcdn.cn/upload_files/2016/07/29/Fl3T06Mu7TpIhR4L1s2tzm8cZrgt.jpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://maijia.youzan.com/mars/notice/detail?id=" class="notice"></a>
          <div class="section-title">优店推荐</div>
          <div class="section-content shops">
            <div class="shop-wrap">
              <div class="shop-item">
                <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
                  <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png">
                </a>
              </div>
              <div class="shop-item">
                <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
                  <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png">
                </a>
              </div>
              <div class="shop-item">
                <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
                  <img class="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png">
                </a>
              </div>
            </div>
          </div>
          <div class="section-content daily">
            <ul>
            </ul>
          </div>
          <div class="line-block line-block-gray">
            <div class="lineblock-title">
              <span class="lineblock-font">最热商品推荐</span>
            </div>
          </div>
          <div class="hot-goods js-waterfull-wrap" data-src="">
            <ul class="js-list js-lazy" data-src="">
              <li v-for="list in lists" :key="list.id">
                <div class="goods-item">
                  <a href="#">
                    <div class="thumb img-box">
                      <img class="fadeIn" :src="list.img">
                    </div>
                    <div class="detail">
                      <div class="title">{{list.name}}</div>
                      <div class="price">{{list.price}}</div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <div class="loading-more"><span></span></div>
          </div>
          <div class="js-show-find category-guid" style="display: none;"></div>
        </div>
      </div>
      <div class="bottom-nav">
        <ul>
          <li class="active"><a href="https://maijia.youzan.com/mars/homepage"><i class="icon-home"></i><div>有赞</div></a></li>
          <li><a href="https://maijia.youzan.com/mars/category"><i class="icon-category"></i><div>分类</div></a></li>
          <li><a href="https://h5.youzan.com/v2/trade/cart?f_platform=yzapp&amp;source=yzapp"><i class="icon-cart"></i><div>购物车</div></a></li>
          <li><a href="https://h5.youzan.com/v2/buyer/member"><i class="icon-user"></i><div>我</div></a></li>
        </ul>
      </div>
    </div>
</template>


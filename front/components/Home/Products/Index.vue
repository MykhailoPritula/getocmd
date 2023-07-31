<template>
  <section class="section-products">
    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <HomeProductsTitle />
            <HomeProductsGallery v-if="mob"/>
            <HomeProductsTabs />
          </div>
          <div class="col-lg-6">
            <HomeProductsGallery  v-if="!mob"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      status: false,
      mob: false
    }
  },
  methods: {
    checkMob(){
      if(window.innerWidth >= 992){
        this.mob = false
      } else {
        this.mob = true
      }
    }
  },
  mounted(){
    localStorage.httpReferer = window.location.href;
    this.status = process.env.NODE_ENV;
    this.checkMob()
    window.onresize = () => this.checkMob()
  }
}
</script>

<style lang="scss" scoped>
.section-products {
  color: #2d2d2d;
  line-height: 1.2;
  font-size: 14px;
  background: #fff;
  font-family: Didact Gothic, sans-serif;
  &--mob{
    .order{
      @media(max-width:991px){
        &-md{
          &-1{order: 1}
          &-2{order: 2}
          &-3{order: 3}
        }
      }
    }
  }
}
.products {
  z-index: 2;
  position: relative;
  .container {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    @media (min-width: 1200px) {
      padding: 45px 0;
    }
  }
}
</style>
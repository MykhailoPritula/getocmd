<template>
  <div class="page page-one" >
    <PartialsMarquee /> <!-- Component of ticker -->
    <HomeProducts /> <!-- Component of products -->
    <HomeFinally v-if="loaded" /> <!-- Component abouut dr. Tess Mauricio -->
    <HomeFaq v-if="loaded" /> <!-- Component of Frequently Asked Questions -->
    <HomeSigns v-if="loaded" /> <!-- Component Signs of Ageing -->
    <HomeResult v-if="loaded" /> <!-- Component Long Lasting Results -->
    <HomeIngredients v-if="loaded" /> <!-- Component a few key ingredients -->
    <HomeTestimonials v-if="loaded" /> <!-- Component of Customer Testimonials -->
    <HomeVideo v-if="loaded" /> <!-- Component of Video Reviews -->
    <HomeBuynow v-if="loaded" /> <!-- Component of money back-->
  </div>
</template>

<script>
export default {
  data(){
    return{
      loaded: false
    }
  },
  mounted(){
    setTimeout(() => {
      this.$store.state.loader = false;
      this.loaded = true
    }, 1000)
  }
}
</script>

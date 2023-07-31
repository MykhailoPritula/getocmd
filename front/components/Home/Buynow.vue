<template>
  <section class="buynow-section">
    <div class="container">
      <h2 class="buynow-title">Rejuvenation Complex Cream</h2>
      <div class="buynow-sub">
        <h3>Formulated by Top MD’s for Neck & Face</h3>
      </div>
        <img :src="require(`@/assets/img/campaign/buynow2.png`)"/>
        <picture>
          <source srcset="@/assets/img/campaign/money-back-img.webp" type="image/webp">
          <source srcset="@/assets/img/campaign/money-back-img.png" type="image/png"> 
          <img src="@/assets/img/campaign/money-back-img.png">
        </picture>
      <div class="text">
        <h3>90 Day Money-Back Guarantee It Works or You Don’t Pay</h3>
        <p>We want you to be 100% satisfied with everything you buy from us. And if you’re not entirely happy with your purchase we will refund your money in full, or exchange the goods. All we ask is that you contact our customer services and then return the unused items back to us.</p>
      </div>
      <button @click="toScroll">Buy cream now</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    toScroll() {
      const box = document.getElementById('tabs')
      window.scrollTo({
        top: box.offsetTop - 60,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.buynow-section{
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  img{
    display: block;
    margin: 0 auto 30px;
  }
  button{
    padding: 15px 40px;
    background: #FE6F61;
    border-radius: 10px;
    border:none;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #FFFBF9;
    margin-top: 40px;
    transition: .3s ease;
    &:hover {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
    }
  }
}
.buynow-title{
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: #E2BDAF;
  @media(min-width:576px){
    font-size: 30px;
  }
}
.buynow-sub {
  font-size: 15px;
  line-height: 18px;
  color: #7f7f7f;
  h3{
    color: #E2BDAF;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
}
.text{
  width: 100%;
  @media(min-width:576px){
    max-width: 513px;
    width: 100%;
    margin: 0 auto;
  }
  h3{
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 10px;
    @media(min-width:992px){
      font-size: 20px;
    }
  }
  p{
    font-size: 10px;
    line-height: 12px;
    color: #707070;
  }
}

</style>

<template>
  <section class="faq" id="faq">
    <div class="container">
      <h1>Frequently Asked Questions</h1>
      <div class="info">
        <div class="info-left">
          <div class="text">
            <div class="title">How does this work against crows feet and wrinkles?</div>
            <p>Rejuvenation Complex Cream contains a unique fruit cell culture extract that supports skin restoration even after the first application. When used twice a day as directed, some women have said that over time they notice their skin becoming smoother and more vibrant.</p>
          </div>
          <div class="text">
            <div class="title">Will this irritate my skin?</div>
            <p>Dr. Tess and the entire Orange County MD team worked to develop a science-backed product free from parabens, BHA, and unnecessary chemicals. As a result, the team can proudly say that Rejuvenation Complex Cream will work for women of any age, any skin tone, regardless of which products you’ve tried in the past.</p>
          </div>
          <div class="text">
            <div class="title">How does it help with saggy jowls and crepey skin?</div>
            <p>Along with the unique frit cell culture extract, Rejuvenation Complex Cream contains age-defying peptides that work to rejuvenate, hydrate, and nourish your skin. When applied twice daily, Rejuvenation Complex Cream helps set the stage for younger, firmer, and more elastic skin.</p>
          </div>
        </div>
        <HomeFaqBox />
        <div class="info-right">
          <div class="text">
            <div class="title">Can I Use This With Other Products</div>
            <p>Rejuvenation Complex Cream was formulated to work with your current skincare routine to help you support tight, glowing skin. It is so effective, many ladies end up not needing other products. We do recommend that you allow at least 15 minutes before applying makeup after applying Rejuvenation Complex Cream. This allows your skin to fully absorb the skin-replenishing nutrients and moisturizers.</p>
          </div>
          <div class="text">
            <div class="title">How Long Does One Jar Last</div>
            <p>We recommend you apply Rejuvenation complex cream twice a day. This means each jar will last you 30 days.</p>
          </div>
          <div class="text">
            <div class="title">How Long Does It Take To Work</div>
            <p>Some ladies notice smoother and tighter skin after the first use, but the best and most lasting results always come from making it part of your daily skin care routine. That's why we offer convenient and cost-saving 3 and 6-month supplies, to make it easy and affordable for ladies who want to get back their spark and keep it forever.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.faq{
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
h1{
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #E2BDAF;
  margin-bottom: 40px;
}
.info{
  display: flex;
  @media(max-width:991px){
    flex-direction: column;
    text-align: center;
  }
  img{
    margin-right: 15px;
    margin-left: 15px;
    @media(min-width:992px){
      max-height: 770px;
      height: 100%;
    }
  }
  .text {
    position: relative;
    &:not(:last-child){
    &:after{
      content: "";
      position: absolute;
      display: block;
      height: 1px;
      width: 100%;
      background: #E5E5E5;
      margin-bottom: 20px;
      }
    }
  }
  .title{
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #E2BDAF;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  p{
    font-size: 15px;
    line-height: 18px;
    color: #707070;
    margin-bottom: 20px;
  }
}
.info-left, .info-right{
  text-align: center;
  @media(min-width:992px){
  max-width: 240px;
  width: 100%;
  }
}
.info-left{
  @media(min-width:992px){
    text-align: right;
  }
}
.info-right{
  @media(min-width:992px){
    text-align: left;
  }
}
</style>

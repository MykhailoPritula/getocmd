<template>
  <div class="faq-box" :class="(!flag)?'faq-active':''">
    <picture>
      <source class="faq-box--001" :srcset="require(`@/assets/img/faq/img-001.webp`)" type="image/webp">
      <source class="faq-box--001" :srcset="require(`@/assets/img/faq/img-001.png`)" type="image/png"> 
      <img class="faq-box--001" :src="require(`@/assets/img/faq/img-001.png`)"/>
    </picture>
    <picture>
      <source class="faq-box--002" :srcset="require(`@/assets/img/faq/img-002.webp`)" type="image/webp">
      <source class="faq-box--002" :srcset="require(`@/assets/img/faq/img-002.png`)" type="image/png"> 
      <img class="faq-box--002" :src="require(`@/assets/img/faq/img-002.png`)"/>
    </picture>
    <picture>
      <source class="faq-box--003" :srcset="require(`@/assets/img/faq/img-003.webp`)" type="image/webp">
      <source class="faq-box--003" :srcset="require(`@/assets/img/faq/img-003.png`)" type="image/png"> 
      <img class="faq-box--003" :src="require(`@/assets/img/faq/img-003.png`)"/>
    </picture>
    <picture>
      <source class="faq-box--004" :srcset="require(`@/assets/img/faq/img-004.webp`)" type="image/webp">
      <source class="faq-box--004" :srcset="require(`@/assets/img/faq/img-004.png`)" type="image/png"> 
      <img class="faq-box--004" :src="require(`@/assets/img/faq/img-004.png`)"/>
    </picture>
    <picture>
      <source class="faq-box--005" :srcset="require(`@/assets/img/faq/img-005.webp`)" type="image/webp">
      <source class="faq-box--005" :srcset="require(`@/assets/img/faq/img-005.png`)" type="image/png"> 
      <img class="faq-box--005" :src="require(`@/assets/img/faq/img-005.png`)"/>
    </picture>
    <picture>
      <source class="faq-box--006" :srcset="require(`@/assets/img/faq/img-005.webp`)" type="image/webp">
      <source class="faq-box--006" :srcset="require(`@/assets/img/faq/img-005.png`)" type="image/png"> 
      <img class="faq-box--006" :src="require(`@/assets/img/faq/img-005.png`)"/>
    </picture>
  </div>
</template>
<script>
export default {
  name: 'FaqBox',
  data(){
    return {
      flag: true
    }
  },
  methods: {
    animation(){
      if(this.$route.name === 'index'){
        const
          faqBox = document.querySelector('.faq-box'),
          actionPosition = faqBox.offsetTop - ( window.innerHeight / 2 )
        if(window.scrollY >= actionPosition && this.flag){
          this.flag = false;
        }
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', e => this.animation())
    window.addEventListener('touchmove', e => this.animation())
    window.addEventListener('resize', e => this.animation())
  }
}
</script>
<style lang="scss" scoped>
.faq{
  &-box{
    position: relative;
    width: 612px;
    height: 770px;
    margin: 0 auto;
    max-width: 100%;
    transform: scale(.5);
    margin-top: -200px;
    margin-bottom: -160px;
    @media(min-width:576px){
      max-width: 100%;
      transform: scale(.5);
    }
    @media(min-width:768px){
      transform: scale(.9);
      margin-top: 0;
      margin-bottom: 0;
    }
    @media(min-width:992px){
      transform: scale(.7);
    }
    @media(min-width:1200px){
      margin: 0 16px;
      transform: scale(.9);
    }
    img{
      display: block;
      position: absolute;
    }
    &--001{
      z-index: 5;
      left: 100%;
      top: 100%;
      opacity: 0;
      transform: translate(33px, 18px);
      transition: 1s ease, transform .7s ease 1s;
    }
    &--002{
      z-index: 3;
      left: -100%;
      top: 100%;
      opacity: 0;
      transform: translate(40px, 10px);
      transition: 1s ease .1s, transform .7s ease 1.1s;
    }
    &--003{
      z-index: 4;
      left: 250px;
      top: 70px;
      transform: scale(0);
      transition: 1s ease .6s;
    }
    &--004{
      z-index: 2;
      left: 63px;
      top: 44px;
      transform: scale(0);
      transition: 1s ease .7s;
    }
    &--005{
      z-index: 1;
      left: 98px;
      top: 637px;
      transform: scale(0);
      transition: 2s ease 2s;
      @media(max-width:575px){
        left: -20px;
      }
      @media(max-width:375px){
        top: 600px;
        left: -30px;
      }
      @media(min-width:1200px){
        left: 90px;
      }
    }
    &--006{
      z-index: 1;
      left: 442px;
      top: 465px;
      transform: scale(0);
      transition: 2s ease 2s;
      @media(max-width:575px){
        left: 320px;
      }
      @media(max-width:375px){
        top: 500px;
        left: 310px;
      }
      @media(min-width:1200px){
        left: 460px;
      }
    }
  }
  &-active{
    .faq-box--001{
      left: 200px;
      top: 52px;
      opacity: 1;
      transform: translate(0, 0);
      animation: 4s linear 2s infinite anim1;
      @media(max-width:575px){
        left: 100px;
      }
      @media(max-width:375px){
        top: 130px;
        left: 80px;
      }
      @media(min-width:1200px){
        left: 240px;
      }
    }
    .faq-box--002{
      left: 0;
      top: 32px;
      opacity: 1;
      transform: translate(0, 0);
      animation: 5s linear 2s infinite anim2;
      @media(max-width:575px){
        left: -80px;
      }
      @media(max-width:375px){
        top: 90px;
        left: -80px;
      }
      @media(min-width:1200px){
        left: 40px;
      }
    }
    .faq-box--003{
      left: 220px;
      top: 70px;
      transform: scale(1);
      animation: 4s linear 2s infinite  anim1;
      @media(max-width:575px){
        left: 130px;
      }
      @media(max-width:375px){
        top: 130px;
        left: 110px;
      }
      @media(min-width:1200px){
        left: 260px;
      }
    }
    .faq-box--004{
      left: 30px;
      top: 44px;
      transform: scale(1);
      animation: 5s linear 2s infinite  anim2;
      @media(max-width:575px){
        left: -40px;
      }
      @media(max-width:375px){
        top: 100px;
        left: -50px;
      }
      @media(min-width:1200px){
        left: 70px;
      }
    }
    .faq-box--005{
      transform: scale(1);
      animation: 5s linear 5s infinite anim3;
    }
    .faq-box--006{
      transform: scale(1);
      animation: 4s linear 5s infinite anim3;
    }
  }
}

@keyframes anim1 {
  50%{ transform: translate(0, -20px) scale(.95) }
}
@keyframes anim2 {
  50%{ transform: translate(0, 20px) scale(.95) }
}
@keyframes anim3 {
  0%{ transform: scale(1) }
  50%{ transform: scale(.6) }
  100%{ transform: scale(1) }
}
</style>

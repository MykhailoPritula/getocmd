<template>
  <section class="slider-section" id="ingredients">
    <h2 class="section-title">A Few Key Ingredients</h2>
    <div class="slider">
      <div class="slider-wrap">
        <div class="slide" v-for="(item, index) in items" :class="(index === 0)?'slide-active':''">
          <div class="slide-box">
            <picture>
                <source :srcset="item.webp" :alt="item.title" type="image/webp">
                <source :srcset="item.png" :alt="item.title" type="image/png"> 
                <img :src="item.png" :alt="item.title">
              </picture>
            <h3 v-html="item.title"></h3>
            <p v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="slider-btn slider-prev" @click="sliderPrev">
      <circle cx="24" cy="24" r="23.5" stroke="#AC8F71"/>
      <path d="M19.15 27.375C18.1 26.1417 17 25.2417 15.85 24.675V24.225C17 23.6417 18.1 22.7417 19.15 21.525H20.025C19.525 22.575 19.0417 23.375 18.575 23.925H33.15V24.975H18.575C19.0417 25.525 19.525 26.325 20.025 27.375H19.15Z" fill="#AC8F71"/>
    </svg>
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="slider-btn slider-next" @click="sliderNext">
      <circle r="23.5" transform="matrix(-1 0 0 1 24 24)" stroke="#AC8F71"/>
      <path d="M29.85 27.375C30.9 26.1417 32 25.2417 33.15 24.675V24.225C32 23.6417 30.9 22.7417 29.85 21.525H28.975C29.475 22.575 29.9583 23.375 30.425 23.925H15.85V24.975H30.425C29.9583 25.525 29.475 26.325 28.975 27.375H29.85Z" fill="#AC8F71"/>
    </svg>
  </section>
</template>
<script>
export default {
  data(){
    return{
      slideAngle: 0,
      sliderWrapAngle: 0
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    sliderInit(){
      const slides = document.querySelectorAll('.slider .slide')

      this.slideAngle = 360 / slides.length;

      slides.forEach((slide, index) => {
        const
          slideItemTransform = `translate(-50%, -50%) rotate(${index * this.slideAngle}deg)`,
          slideItem = document.querySelector(`.slider .slide:nth-child(${++index})`)

        slideItem.style.transform = slideItemTransform;
      })
    },
    removeSlideActive(elem){
      const slides = document.querySelectorAll('.slider .slide')
      slides.forEach(slide => slide.classList.remove('slide-active'))
      elem.classList.add('slide-active')
    },
    sliderPrev(e){
      e.preventDefault()
      const activSlide = document.querySelector('.slide-active')
      if(activSlide.previousElementSibling){
        this.removeSlideActive(activSlide.previousElementSibling)
      } else {
        this.removeSlideActive(document.querySelector('.slider .slide:last-child'))
      }
      this.sliderWrapAngle = this.sliderWrapAngle + this.slideAngle;
      document.querySelector('.slider-wrap').style.transform = `rotate3d(0,0,1, ${this.sliderWrapAngle}deg)`;
    },
    sliderNext(e){
      e.preventDefault()
      const activSlide = document.querySelector('.slide-active')
      if(activSlide.nextElementSibling){
        this.removeSlideActive(activSlide.nextElementSibling)
      } else {
        this.removeSlideActive(document.querySelector('.slider .slide:first-child'))
      }
      this.sliderWrapAngle = this.sliderWrapAngle - this.slideAngle;
      document.querySelector('.slider-wrap').style.transform = `rotate3d(0,0,1, ${this.sliderWrapAngle}deg)`;
    }
  },
  mounted(){
    this.sliderInit()
  }
}
</script>
<style lang="scss" scoped>
.slider-section{
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
.slider{
  position: relative;
  width: 600px;
  @media(max-width:566px){
    left: 50%;
    transform: translate(-50%,0);
  }
  @media(min-width:567px){
    width: calc(100vw - 10px);
    margin: 0 auto;
  }
  @media(min-width:768px){
    width: calc(100vw - 30px);
  }
  @media(min-width:1330px){
    width: 1300px;
  }
  &-section {
    background: #E2BDAF;
    padding-top: 60px;
    max-height: 520px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    @media(min-width:567px){
      max-height: 600px;
    }
    @media(min-width:768px){
      padding-top: 80px;
      max-height: 600px;
    }
    @media(min-width:992px){
      max-height: 700px;
      padding-top: 100px;
    }
    @media(min-width:1200px){
      max-height: 847px;
      padding-top: 120px;
    }
  }
  &-wrap{
    position: relative;
    border-radius: 50%;
    transition: 1s ease-in-out;
    width: 600px;
    height: 600px;
    transform: translate(-50% -50%);
    @media(min-width:567px){
      width: calc(100vw - 10px);
      height: calc(100vw - 10px);
    }
    @media(min-width:768px){
      width: calc(100vw - 30px);
      height: calc(100vw - 30px);
    }
    @media(min-width:1330px){
      width: 1300px;
      height: 1300px;
    }
    &:before{
      content:"";
      background: #D6BEA5;
      position: absolute;
      left: 50%; top: 50%;
      width: 77%; height: 75%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-btn{
    position: absolute;
    background: none;
    border: none;
    bottom: 10px;
    padding: 0;
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
    transition: background .3s ease;
    @media(min-width:768px){
      bottom: 20px;
    }
    @media(min-width:992px){
      bottom: 30px;
    }
    &:hover{
      background-color: rgba(255, 255, 255, .7);
    }
    *{
      pointer-events: none;
    }
  }
  &-prev{
    right: calc(50% + 20px);
  }
  &-next{
    left: calc(50% + 20px);
  }
}
.slide{
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  &-box{
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    transform: scale(.9) translate(0, 0);
    transition: 1s ease-in-out;
    @media(min-width:768px){
      max-width: 320px;
    }
    @media(min-width:992px){
      max-width: 380px;
    }
    @media(min-width:1200px){
      max-width: 400px;
    }
    img{
      margin: 0 auto;
      margin-bottom: 15px;
      display: block;
      height: auto;
      width: 70px;
      @media(max-width:566px){
        opacity: 0;
        transition: 1s ease;
      }
      @media(min-width:768px){
        width: 100px;
      }
      @media(min-width:992px){
        width: 125px;
        margin-bottom: 30px;
      }
      @media(min-width:1200px){
        width: 175px;
        margin-bottom: 40px;
      }
    }
  }
  h3{
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #FFFBF9;
    margin-bottom: 20px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease-in-out .5s;
    @media(min-width:992px){
      margin-bottom: 15px;
    }
    @media(min-width:1200px){
      margin-bottom: 20px;
    }
  }
  p{
    font-size: 13px;
    line-height: 1.3;
    text-align: center;
    color: #707070;
    max-height: 0px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease-in-out .5s, max-height 1s ease-in-out .5s;
    @media(min-width:768px){
      font-size: 13px;
    }
    @media(min-width:992px){
      font-size: 14px;
    }
    @media(min-width:1200px){
      font-size: 15px;
    }
  }
  &-active{
    .slide-box{
      padding-top: 0;
      img{
        @media(max-width:566px){
          width: 100px;
          opacity: 1;
        }
      }
    }
    h3{
      opacity: 1;
      visibility: visible;
    }
    p{
      opacity: 1;
      visibility: visible;
    }
  }
}
.section-title{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  color: #FFFBF9;
  margin:0 0 40px;
  text-align: center;
  @media(min-width:768px){
    font-size: 30px;
  }
}
</style>
<style lang="scss">
@media(max-width:566px){
  .slide-active p span{
    display: none;
  }
}
</style>
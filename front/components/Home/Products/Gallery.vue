<template>
  <div class="gallery">
    <svg v-if="svgAnimation" class="gallery-bg" type="image/svg+xml" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="619" height="606" viewBox="0 0 619 606" fill="none">
      <defs>
        <path id="r1" fill="#FE6F61" d="M554.5 290.5C560 443 346.072 548.5 189.5 548.5C5.49954 548.5 147 450.498 147 300C147 149.502 -27.0732 39.5 129.5 39.5C266.5 47.5 534 123.5 554.5 290.5Z">
          <animate id="p1" attributeName="d" dur="15s" repeatCount="indefinite" begin="0.5s" values="M554.5 290.5C560 443 346.072 548.5 189.5 548.5C5.49954 548.5 147 450.498 147 300C147 149.502 -27.0732 39.5 129.5 39.5C266.5 47.5 534 123.5 554.5 290.5Z;M582.5 327.5C588 480 427.5 483.5 289 448C110.762 402.314 76.5 426.998 76.5 276.5C76.5 126.002 118.427 14.5 275 14.5C412 22.5 562 160.5 582.5 327.5Z;M569.5 171C575 323.5 544 474.5 408 506.5C228.891 548.643 154.5 494 101.5 420C37.4999 291.5 49 97 144.5 52.5C212 -2 549 3.99998 569.5 171Z;M502 99.0002C507.5 251.5 409 200.5 476.5 420.5C530.471 596.407 185 426 132 352C67.9999 223.5 151 143.5 246.5 99.0002C314 44.5002 481.5 -67.9998 502 99.0002Z;M416.5 121C489 167.009 531 136 531 291.5C531 475.5 289 467 236 393C172 264.5 47.5009 76.5 143.001 32C210.501 -22.5 276.258 32 416.5 121Z;M554.5 290.5C560 443 346.072 548.5 189.5 548.5C5.49954 548.5 147 450.498 147 300C147 149.502 -27.0732 39.5 129.5 39.5C266.5 47.5 534 123.5 554.5 290.5Z;" />
        </path>
        <path id="r2" fill="#FE6F61" fill-opacity="0.5" d="M376.171 537.902C240.5 586.5 73.0172 403.352 32.4932 252.115C-15.1296 74.3842 116.156 185.698 261.526 146.746C406.895 107.795 468 -86.0001 507.999 62.4999C529.999 175 537.5 467.5 376.171 537.902Z">
          <animate id="p2" attributeName="d" dur="15s" repeatCount="indefinite" begin="0.5s" values="M376.171 537.902C240.5 586.5 73.0172 403.352 32.4932 252.115C-15.1296 74.3842 116.156 185.698 261.526 146.746C406.895 107.795 468 -86.0001 507.999 62.4999C529.999 175 537.5 467.5 376.171 537.902Z;M431 486C295.329 534.598 91.5246 479.738 51.0006 328.5C3.3779 150.77 86.1307 115.952 231.5 76.9999C376.87 38.0482 495 22 549.5 124C567.5 229.5 592.329 415.598 431 486Z;M355.5 572.5C219.829 621.098 72.024 405.738 31.5 254.5C-16.1227 76.7697 195.131 107.952 340.5 69C485.87 30.0483 534 152.5 588.5 254.5C606.5 360 516.829 502.098 355.5 572.5Z;M275.5 545C139.829 593.598 37.9995 382.5 63.4994 243.5C96.7006 62.5201 87.1304 87.9517 232.5 49C377.869 10.0484 437 133 476.5 243.5C494.5 349 436.829 474.598 275.5 545Z;M398.499 391.5C262.828 440.098 51.499 520.5 76.999 381.5C110.2 200.52 -8.86955 141.952 136.5 103C281.869 64.0483 479.999 -26.4999 519.499 84C537.499 189.5 559.828 321.098 398.499 391.5Z;M376.171 537.902C240.5 586.5 73.0172 403.352 32.4932 252.115C-15.1296 74.3842 116.156 185.698 261.526 146.746C406.895 107.795 468 -86.0001 507.999 62.4999C529.999 175 537.5 467.5 376.171 537.902Z;" />
        </path>
      </defs>
      <use xlink:href="#r1"/>
      <use xlink:href="#r2"/>
    </svg>
    <svg v-else class="gallery-bg" type="image/svg+xml" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="619" height="606" viewBox="0 0 619 606" fill="none">
      <defs>
        <path id="r1" fill="#FE6F61" d="M554.5 290.5C560 443 346.072 548.5 189.5 548.5C5.49954 548.5 147 450.498 147 300C147 149.502 -27.0732 39.5 129.5 39.5C266.5 47.5 534 123.5 554.5 290.5Z" />
        <path id="r2" fill="#FE6F61" fill-opacity="0.5" d="M376.171 537.902C240.5 586.5 73.0172 403.352 32.4932 252.115C-15.1296 74.3842 116.156 185.698 261.526 146.746C406.895 107.795 468 -86.0001 507.999 62.4999C529.999 175 537.5 467.5 376.171 537.902Z" />
      </defs>
      <use xlink:href="#r1"/>
      <use xlink:href="#r2"/>
    </svg>
    <img class="gallery-img" :src="require(`@/assets/img/campaign/sl-01.png`)"/>
    <ul class="gallery-nav">
      <li v-for="i in 3" :class="(i === 1)?'active':''" @click="galleryNav">
        <img :src="require(`@/assets/img/campaign/sl-0${i}_sm.png`)" :data-src="require(`@/assets/img/campaign/sl-0${i}.png`)" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      svgAnimation: false
    }
  },
  methods: {
    galleryItems(){
      const items = document.querySelectorAll('.gallery-nav li')
      items.forEach(item => item.classList.remove('active'))
    },
    galleryNav(e){
      this.galleryItems()
      e.target.classList.add('active')
      document.querySelector('.gallery-img').style.transform = 'translate(-50%, -50%) scale(.5)';
      document.querySelector('.gallery-img').style.opacity = '0';
      setTimeout(()=>{
        document.querySelector('.gallery-img').src = e.target.children[0].dataset.src;
      }, 500);
      setTimeout(()=>{
        const winWidth = window.innerWidth
        if(winWidth > 1200){
          document.querySelector('.gallery-img').style.transform = 'translate(-50%, -50%)';
        }
        else if(winWidth > 768){
          document.querySelector('.gallery-img').style.transform = 'translate(-50%, -50%)';
        }
        else(winWidth < 768)
          document.querySelector('.gallery-img').style.transform = 'translate(-50%, -50%)';
        document.querySelector('.gallery-img').style.opacity = '1';
      }, 500);
    }
  },
  mounted(){
    setTimeout(()=>{
      this.svgAnimation = true
    }, 1500);
  }
}
</script>
<style lang="scss" scoped>
.gallery{
  position: relative;
  perspective: 500px;
  &-bg{
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
    @media(max-width:991px){
      width: 500px;
      margin: 0 auto;
    }
  }
  &-img{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    transition: .7s ease-in-out;
    width: 100%;
    height: auto;
    max-width: 280px;
    @media(min-width:576px){
      max-width: 400px;
    }
    @media(min-width: 992px){
      top: 50%;
      max-width: 350px;
    }
    @media(min-width: 1200px){
      max-width: 400px;
    }
  }
  &-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(center/center);
    text-align: center;
    margin-bottom: 20px;
    @media(min-width:1200px){
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 0;
    }
    li{
      padding: 5px 15px;
      position: relative;
      cursor: pointer;
      &:before{
        content:"";
        position: absolute;
        width: 30px;
        height: 30px;
        border: 1px solid #FE6F61;
        z-index: 1;
        border-radius: 50%;
        top: 0; right: 0;
      }
      &.active{
        &:before{
          background: #FE6F61;
        }
      }
      &:hover{
        img{
          transform: scale(1.5);
        }
      }
    }
    img{
      display: block;
      height: 45px;
      width: auto;
      position: relative;
      z-index: 2;
      pointer-events: none;
      transition: transform .5s ease-in-out;
    }
  }
}
</style>
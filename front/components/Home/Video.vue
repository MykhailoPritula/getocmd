<template>
  <section class="video-section" id="video">
    <div class="container">
      <h2>Video Reviews</h2>
      <div class="video-wrap">
        <div class="video" v-for="item in videos">
          <div class="poster" :data-video-src="item.videoId"></div>
          <picture>
            <source class="image" :srcset="item.webp" type="image/webp">
            <source class="image" :srcset="item.jpg" type="image/jpg"> 
            <img class="image" :src="item.jpg">
          </picture>
          <div class="title">{{ item.title }}</div>
          <button @click="playVideo($event, item.videoId)"></button>   
        </div>
        <picture>
          <source class="image-top" srcset="@/assets/img/video-background/img-001.webp" type="image/webp">
          <source class="image-top" srcset="@/assets/img/video-background/img-001.png" type="image/png"> 
          <img class="image-top" src="@/assets/img/video-background/img-001.png">
        </picture>
        <picture>
          <source class="image-bottom" srcset="@/assets/img/video-background/img-002.webp" type="image/webp">
          <source class="image-bottom" srcset="@/assets/img/video-background/img-002.png" type="image/png"> 
          <img class="image-bottom" src="@/assets/img/video-background/img-002.png">
        </picture>
        <picture>
          <source class="image-lines" srcset="@/assets/img/video-background/img-lines.webp" type="image/webp">
          <source class="image-lines" srcset="@/assets/img/video-background/img-lines.png" type="image/png"> 
          <img class="image-lines" src="@/assets/img/video-background/img-lines.png">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import BigPicture from 'bigpicture'
export default {
  methods: {
    playVideo(e, id) {
      BigPicture({
        el: e.target,
        vimeoSrc: id,
      })
    }
  },
  computed: {
    videos() {
      return this.$store.state.videos
    }
  }
}
</script>

<style lang="scss" scoped>
.video-section{
  padding-top: 50px;
  padding-bottom: 50px;
  background: #E2BDAF;
  position: relative;
  overflow: hidden;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  h2{
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #FFFBF9;
    text-align: center;
    margin-bottom: 40px;
  }
  .video-wrap{
    text-align: center;
    .image-top{
      position: absolute;
      top: 1%;
      left: 0;
      z-index: 2;
      @media(min-width:1600px){
        left: 5%;
      }
      @media(min-width:1800px){
        left: 10%;
      }
      @media(min-width:2000px){
        left: 15%;
      }
    }
    .image-bottom{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
    .image-lines{
      position: absolute;
      width: auto;
      max-width: 714px;
      height: auto;
      max-height: auto;
      z-index: 2;
      right: 0;
      top: 15%;
      @media(max-width:767px){
        right: -40%;
      }
      @media(max-width:575px){
        right: 0;
      }
      @media(min-width:2000px){
        right: 35%;  
      }
    }
    .image{
      border-radius: 15px;
    }
  }
  .video{
    background: #9F6B58;
    border-radius: 10px;
    padding: 20px 20px 50px 20px;
    max-width: 250px;
    width: 100%;
    max-height: 380px;
    height: 100%;
    display: inline-block;
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    position: relative;
    z-index: 5;
    @media(min-width:992px){
      margin-bottom: 40px;
    }
    .title{
      text-align: left;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #fff;
      margin: 16px 0;
    }
    button{
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 75px;
      width: 100%;
      max-height: 55px;
      height: 100%;
      background: #FE6F61;
      border-radius: 10px;
      border: none;
      transition: .3s ease;
      &:hover {
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
        transform: translate(-50%, -50%) scale(.9);
      }
      &:after{
        content: '';
        position: absolute; 
        width: 0;
        height: 0;
        margin-left: 4px;
        border-style: solid;
        border-width: 13px 4px 12px 20px;
        border-radius: 5px;
        border-color: transparent transparent transparent #fff;
        transform: translate(-50%, -50%);
      }  
    }
  }
}
</style>

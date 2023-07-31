<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="testimonials-row">
        <div class="testimonials-woman">
          <picture>
            <source srcset="@/assets/img/campaign/testimonials-woman.webp" type="image/webp">
            <source srcset="@/assets/img/campaign/testimonials-woman.jpg" type="image/jpg">
            <img src="@/assets/img/campaign/testimonials-woman.jpg" >
          </picture>
        </div>
        <div class="testimonials-posts">
          <h2>Customer Testimonials</h2>
          <div class="testimonials-post testimonials-post--main">
            <div class="title">
              <h3>Wrinkle Reduction</h3>
              <PartialsStars  :rate="4.9"/>
            </div>
            <div class="title">
              <h3>Cream Texture</h3>
              <PartialsStars  :rate="4.8"/>
            </div>
            <div class="title">
              <h3>Easy to Use</h3>
              <PartialsStars  :rate="4.7"/>
            </div>
            <div class="title">
              <h3>Skin Tightening Effect</h3>
              <PartialsStars  :rate="4.8"/>
            </div>
            <div class="title">
              <h3>Value for Money</h3>
              <PartialsStars  :rate="4.9"/>
            </div>
          </div>

          <transition-group name="list" tag="div" v-for="(post, index) in posts" v-bind:key="index">
            <div class="testimonials-post list-item" v-if="post.isShow" v-bind:key="index">
              <div class="testimonials-post--inner">
                <div class="subtitle">
                  <h3>{{ post.subtitle }}</h3>
                  <ul class="stars-rating">
                    <li class="stars-f"></li>
                    <li class="stars-f"></li>
                    <li class="stars-f"></li>
                    <li class="stars-f"></li>
                    <li class="stars-f"></li>
                  </ul>
                </div>
                <p>{{ post.text }}</p>
                <span>{{ post.name }}</span>
              </div>
            </div>
          </transition-group>
          <button @click="showInfo"><span v-html="(opened) ? 'Less':'More'"></span> testimonials</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      opened: false
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    showInfo(){
      if(this.opened){
        this.posts.forEach(post => post.isShow = false)
        for(let i = 0; i < 3; i++){
          this.posts[i].isShow = true;
        }
        this.opened = false;
      } else {
        this.posts.forEach(post => post.isShow = true)
        this.opened = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials{
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  &-row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-woman{
    margin: 0 auto 40px auto;
    @media(min-width:1200px){
      margin: 0 auto;
    }
    @media(min-width:1200px){
      flex: 1 580px;
      max-width: 580px;
    }
    img{
      display: block;
      width: 100%;
    }
  }
  &-posts{
    position: relative;
    @media(min-width:1200px){
      flex: 1 calc(100% - 580px - 40px);
      max-width: calc(100% - 580px - 40px);
    }
    h2{
      text-align: center;
      font-weight: 600;
      font-size: 30px;
      line-height: 36px;
      color: #E2BDAF;
      margin-bottom: 40px;
      @media(min-width:1200px){
        text-align: left;
      }
    }
    button{
      display: block;
      margin: 0 auto;
      padding: 15px 40px;
      background: #FE6F61;
      border-radius: 10px;
      border:none;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #FFFBF9;
      transition: .3s ease;
      &:hover {
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
        transform: scale(1.05);
      }
    }
  }
  &-post{
    &:not(:last-child){
      margin-bottom: 20px;
    }
    &:last-child{
      margin-bottom: 40px;
    }
    padding: 20px;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    transition: max-height .7s linear, opacity .7s ease, .5s linear;
    .subtitle{
      display: flex;
      justify-content: space-between;
      @media(max-width:575px){
        flex-direction: column;
          margin-bottom: 20px;
      }
    }
    h3{
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #707070;
      margin-bottom: 10px;
      @media(max-width:575px){
        margin-bottom: 0;
      }
    }
    p{
      font-size: 15px;
      line-height: 18px;
      color: #707070;
      margin-bottom: 20px;
    }
    span{
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #707070
    }
    .stars-rating{
      li{
        color: #FE6F61;
      }
    }
    &--main{
      padding: 20px;
      background: rgba(226, 189, 175, 0.2);
      border: 1px solid #C4C4C4;
      border-radius: 10px;
      margin-bottom: 40px;
      .title{
        display: flex;
        justify-content: space-between;
        @media(max-width:575px){
          flex-direction: column;
        }
        h3{
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          color: #707070;
          }
        .stars{
          display: flex;
          ul{
            margin-right: 10px;
          }
          &-rating{
            li{
              color: #9F6B58;
            }
          }
        }
      }
    }
  }
}

.stars {
  max-width: 130px;
  display: inline-block;
  margin-right: 7px;
  &-rating {
    display: flex;
    &:not(:last-child){
      margin-bottom: 10px;
    }
    li {
      display: block;
      font-size: 20px;
      font-family: Arial !important;
      position: relative;
      color: #9F6B58;
    }
  }
  &-f:before {
    content: "★";
  }
}

.list-enter, .list-leave-to{
  overflow: hidden;
  max-height: 0px;
  padding:0 20px;
  margin: 0;
  opacity: 0;
  border-width: 0;
}
</style>

<template>
  <nav class="nav" v-if="this.$route.name === 'index'">
    <div></div>
    <button id="btn"  @click="openMenu" v-if="closeMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-list">
      <li v-for="item in navigation" @click="scrollTo(item.id)" :title="`Go to ${item.title} section`">{{ item.title }}</li>
      <picture>
        <source class="nav-image" srcset="@/assets/img/campaign/nav-image.webp" type="image/webp">
        <source class="nav-image" srcset="@/assets/img/campaign/nav-image.png" type="image/png"> 
        <img class="nav-image" src="@/assets/img/campaign/nav-image.png">
      </picture>
      <picture>
        <source class="nav-lines" srcset="@/assets/img/campaign/nav-lines-bg.webp" type="image/webp">
        <source class="nav-lines" srcset="@/assets/img/campaign/nav-lines-bg.png" type="image/png"> 
        <img class="nav-lines" src="@/assets/img/campaign/nav-lines-bg.png">
      </picture>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  computed: {
    navigation() {
      return this.$store.state.navigation
    }
  },
  methods: {
    openMenu(e) {
      e.preventDefault()
      e.target.parentNode.classList.toggle('nav-active')
        if(e.target.parentNode.classList.contains('nav-active')){
          document.documentElement.style.overflow = 'hidden'
          document.documentElement.style.height = '100vh';
          document.documentElement.style.width = '100vw';
        } else {
          document.documentElement.style.overflow = 'auto'
          document.documentElement.style.height = 'auto';
          document.documentElement.style.width = 'auto';
        }
    },
    closeMenu(e){
      document.querySelector('.nav').classList.remove('nav-active')
      document.documentElement.style.overflow = 'auto'
    },
    scrollTo(id){
      const box = document.getElementById(id)
      if(window.innerWidth >= 768){
        window.scrollTo({
          top: box.offsetTop,
          behavior: "smooth"
        })
      } else {
        window.scrollTo({
          top: box.offsetTop - 60,
          behavior: "smooth"
        })
      }
      this.closeMenu()
    }
  }
}
</script>
<style lang="scss" scoped>
.nav{
  width: 100%;
  display: block;
  &-image{
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 339px;
    height: auto;
    max-width: 100%;
    visibility: hidden;
    opacity: 0;
    @media(max-width:375px){
      width: 230px;
    }
    transition: opacity .5s ease 1s;
    @media(min-width:768px){
      display: none;
    }
  }
  &-lines{
    width: 1056px;
    max-width: 1056px;
    height: auto;
    height: auto;
    position: fixed;
    left: 50%; bottom: 0;
    transform: translate(-50%, 30%);
    visibility: hidden;
    opacity: 0;
    transition: opacity .5s ease 1s;
    z-index: 1;
    @media(max-width:375px){
      width: 600px;
      transform: translate(-50%, 30%);
    }
    @media(min-width:768px){
      display: none;
    }
  }
  ul{
    padding-top: 0;
    @media(min-width:768px){
      display: flex;
      justify-content: flex-end;
    }
    @media(max-width:767px){
      position: fixed;
      background: #FFFBF9;
      transition: .4s ease-in-out;
      padding-bottom: 30px;
      padding: 0;
      top: 64px;
      height: calc(100vh - 64px);
      left: 0; width: 100%;
      overflow: hidden;
      max-height: 0px;
      opacity: 0;
      transition: max-height 1s ease, opacity .5s ease;
      padding-top: 78px;
      padding-left: 20px;
    }
    li{
      position: relative;
      text-transform: uppercase;
      font-size: 20px;
      line-height: 24px;
      color: #E2BDAF;
      cursor: pointer;
      margin-top: 20px;
      z-index: 5;
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 28px;
        }
        @media(min-width:992px){
          margin-left: 40px;
        }
        @media(min-width:1200px){
          margin-left: 50px;
        }
      }
      &:hover{
        font-weight: bold;
        transform: scale(1.05);
      }
      @media(min-width:768px){
        font-size: 15px;
        line-height: 20px;
        margin-top: 0;
      }
      @media(min-width:992px){
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
  button{
    background: none;
    border: none;
    width: 50px;
    height: 40px;
    border-radius: 4px;
    position: absolute;
    right: 10%;
    top: 50%;
    z-index: 20;
    transform: translate(0, -50%);
    @media(min-width:768px){
      display: none;
    }
    span {
      display: block;
      margin: 6px 0;
      background: #E2BDAF;
      width: 100%;
      height: 4px;
      flex: 1 100%;
      pointer-events: none;
    }
  }
  &-active{
    ul{
      max-height: calc(100vh - 64px);
      opacity: 1;
    }
    button{
      &:after{
          content:"+";
          display: block;
          position: absolute;
          left: 20px;
          top: 15px;
          color:#E2BDAF;
          font-weight: 300;
          transform: scale(5) rotate(45deg);
          line-height: 1;
        }
      span{
        display: none;
      }
    }
    .nav-image{
      visibility: visible;
      opacity: 1;
    }
    .nav-lines{
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

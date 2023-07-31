<template>
  <section class="section-tabs">
    <div class="description">Unique cream creates dramatically younger skin, restores the firmness, volume &amp; elasticity you’ve been looking for.</div>
    <div class="tabs" id="tabs">
      <ul class="tabs__nav" data-tab="tab1">
        <li class="tab1 active" @click="tabs('tab1')">One Time Purchase</li>
        <li class="tab2" @click="tabs('tab2')">Subscribe and Save</li>
      </ul>
      <div class="tabs__tab tab1 active">
        <div class="row">
          <div class="col-12 col-lg-4">
            <PartialsProduct
              quantity="1<br>Jar"
              :ea="products[0].ea"
              :save="products[0].save"
              :shipping="products[0].shipping"
              :id="products[0].id"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              class="product-best"
              quantity="6<br>Jars"
              :ea="products[2].ea"
              :save="products[2].save"
              :shipping="products[2].shipping"
              :id="products[2].id"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              quantity="3<br>Jars"
              :ea="products[1].ea"
              :save="products[1].save"
              :shipping="products[1].shipping"
              :id="products[1].id"
            />
          </div>
        </div>
      </div>
      <div class="tabs__tab tab2">
        <div class="row">
          <div class="col-12 col-lg-4">
            <PartialsProduct
              type="subscribe"
              quantity="1<br>Jar"
              :ea="products[3].ea"
              :save="products[3].save"
              :shipping="products[3].shipping"
              :id="products[3].id"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              class="product-best"
              type="subscribe"
              quantity="6 <br> Jars"
              :ea="products[5].ea"
              :save="products[5].save"
              :shipping="products[5].shipping"
              :id="products[5].id"
            />
          </div>
          <div class="col-12 col-lg-4">
            <PartialsProduct
              type="subscribe"
              quantity="3 <br> Jars"
              :ea="products[4].ea"
              :save="products[4].save"
              :shipping="products[4].shipping"
              :id="products[4].id"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    tabs(tab){
      document.querySelector('.tabs__nav .active').classList.remove('active')
      document.querySelector('.tabs__tab.active').classList.remove('active')
      document.querySelector('.tabs__nav').dataset.tab = tab;
      const tabA = document.querySelectorAll(`.${tab}`)
      tabA.forEach(item => item.classList.add('active'))
    }
  },
  computed: {
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 15px;
  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
    color: #707070;
  }
}
.tabs{
  &__nav {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 70px;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    padding: 5px;
    position: relative;
    &:before{
      content:"";
      width: calc(50% - 10px);
      height: calc(100% - 10px);
      background: #E2BDAF;
      position: absolute;
      top: 50%; left: 50%;
      border-radius: 10px;
      z-index: 1;
      transition: transform .5s ease-in-out, width .35s ease;
    }
    &[data-tab="tab1"]{
      &:before{
        transform: translate(-100%, -50%);
      }
    }
    &[data-tab="tab2"]{
      &:before{
        transform: translate(0%, -50%);
      }
    }
    li {
      width: 50%;
      background: none;
      text-align: center;
      font-size: 15px;
      line-height: 18px;
      color: #E2BDAF;
      padding: 10px;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      transition: color .5s ease;
      position: relative;
      z-index: 2;
      user-select: none;
      &:hover {
        color: #FE6F61;
      }
      &.active {
        color: #fff;
        cursor: default;
        &:hover{
          box-shadow: none;
          pointer-events: none;
        }
      }
    }
  }
  &__tab {
    display: none;
    &.active {
      display: block;
    }
    .row{
      & > div {
        order: 2;
        &:nth-child(2) {
          order: 1;
          @media (min-width: 992px) {
            order: 2;
          }
        }
      }
    }
  }
}
</style>


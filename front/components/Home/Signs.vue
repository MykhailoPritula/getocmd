<template>
  <section class="signs" id="signs">
    <div class="container">
      <h1>Signs of Ageing</h1>
      <div class="point-wrap">
        <div class="point" v-for="point in points">
          <div class="point-img">
            <picture>
              <source :srcset="point.webp" type="image/webp"/>
              <source :srcset="point.png"  type="image/png" />
              <img :src="point.png">
            </picture>
          </div>
          <div class="point-num">{{ point.num }}</div>
          <div class="point-text">
            <h4>{{ point.title }}</h4>
            <p>{{ point.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    points(){
      return this.$store.state.points
    }
  }
}
</script>

<style lang="scss" scoped>
.signs{
  background: #E2BDAF;
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
h1{
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #FFFBF9;
  margin-bottom: 40px;
}
.point{
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width:767px){
    flex-wrap: wrap;
  }
  &:not(:last-child){
    margin-bottom: 20px;
    @media(min-width:768px){
      margin-bottom: 40px;
    }
  }
  &-img{
    flex: 1 50%;
    width: 50%;
    max-width: 50%;
    padding-right: 10px;
    img{
      display: block;
      margin-left: auto;
    }
  }
  &-num{
    font-weight: bold;
    font-size: 100px;
    line-height: 119px;
    color: #FFFBF9;
    text-align: center;
    @media(min-width:375px){
      padding: 0 22px;
    }
    @media(max-width:767px){
      flex: 1 50%;
    }
  }
  &-text{
    flex: 1 100%;
    max-width: 100%;
    text-align: center;
    order: 3;
    padding-top: 20px;
    @media(min-width:768px){
      padding-top: 0;
      order: 1;
      text-align: left;
      flex: 1 calc(50% - 137.5px);
      max-width: calc(50% - 137.5px);
    }
    h4{
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #FFFBF9;
      margin-bottom: 10px;
    }
    p{
      font-size: 15px;
      line-height: 18px;
      color: #707070;
    }
  }
  &:nth-child(even){
    .point-img{
      order: 3;
      padding-left: 10px;
      img{
        margin-right: auto;
        margin-left: 0;
      }
    }
    .point-num{
      order: 2;
    }
    .point-text{
      @media(min-width:768px){
        text-align: right;
      }
    }
  }
}
</style>
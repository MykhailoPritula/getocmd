<template>
  <section class="section-title">
    <h1 class="title">Rejuvenation Complex Cream</h1>
    <div class="sub">
    <h2>Formulated by Top MD’s for Neck &amp; Face</h2>
      <div class="stars">
        <ul class="stars-rating">
          <li class="stars-f"></li>
          <li class="stars-f"></li>
          <li class="stars-f"></li>
          <li class="stars-f"></li>
          <li class="stars-f"></li>
        </ul>
      </div>
      <span>4.9 out of 5</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  color: #E2BDAF;
  @media(max-width:375px){
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
    line-height: 44px;
  }
}
.sub {
  font-size: 15px;
  line-height: 18px;
  color: #7f7f7f;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 12px;
  margin-bottom: 12px;
  h2{
    color: #E2BDAF;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  span{
    color: #FE6F61;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 22px;
  }
  .stars {
  max-width: 130px;
  display: inline-block;
  margin-right: 7px;
    &-rating {
      display: flex;
    li {
      display: block;
      font-size: 25px;
      font-family: Arial !important;
      position: relative;
      color: #FE6F61;
    }
  }
  &-f:before {
    content: "★";
  }
}
}

</style>

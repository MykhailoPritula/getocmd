<template>
  <div class="product">
    <div class="product-quantity" v-html="quantity"></div>
    <div class="product-inner">
      <div class="product-price">
        ${{ ea }}
        <span v-if="type !== 'subscribe'">/ea</span>
        <span v-else>/ea (monthly)</span>
      </div>
      <div class="product-save">You Save ${{ save }}</div>
    </div>
    <footer>
      <button class="buy-now button" @click="goToCheckout" >Add To Cart
      </button>
      <span v-if="shipping">+ SHIPPING ${{ shipping }}</span>
      <span v-else>+ Free Shipping</span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productId: this.id,
      productPrice: this.price,
      productName: this.name,
    }
  },
  props: ['quantity', 'ea', 'save', 'shipping', 'type', 'id', 'name', 'price'],
  methods: {
    goToCheckout(e) {
      e.preventDefault()
      const productId=this.productId
      let productObj
      this.products.forEach(product=>{
        if(product.id===productId) {
          productObj=product
        }
      })
      fbq('track', 'AddToCart', {
        currency: "USD",
        value: productObj.price,
        name: `${productObj.name}`,
        img:`${productObj.img}`
      });
      dataLayer.push({
        'event': 'AddToCart',
        'currency': "USD",
        'value': `${productObj.price}`,
        'name': `${productObj.name}`,
        'img':`${productObj.img}`
      });

      localStorage.product_id = this.productId;
      localStorage.product_price = productObj.price;
      localStorage.product_name = productObj.name;

      this.$store.state.product_type = productObj.product_type;
      localStorage.product_type = this.$store.state.product_type;

      this.$router.push('/checkout');
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
.product {
  border-radius: 10px;
  background: #F9F5F4;
  text-align: center;
  position: relative;
  max-width: 250px;
  width: 100%;
  margin: 30px auto;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  &-quantity {
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
    color: #fff;
    background: #E6BEAF;
    border: 3px solid #E6BEAF;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    text-align: center;
    margin: -40px auto 10px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }
  &-inner {
    position: relative;
    padding-top: 60px;
    overflow: hidden;
    background: #FFFBF9;
    border: 1px solid #E5E5E5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &-price {
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: #707070;
    margin-bottom: -10px;
    margin-top: 10px;
    @media(min-width:992px){
      margin-top: 0;
    }
    span{
      font-size: 15px;
      font-weight: 500;
      color: #707070;
    }
  }
  &-save {
    font-size: 15px;
    line-height: 18px;
    color: #707070;
    margin-bottom: 30px;
    @media(min-width:992px){
      margin-bottom: 20px;
    }
  }
  footer {
    background: #E6BEAF;
    padding: 20px 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    span {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
    }
  }
  .buy-now{
    font-size: 15px;
    line-height: 18px;
    background: #FE6F61;
    color: #fff;
    display: block;
    max-width: 117px;
    width: 100%;
    margin: 0 auto 10px;
    padding: 10px 10px;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    transition: .3s ease;
    border: none;
    @media (min-width: 1200px) {
      font-size: 16px;
      line-height: 20px;
    }
    &:hover {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
    }
  }
  &-best {
    margin-top: -15px;
    .product-inner {
      padding-top: 50px;
      @media(min-width:992px){
        padding-bottom: 25px;
      }
      &:after {
        content: "Best Value";
        position: absolute;
        background: #FE6F61;
        color: #fff;
        z-index: 99;
        font-size: 7px;
        line-height: 8px;
        padding: 1px 15px;
        text-transform: uppercase;
        -webkit-transform: rotate(-45deg) translate(-29%, 0);
        transform: rotate(-45deg) translate(-29%, 0);
        left: 0;
        top: 0;
      }
    }
    .product-quantity {
      margin-top: -40px;
      z-index: 100;
    }
    footer {
      @media(min-width:992px){
        padding-bottom: 40px;
      }    
    }
  }
}
</style>

<template>
  <PartialsSell v-if="upsellData" :data="upsellData" />
</template>
<script>
export default {
  name: 'ThreeJarsDrcUpsell',
  data(){
    return {
      upsellData: false
    }
  },
  mounted(){
    const upsellData = {
      sellName: '3 Jars drc upsell',
      purchaseTitle: 'PurchaseUpSell',
      redirectUrl: '/1-jar-drc-downsell',
      productName: 'Rejuvenation Complex Cream 3 Jars',
      productPrice: 99,
      productId: 153,
      waitH2: 'Wait! Rejuvenation Complex Cream Stocks Running Low!',
      waitH3: 'Add 3 Jars & Save Big',
      productTitle: `Get OCMD's Rejuvenation Complex Cream For Our Biggest Discount Ever!`,
      productSlogan: 'Add 3 Jars For Just $33 Per Jar',
      productLine: 255,
      productPriceRetail: 360,
      productSave: 255,
      bonusH2: 'Save 70% by Adding 3 Jars',
      bonusImg: require('@/assets/img/3_jars/3_jars.png'),
      botH2: `Add 3 jars of Rejuvenation Complex Cream to your order and <span>save 70%</span>`,
      botH3: `(That's a $255 savings off the normal price)`,
      botH4: `When you click the button below, we will add 3 jars of OCMD’s Rejuvenation Complex Cream to your order for only $33 each.`
    }
    this.upsellData = upsellData;
  }
}
</script>

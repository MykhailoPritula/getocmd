<template>
  <PartialsSell v-if="upsellData" :data="upsellData" /> 
</template>
<script>
export default {
  name: 'SixJarsDrcUpsell',
  data(){
    return {
      upsellData: false
    }
  },
  mounted(){
    const upsellData = {
      sellName: '6 Jars drc upsell',
      purchaseTitle: 'PurchaseUpSell',
      redirectUrl: '/3-jars-drc-downsell',
      productName: 'Rejuvenation Complex Cream 6 Jars',
      productPrice: 198,
      productId: 154,
      waitH2: 'Wait! Rejuvenation Complex Cream Stocks Running Low!',
      waitH3: 'Add 6 Jars & Save Big',
      productTitle: `Get OCMD's Rejuvenation Complex Cream For Our Biggest Discount Ever!`,
      productSlogan: 'Add 6 Jars For Just $33 Per Jar',
      productLine: 522,
      productPriceRetail: 720,
      productSave: 522,
      bonusH2: 'Save 70% by Adding 6 Jars',
      bonusImg: require('@/assets/img/3_jars/6_jars.png'),
      botH2: `Add 6 jars of Rejuvenation Complex Cream to your order and <span>save 70%</span>`,
      botH3: `(That’s a $522 savings off the normal price)`,
      botH4: `When you click the button below, we will add 6 jars of OCMD’s Rejuvenation Complex Cream to your order for only $33 each.`
    }
    this.upsellData = upsellData;
  }
}
</script>

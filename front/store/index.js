import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    klaviyoID: 'TV3vxN',
    counter: 0,
    cart: false,
    upsell: false,
    downsell: false,
    crosssell: false,
    orderId: false,
    loader: false,
    popup: false,
    payment: 'cc',
    product_type: false,
    mode: 'live',
    campaignId: 12,
    navigation: [
      {
        title: 'FAQ',
        id: 'faq'
      },
      {
        title: 'Signs of aging',
        id: 'signs'
      },
      {
        title: 'Ingredients',
        id: 'ingredients'
      },
      {
        title: 'Testimonials',
        id: 'testimonials'
      },
      {
        title: 'Video reviews',
        id: 'video'
      }
    ],
    products: [
      {
        id: 147,
        price: 49.00,
        shipping: 4.95,
        ea: 49,
        save: 71,
        name: 'Rejuvenation Complex Cream 1 Jar',
        sku: 'C1OFF49',
        product_type: 'onetime'
      },
      {
        id: 148,
        price: 129.00,
        shipping: 0,
        ea: 43,
        save: 231,
        name: 'Rejuvenation Complex Cream 3 Jars',
        sku: 'C3OFF43',
        product_type: 'onetime'
      },
      {
        id: 149,
        price: 240.00,
        shipping: 0,
        ea: 40,
        save: 480,
        name: 'Rejuvenation Complex Cream 6 Jars',
        sku: 'C6OFF40',
        product_type: 'onetime'
      },
      {
        id: 150,
        price: 42.00,
        shipping: 4.95,
        ea: 42,
        save: 76,
        name: 'Rejuvenation Complex Cream 1 Jar subscribe',
        sku: 'SUBC1OFF49',
        product_type: 'subscribe'
      },
      {
        id:151,
        price: 111.00,
        shipping: 0,
        ea: 37,
        save: 243,
        name: 'Rejuvenation Complex Cream 3 Jars subscribe',
        sku: 'SUBC3OFF43',
        product_type: 'subscribe'
      },
      {
        id: 152,
        price: 204.00,
        shipping: 0,
        ea: 34,
        save: 504,
        name: 'Rejuvenation Complex Cream 6 Jars subscribe',
        sku: 'SUBC6OFF40',
        product_type: 'subscribe'
      },
      // {
      //   id: 253,
      //   price: 42.00,
      //   shipping: 4.95,
      //   ea: 42,
      //   save: 76,
      //   name: 'Rejuvenation Complex Cream 1 Jar subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 254,
      //   price: 42.00,
      //   shipping: 4.95,
      //   ea: 42,
      //   save: 76,
      //   name: 'Rejuvenation Complex Cream 1 Jar subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 255,
      //   price: 42.00,
      //   shipping: 4.95,
      //   ea: 42,
      //   save: 76,
      //   name: 'Rejuvenation Complex Cream 1 Jar subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id:256,
      //   price: 111.00,
      //   shipping: 0,
      //   ea: 37,
      //   save: 243,
      //   name: 'Rejuvenation Complex Cream 3 Jars subscribe',
      //   sku: 'SUBC3OFF43',
      //   product_type: 'subscribe'
      // },
      // {
      //   id:257,
      //   price: 111.00,
      //   shipping: 0,
      //   ea: 37,
      //   save: 243,
      //   name: 'Rejuvenation Complex Cream 3 Jars subscribe',
      //   sku: 'SUBC3OFF43',
      //   product_type: 'subscribe'
      // },
      // {
      //   id:258,
      //   price: 111.00,
      //   shipping: 0,
      //   ea: 37,
      //   save: 243,
      //   name: 'Rejuvenation Complex Cream 3 Jars subscribe',
      //   sku: 'SUBC3OFF43',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 259,
      //   price: 204.00,
      //   shipping: 0,
      //   ea: 34,
      //   save: 504,
      //   name: 'Rejuvenation Complex Cream 6 Jars subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 260,
      //   price: 204.00,
      //   shipping: 0,
      //   ea: 34,
      //   save: 504,
      //   name: 'Rejuvenation Complex Cream 6 Jars subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 261,
      //   price: 204.00,
      //   shipping: 0,
      //   ea: 34,
      //   save: 504,
      //   name: 'Rejuvenation Complex Cream 6 Jars subscribe',
      //   sku: 'SUBC6OFF40',
      //   product_type: 'subscribe'
      // },
      // {
      //   id: 218,
      //   price: 1.00,
      //   shipping: 0,
      //   ea: 1,
      //   save: 0,
      //   name: 'Test product',
      //   sku: '0000000000',
      //   product_type: 'onetime'
      // }
    ],
    // selects: {
    //   one: [
    //     {id: 150, text: '30 days'},
    //     {id: 253, text: '45 days'},
    //     {id: 254, text: '60 days'},
    //     {id: 255, text: '75 days'}
    //   ],
    //   three: [
    //     {id: 151, text: '30 days'},
    //     {id: 256, text: '60 days'},
    //     {id: 257, text: '90 days'},
    //     {id: 258, text: '120 days'}
    //   ],
    //   six: [
    //     {id: 152, text: '90 days'},
    //     {id: 259, text: '120 days'},
    //     {id: 260, text: '150 days'},
    //     {id: 261, text: '180 days'}
    //   ]
    // }
    points: [
      {
        webp: require('@/assets/img/campaign/wrinkles-face.webp'),
        png: require('@/assets/img/campaign/wrinkles-face.png'),
        num: '01',
        title: `Wrinkles`,
        text: `As women get older, our skin loses its ability to repair itself like it did when we were young. You might notice your skin getting thinner, drier, and it loses its ability to “snap back” in place. It's one of the reasons why we get wrinkles and fine lines. Other factors like sun damage and pollution can age our skin faster.`
      },
      {
        webp: require('@/assets/img/campaign/saggy-face.webp'),
        png: require('@/assets/img/campaign/saggy-face.png'),
        num: '02',
        title:`Saggy Jowls`,
        text: `This is when the skin around your chin and jaw-line starts to droop. When you’re young, your body makes a protein called collagen that keeps your skin firm. After 30 your body’s natural production of collagen slows which causes your skin to sag.`
      },
      {
        webp: require('@/assets/img/campaign/crepey-face.webp'),
        png: require('@/assets/img/campaign/crepey-face.png'),
        num: '03',
        title: `Crepey Skin`,
        text: `Crepey skin is when your skin becomes thin like crepe paper. The most common cause of crepey skin is sun damage. Although it mostly affects women after 40, in some cases you might notice it as early as your 20’s.`
      },
      {
        webp: require('@/assets/img/campaign/under-eye-face.webp'),
        png: require('@/assets/img/campaign/under-eye-face.png'),
        num: '04',
        title: `Under-Eye Bags`,
        text: `The puffy appearance under your eyes is common with ageing. The skin around your eyelids gets weaker causing them to sag. On top of weaker skin, fluid retention can also make the area under your eyes look swollen.`
      },
      {
        webp: require('@/assets/img/campaign/crows-face.webp'),
        png: require('@/assets/img/campaign/crows-face.png'),
        num: '05',
        title: `Crow’s Feet`,
        text: `These are the creases and lines around the corner of your eyes. As you age, these lines get deeper which makes them stand out more. They can start to show up as early as our 20’ but are more common in our 30’s. `
      },
      {
        webp: require('@/assets/img/campaign/smile-face.webp'),
        png: require('@/assets/img/campaign/smile-face.png'),
        num: '06',
        title: `Smile Lines`,
        text: `These are the vertical lines that stand out around our nose and mouth. As we age, lose collagen, and smile these lines get deeper and can even contribute to wrinkles around our eyes.`
      }
    ],
    items: [
      {
        webp: require('@/assets/img/ingredients/slide-001.webp'),
        png: require('@/assets/img/ingredients/slide-001.png'),
        title: 'Calendula Flower Water',
        text: 'Along with peptides, calendula flower water supports tighter skin by encouraging your body’s natural production of collagen. On top of its youth promoting qualities, calendula flower water also helps your skin retain more moisture which helps reduce the appearance of wrinkles.'
      },
      {
        webp: require('@/assets/img/ingredients/slide-002.webp'),
        png: require('@/assets/img/ingredients/slide-002.png'),
        title: 'Vitamin C',
        text: 'In order to keep your skin looking young, your body needs to make collagen. In order to make collagen, your body must have Vitamin C. Topical vitamin C helps protect your skin from wrinkles as well as protect your skin from sun damage.'
      },
      {
        webp: require('@/assets/img/ingredients/slide-003.webp'),
        png: require('@/assets/img/ingredients/slide-003.png'),
        title: 'Avocado Oil',
        text: 'Science has determined that sun damage accounts for up to 80% of ageing skin. Vitamin E has been shown to reduce the damage cause by the sun. Avocado oil contains Vitamin E as well as fatty acids ithat can help skin keep its youthful elasticity.'
      },
      {
        webp: require('@/assets/img/ingredients/slide-006.webp'),
        png: require('@/assets/img/ingredients/slide-006.png'),
        title: 'Swiss Apple Extract',
        text: 'This potent ingredient contains plant stem cells that were extracted from the rare Swiss apple the Uttwiler Spätlauber. Known for its unique ability to stay fresh several months after harvesting, many see this as mother nature’s miracle skin cell regenerator. <span>As we age our body’s stem cell numbers begin to decline leaving us with fine lines and wrinkles. But Swiss researchers discovered that a twice daily application on a small sample of women decreased wrinkle depth by 15% in just 4 weeks.</span>'
      },
      {
        webp: require('@/assets/img/ingredients/slide-005.webp'),
        png: require('@/assets/img/ingredients/slide-005.png'),
        title: 'The Better Retinol',
        text: 'Retinol is a form of vitamin A that helps reduce wrinkles. The problem with Retinol is it can cause irritation and redness in certain skin types. But Retinyl Palmitate has all the same benefits as regular Retinol but without the skin irritation problems. Once applied to the skin, it can help reduce the appearance of wrinkles while leaving your skin firmer to the touch.'
      },
      {
        webp: require('@/assets/img/ingredients/slide-004.webp'),
        png: require('@/assets/img/ingredients/slide-004.png'),
        title: 'Peptides',
        text: 'The most important protein for beautiful, younger looking skin is collagen.  Age, sun damage, and stress can cause collagen to break down over time which forms wrinkles. Peptides help tell the body to make more collagen to help keep our skin firm and smooth.'
      }
    ],
    posts: [
      {
        isShow: true,
        subtitle: 'Does Just What It Says',
        text: `“This cream is lovely to use. Its rich and creamy texture is just what I needed to lift my skin and to lift my spirits. Using this cream is a luxury as it does just what it says on the pot, and leaves my skin moisturised, supple and firmer.”`,
        name: 'Eileen B.'
      },
      {
        isShow: true,
        subtitle: 'Reduced Fine Lines In Only 4 Days…',
        text: `“I really love this product. I have only been using for 4 days, but it has cleared up blemishes, and reduced some fine lines around my mouth and eyes. I ordered the booster serum to go with it. Cannot wait to see the difference in a month from now!”`,
        name: 'Mikaela N.'
      },
      {
        isShow: true,
        subtitle: 'Greatly Improved Areas About My Eyes, Forehead, and Mouth',
        text: `“This is an amazing product this is my third jar of the age defying cream. I am 59 years old and have noticed a much improved difference in my skin. It looks brighter and has greatly improved areas around my eyes, forehead and mouth. I will definitely continue with this cream it's worth every penny!!!”`,
        name: 'Beth B.'
      },
      {
        isShow: false,
        subtitle: 'Very happy with it…',
        text: `“I'm very happy with it! I've tried everything under the sun and it's been great!”`,
        name: 'Brenda G.'
      },
      {
        isShow: false,
        subtitle: 'So what I say I like this…',
        text: `“I am 48, I've been using this product for about four months; I would definitely recommend it. It's not the only thing I use, I use a retinol at night with it. I'm a bit of a beauty cream aficionado, I tried hundreds. So what I say I like this, it means something.”`,
        name: 'Marni S.'
      },
      {
        isShow: false,
        subtitle: 'So good easy to apply!',
        text: `“I got it already and using it ...its just so great i can feel effect already, so good easy to apply”`,
        name: 'Manor B.'
      },
    ],
    videos: [
      {
        videoId: '641892117',
        webp: require('@/assets/img/video-posters/poster-01.webp'),
        jpg: require('@/assets/img/video-posters/poster-01.jpg'),
        title: 'Tracey C.'
      },
      {
        videoId: '641892178',
        webp: require('@/assets/img/video-posters/poster-02.webp'),
        jpg: require('@/assets/img/video-posters/poster-02.jpg'),
        title: 'Michelle U.'
      },
      {
        videoId: '641892234',
        webp: require('@/assets/img/video-posters/poster-03.webp'),
        jpg: require('@/assets/img/video-posters/poster-03.jpg'),
        title: 'Tracey M.'
      },
      {
        videoId: '642646289',
        webp: require('@/assets/img/video-posters/poster-04.webp'),
        jpg: require('@/assets/img/video-posters/poster-04.jpg'),
        title: 'Jennifer C.'
      },
      {
        videoId: '641892288',
        webp: require('@/assets/img/video-posters/poster-05.webp'),
        jpg: require('@/assets/img/video-posters/poster-05.jpg'),
        title: 'Stacy V.'
      },
      {
        videoId: '641892439',
        webp: require('@/assets/img/video-posters/poster-06.webp'),
        jpg: require('@/assets/img/video-posters/poster-06.jpg'),
        title: 'Jane B.'
      },
      {
        videoId: '641892489',
        webp: require('@/assets/img/video-posters/poster-07.webp'),
        jpg: require('@/assets/img/video-posters/poster-07.jpg'),
        title: 'Michelle H.'
      },
      {
        videoId: '641892546',
        webp: require('@/assets/img/video-posters/poster-08.webp'),
        jpg: require('@/assets/img/video-posters/poster-08.jpg'),
        title: 'Misty D.'
      },
      {
        videoId: '641892601',
        webp: require('@/assets/img/video-posters/poster-09.webp'),
        jpg: require('@/assets/img/video-posters/poster-09.jpg'),
        title: 'Martha S.'
      },
      {
        videoId: '641892658',
        webp: require('@/assets/img/video-posters/poster-10.webp'),
        jpg: require('@/assets/img/video-posters/poster-10.jpg'),
        title: 'Melanie B.'
      },
      {
        videoId: '641892734',
        webp: require('@/assets/img/video-posters/poster-11.webp'),
        jpg: require('@/assets/img/video-posters/poster-11.jpg'),
        title: 'Michelle J.'
      },
      {
        videoId: '641892795',
        webp: require('@/assets/img/video-posters/poster-12.webp'),
        jpg: require('@/assets/img/video-posters/poster-12.jpg'),
        title: 'Gretchen F.'
      },
      {
        videoId: '641892851',
        webp: require('@/assets/img/video-posters/poster-13.webp'),
        jpg: require('@/assets/img/video-posters/poster-13.jpg'),
        title: 'Louise P.'
      },
      {
        videoId: '641892960',
        webp: require('@/assets/img/video-posters/poster-14.webp'),
        jpg: require('@/assets/img/video-posters/poster-14.jpg'),
        title: 'Kim R.'
      },
      {
        videoId: '641893114',
        webp: require('@/assets/img/video-posters/poster-15.webp'),
        jpg: require('@/assets/img/video-posters/poster-15.jpg'),
        title: 'Tarry C.'
      },
      {
        videoId: '641893225',
        webp: require('@/assets/img/video-posters/poster-16.webp'),
        jpg: require('@/assets/img/video-posters/poster-16.jpg'),
        title: 'Trenita L.'
      }
    ]
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})
export default store

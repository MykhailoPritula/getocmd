<template>
  <section class="marquee">
    <div class="marquee-inner">
      <div class="marquee-item">Hurry! Order now and <b>save 50% off</b></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Marquee',
  methods: {
    animateMarquee(){
      const
        marquee = document.querySelector('.marquee'),
        marqueeItem = document.querySelector('.marquee-item'),
        marqueeInner = document.querySelector('.marquee-inner'),
        marqueeCount = marquee.offsetWidth / marqueeItem.offsetWidth

      for (let i = 0; i <= marqueeCount; i++) {
        const marqueeItemClone = marqueeItem.cloneNode(true);
        marqueeInner.appendChild(marqueeItemClone);
      }

      const marqueeInnerClone = marqueeInner.cloneNode(true);
      marquee.appendChild(marqueeInnerClone)

      let
        start = performance.now(),
        progress,
        translateX

      requestAnimationFrame(function step(now) {
        progress = (now - start) / 15000;

        if (progress > 1) {
          progress %= 1;
          start = now;
        }

        translateX = marqueeInner.offsetWidth * progress;

        marqueeInner.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        marqueeInnerClone.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
      });
    }
  },
  mounted(){
    this.animateMarquee()
  }
}
</script>
<style lang="scss" scoped>
.marquee {
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  background: #FE6F61;
  white-space: nowrap;
  cursor: default;
  user-select: none;
  &-inner{
    display: inline-block;
  }
  &-item{
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 30px;
    b{
      font-weight: 700;
    }
    &:hover {
      animation-play-state: paused
    }
  }
}
</style>
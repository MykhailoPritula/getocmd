(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{341:function(e,t,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("4d403aae",content,!0,{sourceMap:!1})},390:function(e,t,n){"use strict";n(341)},391:function(e,t,n){var r=n(22)(!1);r.push([e.i,".marquee[data-v-664a92a1]{width:100%;margin:0 auto;overflow:hidden;box-sizing:border-box;background:#fe6f61;white-space:nowrap;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.marquee-inner[data-v-664a92a1],.marquee-item[data-v-664a92a1]{display:inline-block}.marquee-item[data-v-664a92a1]{font-size:20px;line-height:24px;font-weight:400;text-transform:uppercase;color:#fff;padding:0 30px}.marquee-item b[data-v-664a92a1]{font-weight:700}.marquee-item[data-v-664a92a1]:hover{-webkit-animation-play-state:paused;animation-play-state:paused}",""]),e.exports=r},471:function(e,t,n){"use strict";n.r(t);var r={name:"Marquee",methods:{animateMarquee:function(){for(var e=document.querySelector(".marquee"),t=document.querySelector(".marquee-item"),n=document.querySelector(".marquee-inner"),r=e.offsetWidth/t.offsetWidth,i=0;i<=r;i++){var o=t.cloneNode(!0);n.appendChild(o)}var c=n.cloneNode(!0);e.appendChild(c);var progress,d,l=performance.now();requestAnimationFrame((function e(t){(progress=(t-l)/15e3)>1&&(progress%=1,l=t),d=n.offsetWidth*progress,n.style.transform="translate3d(-".concat(d,"px, 0 , 0)"),c.style.transform="translate3d(-".concat(d,"px, 0 , 0)"),requestAnimationFrame(e)}))}},mounted:function(){this.animateMarquee()}},o=(n(390),n(8)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"marquee"},[n("div",{staticClass:"marquee-inner"},[n("div",{staticClass:"marquee-item"},[e._v("Hurry! Order now and "),n("b",[e._v("save 50% off")])])])])}],!1,null,"664a92a1",null);t.default=component.exports}}]);
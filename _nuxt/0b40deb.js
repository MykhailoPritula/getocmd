(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{464:function(t,e,o){t.exports=o.p+"img/img-001.1bd3bd0.png"},465:function(t,e,o){t.exports=o.p+"img/img-002.c6e20b9.png"},466:function(t,e,o){t.exports=o.p+"img/img-lines.9831040.png"},467:function(t,e,o){var content=o(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("d901d3cc",content,!0,{sourceMap:!1})},548:function(t,e,o){t.exports=o.p+"img/img-001.5dae41c.webp"},549:function(t,e,o){t.exports=o.p+"img/img-002.2cb736c.webp"},550:function(t,e,o){t.exports=o.p+"img/img-lines.d7594b5.webp"},551:function(t,e){var o,n,r,c,d,l,m,f,v,x,h,w,y,_,k,caption,C,T,M,E,S,L,z,A,I,H,O,D,V,N,$,W,j,R=[],B={},G="appendChild",P="createElement",J="removeChild";function X(){var t=o.getBoundingClientRect(),e=t.top,n=t.left,d=t.width,l=t.height;return"transform:translate3D("+(n-(r.clientWidth-d)/2)+"px, "+(e-(r.clientHeight-l)/2)+"px, 0) scale3D("+o.clientWidth/c.clientWidth+", "+o.clientHeight/c.clientHeight+", 0)"}function F(t){var e=N.length-1;if(!y){if(t>0&&V===e||t<0&&!V){if(!j.loop)return nt(d,""),void setTimeout(nt,9,d,"animation:"+(t>0?"bpl":"bpf")+" .3s;transition:transform .35s");V=t>0?-1:e+1}if([(V=Math.max(0,Math.min(V+t,e)))-1,V,V+1].forEach((function(t){if(t=Math.max(0,Math.min(t,e)),!B[t]){var o=N[t].src,img=document[P]("IMG");img.addEventListener("load",tt.bind(null,o)),img.src=o,B[t]=img}})),B[V].complete)return U(t);y=!0,nt(k,"opacity:.4;"),r[G](k),B[V].onload=function(){S&&U(t)},B[V].onerror=function(){N[V]={error:"Error loading image"},S&&U(t)}}}function U(t){y&&(r[J](k),y=!1);var e=N[V];if(e.error)alert(e.error);else{var n=r.querySelector("img:last-of-type");nt(d=c=B[V],"animation:"+(t>0?"bpfl":"bpfr")+" .35s;transition:transform .35s"),nt(n,"animation:"+(t>0?"bpfol":"bpfor")+" .35s both"),r[G](d),e.el&&(o=e.el)}$.innerHTML=V+1+"/"+N.length,Z(N[V].caption),H&&H([d,N[V]])}function Y(){var t,e,o=.95*window.innerHeight,n=.95*window.innerWidth,r=o/n,c=j.dimensions||[1920,1080],d=c[0],l=c[1],m=l/d;m>r?e=(t=Math.min(l,o))/m:t=(e=Math.min(d,n))*m,f.style.cssText+="width:"+e+"px;height:"+t+"px;"}function K(t){~[1,4].indexOf(c.readyState)?(et(),setTimeout((function(){c.play()}),99)):c.error?et(t):_=setTimeout(K,35,t)}function Q(t){j.noLoader||(t&&nt(k,"top:"+o.offsetTop+"px;left:"+o.offsetLeft+"px;height:"+o.clientHeight+"px;width:"+o.clientWidth+"px"),o.parentElement[t?G:J](k),y=t)}function Z(t){t&&(C.innerHTML=t),nt(caption,"opacity:"+(t?"1;pointer-events:auto":"0"))}function tt(t){!~R.indexOf(t)&&R.push(t)}function et(t){if(y&&Q(),A&&A(),"string"==typeof t)return ot(),j.onError?j.onError():alert("Error: The requested "+t+" could not be loaded.");z&&tt(x),c.style.cssText+=X(),nt(r,"opacity:1;pointer-events:auto"),I&&(I=setTimeout(I,410)),E=!0,S=!!N,setTimeout((function(){c.style.cssText+="transition:transform .35s;transform:none",T&&setTimeout(Z,250,T)}),60)}function it(t){var e=t?t.target:r,o=[caption,M,l,m,C,D,O,k];e.blur(),L||~o.indexOf(e)||(c.style.cssText+=X(),nt(r,"pointer-events:auto"),setTimeout(ot,350),clearTimeout(I),E=!1,L=!0)}function ot(){if((c===f?v:c).removeAttribute("src"),document.body[J](r),r[J](c),nt(r,""),nt(c,""),Z(!1),S){for(var t=r.querySelectorAll("img"),i=0;i<t.length;i++)r[J](t[i]);y&&r[J](k),r[J]($),S=N=!1,B={},W||r[J](O),W||r[J](D),d.onload=et,d.onerror=et.bind(null,"image")}j.onClose&&j.onClose(),L=y=!1}function nt(t,e){t.style.cssText=e}t.exports=function(t){var source;return n||function(){var t;function e(t){var e=document[P]("button");return e.className=t,e.innerHTML='<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>',e}function o(t,style){var e=document[P]("button");return e.className="bp-lr",e.innerHTML='<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>',nt(e,style),e.onclick=function(e){e.stopPropagation(),F(t)},e}var style=document[P]("STYLE");style.innerHTML="#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}",document.head[G](style),(r=document[P]("DIV")).id="bp_container",r.onclick=it,h=e("bp-x"),r[G](h),"ontouchstart"in window&&(W=!0,r.ontouchstart=function(e){var o=e.changedTouches;t=o[0].pageX},r.ontouchmove=function(t){t.preventDefault()},r.ontouchend=function(e){var o=e.changedTouches;if(S){var n=o[0].pageX-t;n<-30&&F(1),n>30&&F(-1)}});d=document[P]("IMG"),(l=document[P]("VIDEO")).id="bp_vid",l.setAttribute("playsinline",!0),l.controls=!0,l.loop=!0,(m=document[P]("audio")).id="bp_aud",m.controls=!0,m.loop=!0,($=document[P]("span")).id="bp_count",(caption=document[P]("DIV")).id="bp_caption",(M=e("bp-xc")).onclick=Z.bind(null,!1),caption[G](M),C=document[P]("SPAN"),caption[G](C),r[G](caption),O=o(1,"transform:scalex(-1)"),D=o(-1,"left:0;right:auto"),(k=document[P]("DIV")).id="bp_loader",k.innerHTML='<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>',(f=document[P]("DIV")).id="bp_sv",(v=document[P]("IFRAME")).setAttribute("allowfullscreen",!0),v.allow="autoplay; fullscreen",v.onload=function(){return f[J](k)},nt(v,"border:0;position:absolute;height:100%;width:100%;left:0;top:0"),f[G](v),d.onload=et,d.onerror=et.bind(null,"image"),window.addEventListener("resize",(function(){S||y&&Q(!0),c===f&&Y()})),document.addEventListener("keyup",(function(t){var e=t.keyCode;27===e&&E&&it(),S&&(39===e&&F(1),37===e&&F(-1),38===e&&F(10),40===e&&F(-10))})),document.addEventListener("keydown",(function(t){S&&~[37,38,39,40].indexOf(t.keyCode)&&t.preventDefault()})),document.addEventListener("focus",(function(t){E&&!r.contains(t.target)&&(t.stopPropagation(),h.focus())}),!0),n=!0}(),y&&(clearTimeout(_),ot()),j=t,w=t.ytSrc||t.vimeoSrc,A=t.animationStart,I=t.animationEnd,H=t.onChangeImage,o=t.el,z=!1,T=o.getAttribute("data-caption"),t.gallery?function(t,e){var n=j.galleryAttribute||"data-bp";if(Array.isArray(t))N=t,T=t[V=e||0].caption;else{var l=(N=[].slice.call("string"==typeof t?document.querySelectorAll(t+" ["+n+"]"):t)).indexOf(o);V=0===e||e?e:-1!==l?l:0,N=N.map((function(t){return{el:t,src:t.getAttribute(n),caption:t.getAttribute("data-caption")}}))}z=!0,x=N[V].src,!~R.indexOf(x)&&Q(!0),N.length>1?(r[G]($),$.innerHTML=V+1+"/"+N.length,W||(r[G](O),r[G](D))):N=!1;(c=d).src=x}(t.gallery,t.position):w||t.iframeSrc?(c=f,function(){var t,e="https://",o="autoplay=1";j.ytSrc?t=e+"www.youtube"+(j.ytNoCookie?"-nocookie":"")+".com/embed/"+w+"?html5=1&rel=0&playsinline=1&"+o:j.vimeoSrc?t=e+"player.vimeo.com/video/"+w+"?"+o:j.iframeSrc&&(t=j.iframeSrc);nt(k,""),f[G](k),v.src=t,Y(),setTimeout(et,9)}()):t.imgSrc?(z=!0,x=t.imgSrc,!~R.indexOf(x)&&Q(!0),(c=d).src=x):t.audio?(Q(!0),(c=m).src=t.audio,K("audio file")):t.vidSrc?(Q(!0),t.dimensions&&nt(l,"width:"+t.dimensions[0]+"px"),source=t.vidSrc,Array.isArray(source)?(c=l.cloneNode(),source.forEach((function(t){var source=document[P]("SOURCE");source.src=t,source.type="video/"+t.match(/.(\w+)$/)[1],c[G](source)}))):(c=l).src=source,K("video")):(c=d).src="IMG"===o.tagName?o.src:window.getComputedStyle(o).backgroundImage.replace(/^url|[(|)|'|"]/g,""),r[G](c),document.body[G](r),{close:it,next:function(){return F(1)},prev:function(){return F(-1)}}}},552:function(t,e,o){"use strict";o(467)},553:function(t,e,o){var n=o(22)(!1);n.push([t.i,'.video-section[data-v-1820cd20]{padding-top:50px;padding-bottom:50px;background:#e2bdaf;position:relative;overflow:hidden}@media(min-width:992px){.video-section[data-v-1820cd20]{padding-top:100px;padding-bottom:100px}}.video-section h2[data-v-1820cd20]{font-weight:600;font-size:30px;line-height:36px;color:#fffbf9;text-align:center;margin-bottom:40px}.video-section .video-wrap[data-v-1820cd20]{text-align:center}.video-section .video-wrap .image-top[data-v-1820cd20]{position:absolute;top:1%;left:0;z-index:2}@media(min-width:1600px){.video-section .video-wrap .image-top[data-v-1820cd20]{left:5%}}@media(min-width:1800px){.video-section .video-wrap .image-top[data-v-1820cd20]{left:10%}}@media(min-width:2000px){.video-section .video-wrap .image-top[data-v-1820cd20]{left:15%}}.video-section .video-wrap .image-bottom[data-v-1820cd20]{position:absolute;bottom:0;left:0;z-index:2}.video-section .video-wrap .image-lines[data-v-1820cd20]{position:absolute;width:auto;max-width:714px;height:auto;max-height:auto;z-index:2;right:0;top:15%}@media(max-width:767px){.video-section .video-wrap .image-lines[data-v-1820cd20]{right:-40%}}@media(max-width:575px){.video-section .video-wrap .image-lines[data-v-1820cd20]{right:0}}@media(min-width:2000px){.video-section .video-wrap .image-lines[data-v-1820cd20]{right:35%}}.video-section .video-wrap .image[data-v-1820cd20]{border-radius:15px}.video-section .video[data-v-1820cd20]{background:#9f6b58;border-radius:10px;padding:20px 20px 50px;max-width:250px;width:100%;max-height:380px;height:100%;display:inline-block;margin-bottom:20px;margin-right:20px;margin-left:20px;position:relative;z-index:5}@media(min-width:992px){.video-section .video[data-v-1820cd20]{margin-bottom:40px}}.video-section .video .title[data-v-1820cd20]{text-align:left;font-weight:700;font-size:15px;line-height:18px;color:#fff;margin:16px 0}.video-section .video button[data-v-1820cd20]{position:absolute;top:50%;transform:translate(-50%,-50%);max-width:75px;width:100%;max-height:55px;height:100%;background:#fe6f61;border-radius:10px;border:none;transition:.3s ease}.video-section .video button[data-v-1820cd20]:hover{box-shadow:2px 2px 8px rgba(0,0,0,.75);transform:translate(-50%,-50%) scale(.9)}.video-section .video button[data-v-1820cd20]:after{content:"";position:absolute;width:0;height:0;margin-left:4px;border-radius:5px;border-color:transparent transparent transparent #fff;border-style:solid;border-width:13px 4px 12px 20px;transform:translate(-50%,-50%)}',""]),t.exports=n},557:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"image-top",attrs:{srcset:o(548),type:"image/webp"}}),t._v(" "),n("source",{staticClass:"image-top",attrs:{srcset:o(464),type:"image/png"}}),t._v(" "),n("img",{staticClass:"image-top",attrs:{src:o(464)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"image-bottom",attrs:{srcset:o(549),type:"image/webp"}}),t._v(" "),n("source",{staticClass:"image-bottom",attrs:{srcset:o(465),type:"image/png"}}),t._v(" "),n("img",{staticClass:"image-bottom",attrs:{src:o(465)}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"image-lines",attrs:{srcset:o(550),type:"image/webp"}}),t._v(" "),n("source",{staticClass:"image-lines",attrs:{srcset:o(466),type:"image/png"}}),t._v(" "),n("img",{staticClass:"image-lines",attrs:{src:o(466)}})])}],r=o(551),c=o.n(r),d={methods:{playVideo:function(t,e){c()({el:t.target,vimeoSrc:e})}},computed:{videos:function(){return this.$store.state.videos}}},l=(o(552),o(8)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"video-section",attrs:{id:"video"}},[o("div",{staticClass:"container"},[o("h2",[t._v("Video Reviews")]),t._v(" "),o("div",{staticClass:"video-wrap"},[t._l(t.videos,(function(e){return o("div",{staticClass:"video"},[o("div",{staticClass:"poster",attrs:{"data-video-src":e.videoId}}),t._v(" "),o("picture",[o("source",{staticClass:"image",attrs:{srcset:e.webp,type:"image/webp"}}),t._v(" "),o("source",{staticClass:"image",attrs:{srcset:e.jpg,type:"image/jpg"}}),t._v(" "),o("img",{staticClass:"image",attrs:{src:e.jpg}})]),t._v(" "),o("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),o("button",{on:{click:function(o){return t.playVideo(o,e.videoId)}}})])})),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)],2)])])}),n,!1,null,"1820cd20",null);e.default=component.exports}}]);
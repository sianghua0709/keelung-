webpackJsonp([16],{IOLk:function(t,i,s){t.exports=s.p+"static/img/ending-fight-bg.8b2f799.png"},P2e8:function(t,i,s){t.exports=s.p+"static/img/ending-gg-green.b0b47fa.png"},dtBi:function(t,i,s){t.exports=s.p+"static/img/ending-gg-black.a12bc4f.png"},uIzM:function(t,i){},vkxq:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("IOLk"),n=s.n(a),o=s("xJIZ"),e=s.n(o),l={name:"EndFightOne",components:{},data:function(){return{endBg:n.a,ballBar:e.a,state:"who",time:15,ballPosition:0}},mounted:function(){this.$store.commit("changeHeader",!1)},methods:{backToCompass:function(){this.$store.commit("changeHeader",!0),this.$router.push({path:"./monster-compass"})},goToFight:function(){this.state="ing",this.gameStart()},gameStart:function(){var t=this,i=setInterval(function(){t.time--},1e3);setTimeout(function(){t.ballPosition<-160?t.ballPosition=-250:t.ballPosition=t.ballPosition-90},2e3),setTimeout(function(){t.ballPosition>100?t.ballPosition=250:t.ballPosition=t.ballPosition+150},5e3),setTimeout(function(){t.ballPosition>60?t.ballPosition=250:t.ballPosition=t.ballPosition+190},9e3),setTimeout(function(){t.ballPosition<-150?t.ballPosition=-250:t.ballPosition=t.ballPosition-100},11e3),setTimeout(function(){t.ballPosition=-250},14800),setTimeout(function(){clearInterval(i),t.ballPosition<150&&t.ballPosition>-150?t.winGame():(alert("你輸了！"),t.state="lose")},15e3)},winGame:function(){alert("你贏了！"),this.state="win"},goLeft:function(){this.ballPosition=this.ballPosition-10},goRight:function(){this.ballPosition=this.ballPosition+10},goToPre:function(){this.state="pre"},goToCollect:function(){this.$router.push({path:"./river-house-end"})},goToEndOne:function(){this.$router.push({path:"./end-talk-one"})}},computed:{power:function(){return this.$store.state.power}}},r={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"end-fight"},["who"===t.state?a("div",{staticClass:"fight-pre-box",on:{click:t.goToPre}},[a("div",{staticClass:"fight-who-bg"}),t._v(" "),a("img",{staticClass:"fight-who-gg",attrs:{src:s("dtBi"),alt:"fight-word"}}),t._v(" "),t._m(0)]):t._e(),t._v(" "),"pre"===t.state?a("div",{staticClass:"fight-pre-box"},[a("div",{staticClass:"fight-pre-bg",style:{backgroundImage:"url("+t.endBg+")"}}),t._v(" "),t._m(1),t._v(" "),a("img",{staticClass:"fight-pre-word",attrs:{src:s("j3p4"),alt:"fight-word"}}),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"fight-pre-btn-box"},[a("img",{staticClass:"fight-pre-btn",attrs:{src:s("FjYS"),alt:"run-away"},on:{click:t.backToCompass}}),t._v(" "),a("img",{staticClass:"fight-pre-btn",attrs:{src:s("BUjz"),alt:"enter-in"},on:{click:t.goToFight}})])]):"ing"===t.state?a("div",{staticClass:"fight-ing-box"},[a("div",{staticClass:"fight-ing-bg",style:{backgroundImage:"url("+t.endBg+")"}}),t._v(" "),a("img",{staticClass:"fight-ing-ling-icon",attrs:{src:s("P2e8"),alt:"fight-word"}}),t._v(" "),a("div",{staticClass:"fight-ing-time"},[t._v(t._s(t.time))]),t._v(" "),a("div",{staticClass:"fight-ing-bar",style:{backgroundImage:"url("+t.ballBar+")"}},[a("img",{staticClass:"fight-ing-ball",style:{marginLeft:t.ballPosition+"px"},attrs:{src:s("i8O9"),alt:"play-ball"}})]),t._v(" "),a("div",{staticClass:"fight-ing-btn-box"},[a("img",{staticClass:"fight-ing-btn",attrs:{src:s("8ZXa"),alt:"go-left"},on:{click:t.goLeft}}),t._v(" "),a("img",{staticClass:"fight-ing-btn",attrs:{src:s("ZYWL"),alt:"go-right"},on:{click:t.goRight}})])]):"lose"===t.state?a("div",{staticClass:"fight-lose-box",on:{click:t.goToEndOne}},[a("div",{staticClass:"fight-lose-bg",style:{backgroundImage:"url("+t.endBg+")"}}),t._v(" "),a("img",{staticClass:"fight-lose-ling-icon",attrs:{src:s("P2e8"),alt:"fight-word"}}),t._v(" "),a("div",{staticClass:"fight-lose-ch"},[t._v("殘念！")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fight-pre-text"},[this._v("你突然發現身後多出了一個黑影，"),i("br"),this._v("正準備回頭看時，一陣怪力向你襲來。"),i("br"),i("br"),this._v("你心想，難道還有沒被捕捉的怪奇？")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fight-pre-ability"},[this._v("關卡怪力值"),i("br"),i("span",{staticStyle:{"font-size":"24px"}},[this._v("6")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fight-pre-text"},[this._v("怪奇會施展怪力干擾"),i("br"),this._v("讓怪力求保持在中間區域即可戰勝")])}]};var c=s("VU/8")(l,r,!1,function(t){s("uIzM")},"data-v-7316acf2",null);i.default=c.exports}});
//# sourceMappingURL=16.c0e900dc31d617e967b6.js.map
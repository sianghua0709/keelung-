webpackJsonp([7],{E03S:function(t,i,s){t.exports=s.p+"static/img/fight-ling-icon.324840c.png"},"K/IW":function(t,i,s){t.exports=s.p+"static/img/fight-bg.fc78bbb.png"},VRKy:function(t,i,s){t.exports=s.p+"static/img/green-face-ling-icon.54bb60d.png"},XRBj:function(t,i){},eofY:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("mvHQ"),a=s.n(e),o=s("K/IW"),n=s.n(o),l=s("suI3"),c=s.n(l),g=s("xJIZ"),r=s.n(g),h={name:"HauntedHouseFight",components:{},data:function(){return{greenBg:n.a,greenOpacityBg:c.a,ballBar:r.a,state:"pre",time:15,ballPosition:0}},mounted:function(){this.$store.commit("changeHeader",!1)},methods:{backToCompass:function(){this.$store.commit("changeHeader",!0),this.$router.push({path:"./monster-compass"})},goToFight:function(){if(this.power<6)alert("能力值不足哦");else{this.state="ing",this.$store.commit("changePower",6);var t=JSON.parse(localStorage.getItem("vuexList"));t.power=this.power,localStorage.setItem("vuexList",a()(t)),this.gameStart()}},gameStart:function(){var t=this,i=setInterval(function(){t.time--},1e3);setTimeout(function(){t.ballPosition<-160?t.ballPosition=-250:t.ballPosition=t.ballPosition-90},2e3),setTimeout(function(){t.ballPosition>100?t.ballPosition=250:t.ballPosition=t.ballPosition+150},5e3),setTimeout(function(){t.ballPosition>60?t.ballPosition=250:t.ballPosition=t.ballPosition+190},9e3),setTimeout(function(){t.ballPosition<-150?t.ballPosition=-250:t.ballPosition=t.ballPosition-100},11e3),setTimeout(function(){t.ballPosition<-150?t.ballPosition=-250:t.ballPosition=t.ballPosition-100},13e3),setTimeout(function(){clearInterval(i),t.ballPosition<150&&t.ballPosition>-150?t.winGame():(alert("你輸了！"),t.state="lose")},15e3)},winGame:function(){alert("你贏了！"),this.$store.commit("changeHeader",!0),this.$store.commit("changeNoteDot",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("lingWin",!0),this.state="win",this.$store.commit("getLingCard","grey");var t=JSON.parse(localStorage.getItem("vuexList"));t.isLingWin=!0,t.lingCardType="grey",localStorage.setItem("vuexList",a()(t))},goLeft:function(){this.ballPosition=this.ballPosition-10},goRight:function(){this.ballPosition=this.ballPosition+10},goToPre:function(){this.state="pre"},goToCollect:function(){this.$router.push({path:"./monster-collect"})}},computed:{power:function(){return this.$store.state.power}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"house-fight"},["pre"===t.state?e("div",{staticClass:"fight-pre-box"},[e("div",{staticClass:"fight-pre-bg",style:{backgroundImage:"url("+t.greenBg+")"}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"fight-pre-word",attrs:{src:s("j3p4"),alt:"fight-word"}}),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"fight-pre-btn-box"},[e("img",{staticClass:"fight-pre-btn",attrs:{src:s("FjYS"),alt:"run-away"},on:{click:t.backToCompass}}),t._v(" "),e("img",{staticClass:"fight-pre-btn",attrs:{src:s("BUjz"),alt:"enter-in"},on:{click:t.goToFight}})])]):"ing"===t.state?e("div",{staticClass:"fight-ing-box"},[e("div",{staticClass:"fight-ing-bg",style:{backgroundImage:"url("+t.greenOpacityBg+")"}}),t._v(" "),e("img",{staticClass:"fight-ing-ling-icon",attrs:{src:s("E03S"),alt:"fight-word"}}),t._v(" "),e("div",{staticClass:"fight-ing-time"},[t._v(t._s(t.time))]),t._v(" "),e("div",{staticClass:"fight-ing-bar",style:{backgroundImage:"url("+t.ballBar+")"}},[e("img",{staticClass:"fight-ing-ball",style:{marginLeft:t.ballPosition+"px"},attrs:{src:s("i8O9"),alt:"play-ball"}})]),t._v(" "),e("div",{staticClass:"fight-ing-btn-box"},[e("img",{staticClass:"fight-ing-btn",attrs:{src:s("8ZXa"),alt:"go-left"},on:{click:t.goLeft}}),t._v(" "),e("img",{staticClass:"fight-ing-btn",attrs:{src:s("ZYWL"),alt:"go-right"},on:{click:t.goRight}})])]):"lose"===t.state?e("div",{staticClass:"fight-lose-box",on:{click:t.goToPre}},[e("div",{staticClass:"fight-lose-bg",style:{backgroundImage:"url("+t.greenOpacityBg+")"}}),t._v(" "),e("img",{staticClass:"fight-lose-ling-icon",attrs:{src:s("VRKy"),alt:"fight-word"}}),t._v(" "),e("div",{staticClass:"fight-lose-ch"},[t._v("殘念")]),t._v(" "),e("div",{staticClass:"fight-lose-text"},[t._v("請重新補充能力值再戰")])]):"win"===t.state?e("div",{staticClass:"fight-lose-box",on:{click:t.goToCollect}},[e("div",{staticClass:"fight-lose-bg",style:{backgroundImage:"url("+t.greenOpacityBg+")"}}),t._v(" "),e("img",{staticClass:"fight-lose-ling-icon",attrs:{src:s("msPX"),alt:"fight-word"}}),t._v(" "),e("div",{staticClass:"fight-lose-ch"},[t._v("捕獲怪奇")])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fight-pre-ability"},[this._v("關卡怪力值"),i("br"),i("span",{staticStyle:{"font-size":"24px"}},[this._v("6")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fight-pre-text"},[this._v("怪奇會施展怪力干擾"),i("br"),this._v("讓怪力求保持在中間區域即可戰勝")])}]};var m=s("VU/8")(h,f,!1,function(t){s("XRBj")},"data-v-e21409ce",null);i.default=m.exports},msPX:function(t,i,s){t.exports=s.p+"static/img/ling-grey-album.a5d1571.png"},suI3:function(t,i,s){t.exports=s.p+"static/img/fight-bd-opacity.5d98d35.png"}});
//# sourceMappingURL=7.96f014591befc8913e38.js.map
webpackJsonp([4],{"1fT9":function(s,a,t){s.exports=t.p+"static/img/eagle-face.a59cec5.png"},"2lnf":function(s,a,t){s.exports=t.p+"static/img/lulu-old-temple.4ef2574.png"},"5Bwu":function(s,a,t){s.exports=t.p+"static/img/fence-eagle-face.ceb982d.png"},"6gZJ":function(s,a,t){s.exports=t.p+"static/img/eel-tale.187d6bc.png"},ANR6:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("mvHQ"),o=t.n(i),c={name:"LuluHouseCompass",components:{},data:function(){return{step:1,code:"",isShowFirstAnimal:!1,isShowSecondAnimal:!1,isShowThirdAnimal:!1,isShowFourAnimal:!1,isShowWrong:!1}},mounted:function(){},destroyed:function(){},methods:{goTo2:function(){this.step=2,this.$store.commit("changeHeader",!1)},go:function(){"xjn"===this.code.toLowerCase()?(this.step=3,alert("答對囉")):alert("答錯囉")},showFirstAnimal:function(){this.isShowFirstAnimal=!0},showSecondAnimal:function(){this.isShowSecondAnimal=!0},showThirdAnimal:function(){this.isShowThirdAnimal=!0},showFourAnimal:function(){this.isShowFourAnimal=!0},wakeWrong:function(){if(this.power<3)alert("能力值不足唷！");else{this.$store.commit("changePower",3);var s=JSON.parse(localStorage.getItem("vuexList"));s.power=this.power,localStorage.setItem("vuexList",o()(s)),this.closeAllBox(),this.isShowWrong=!0}},closeAllBox:function(){this.isShowFirstAnimal=!1,this.isShowSecondAnimal=!1,this.isShowThirdAnimal=!1,this.isShowFourAnimal=!1},closeWrongBox:function(){this.isShowWrong=!1},goToHouse:function(){if(this.power<3)alert("能力值不足唷！");else{this.$store.commit("changePower",3);var s=JSON.parse(localStorage.getItem("vuexList"));s.power=this.power,localStorage.setItem("vuexList",o()(s)),this.$router.push({path:"./lulu-house"})}}},computed:{power:function(){return this.$store.state.power}}},l={render:function(){var s=this,a=s.$createElement,i=s._self._c||a;return i("div",{staticClass:"lulu-compass"},[1===s.step?i("div",{staticClass:"compass-1-bg"},[i("div",{staticClass:"compass-1-text"},[s._v("定位點的問題，文字修改成「怪奇佈下結界來隱藏自己，使我們沒辦法知道他們的精確位置。結界都會有三個端點，只要你盡量靠近「定位點」，正確擺放端點到羅盤上，取得破解結界的密碼，即可進入結界。博物館這邊會計算出三個端點，請速至地圖上閃爍的「定位點」附近待命。」")]),s._v(" "),i("div",{staticClass:"compass-1-btn",on:{click:s.goTo2}},[s._v("已抵達")])]):s._e(),s._v(" "),2===s.step?i("div",{staticClass:"compass-2-bg"},[i("img",{staticClass:"compass-2-board",attrs:{src:t("F9x7"),alt:"ghost"}}),s._v(" "),i("img",{staticClass:"compass-2-board",attrs:{src:t("I/jn"),alt:"ghost"}}),s._v(" "),i("img",{staticClass:"compass-2-board",attrs:{src:t("2lnf"),alt:"ghost"}}),s._v(" "),i("div",{staticClass:"compass-2-text"},[s._v("博物館已經偵測出結界的三個端點。請站在『定位點』上，調整羅盤直到它正確呈現這三個地點的方位，破解結界的密碼就會顯現，即可進入結界。請拿出道具包的「怪奇羅盤」定位。")]),s._v(" "),i("div",{staticClass:"compass-2-green-text"},[s._v("請拿出道具包的「怪奇羅盤」定位。")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.code,expression:"code"}],staticClass:"compass-2-input",attrs:{type:"text"},domProps:{value:s.code},on:{input:function(a){a.target.composing||(s.code=a.target.value)}}}),s._v(" "),i("div",{staticClass:"compass-2-btn",on:{click:s.go}},[s._v("GO")])]):s._e(),s._v(" "),3===s.step?i("div",{staticClass:"compass-3-bg"},[s._m(0),s._v(" "),i("div",{staticClass:"compass-3-dot-box"},[i("div",{staticClass:"compass-3-dot-1",on:{click:s.showFirstAnimal}}),s._v(" "),i("div",{staticClass:"compass-3-dot-2",on:{click:s.showSecondAnimal}}),s._v(" "),i("div",{staticClass:"compass-3-dot-3",on:{click:s.showThirdAnimal}}),s._v(" "),i("div",{staticClass:"compass-3-dot-4",on:{click:s.showFourAnimal}})]),s._v(" "),s.isShowFirstAnimal?i("div",{staticClass:"compass-3-animal-bg",on:{click:s.closeAllBox}},[i("div",{staticClass:"compass-3-animal-box"},[i("img",{staticClass:"compass-3-animal",attrs:{src:t("1fT9"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-plus"},[s._v("+")]),s._v(" "),i("img",{staticClass:"compass-3-animal",attrs:{src:t("h/U3"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-wake",on:{click:s.wakeWrong}},[s._v("喚醒")]),s._v(" "),i("div",{staticClass:"compass-3-animal-text"},[s._v("需消耗3點能力值")])])]):s._e(),s._v(" "),s.isShowSecondAnimal?i("div",{staticClass:"compass-3-animal-bg",on:{click:s.closeAllBox}},[i("div",{staticClass:"compass-3-animal-box"},[i("img",{staticClass:"compass-3-animal",attrs:{src:t("mQ4a"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-plus"},[s._v("+")]),s._v(" "),i("img",{staticClass:"compass-3-animal",attrs:{src:t("6gZJ"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-wake",on:{click:s.wakeWrong}},[s._v("喚醒")]),s._v(" "),i("div",{staticClass:"compass-3-animal-text"},[s._v("需消耗3點能力值")])])]):s._e(),s._v(" "),s.isShowThirdAnimal?i("div",{staticClass:"compass-3-animal-bg",on:{click:s.closeAllBox}},[i("div",{staticClass:"compass-3-animal-box"},[i("img",{staticClass:"compass-3-animal",attrs:{src:t("5Bwu"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-plus"},[s._v("+")]),s._v(" "),i("img",{staticClass:"compass-3-animal",attrs:{src:t("aNmj"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-wake",on:{click:s.wakeWrong}},[s._v("喚醒")]),s._v(" "),i("div",{staticClass:"compass-3-animal-text"},[s._v("需消耗3點能力值")])])]):s._e(),s._v(" "),s.isShowFourAnimal?i("div",{staticClass:"compass-3-animal-bg",on:{click:s.closeAllBox}},[i("div",{staticClass:"compass-3-animal-box"},[i("img",{staticClass:"compass-3-animal",attrs:{src:t("oBmF"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-plus"},[s._v("+")]),s._v(" "),i("img",{staticClass:"compass-3-animal",attrs:{src:t("ebZU"),alt:"run-away"}}),s._v(" "),i("div",{staticClass:"compass-3-animal-wake",on:{click:s.goToHouse}},[s._v("喚醒")]),s._v(" "),i("div",{staticClass:"compass-3-animal-text"},[s._v("需消耗3點能力值")])])]):s._e(),s._v(" "),s.isShowWrong?i("div",{staticClass:"compass-3-wrong-bg",on:{click:s.closeWrongBox}},[s._m(1)]):s._e()]):s._e()])},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"compass-3-text-box"},[a("div",[this._v("委託行街口出現了４尊樣貌獨特的怪物石雕，是怪奇召喚出來護衛自己的守護獸。只有其中１隻是真正的守護獸，其餘是假的分身。如果猜到守護獸的真身，可以消耗３點能力值「識破」牠，逼牠現形。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"compass-3-wrong-box"},[a("img",{staticClass:"compass-3-animal",staticStyle:{width:"80vw"},attrs:{src:t("M6W2"),alt:"run-away"}}),this._v(" "),a("div",{staticClass:"compass-3-animal-text"},[this._v("這隻只是分身"),a("br"),this._v("不是真正的守護獸")])])}]};var n=t("VU/8")(c,l,!1,function(s){t("jMNc")},"data-v-08ff0c79",null);a.default=n.exports},F9x7:function(s,a,t){s.exports=t.p+"static/img/lulu-center-temple.ae7946f.png"},"I/jn":function(s,a,t){s.exports=t.p+"static/img/lulu-park-street.635c4a9.png"},M6W2:function(s,a,t){s.exports=t.p+"static/img/fish-bird-black.3de8f82.png"},aNmj:function(s,a,t){s.exports=t.p+"static/img/goldfish-tail.3b8b8eb.png"},ebZU:function(s,a,t){s.exports=t.p+"static/img/fish-tail.a8e8cb3.png"},"h/U3":function(s,a,t){s.exports=t.p+"static/img/whale-tail.91d6494.png"},jMNc:function(s,a){},mQ4a:function(s,a,t){s.exports=t.p+"static/img/owl-face.adaa53a.png"},oBmF:function(s,a,t){s.exports=t.p+"static/img/tree-eagle-face.87fabbd.png"}});
//# sourceMappingURL=4.3b376db31a1b8d36615f.js.map
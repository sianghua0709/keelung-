webpackJsonp([25],{CYv3:function(t,e){},gUdc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"CommuteAnswerCompassPosition",data:function(){return{answer:""}},mounted:function(){this.$store.commit("changeHeader",!0)},methods:{submitPressed:function(){"njx"===this.answer.trim().toLowerCase()?this.$router.push({name:"CommuteMapEntrance"}):(alert("答錯囉！"),console.log("wrong"))}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-div"},[s("div",{staticClass:"main-bg"},[s("div",{staticClass:"contain"},[s("div",{staticClass:"firstItem"}),t._v(" "),s("div",{staticClass:"secondItem"}),t._v(" "),s("div",{staticClass:"thirdItem"}),t._v(" "),t._m(0),t._v(" "),s("p",{attrs:{id:"answer-title"}},[t._v("請拿出道具包的「怪奇羅盤」定位。")]),t._v(" "),s("div",{attrs:{id:"answer"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticStyle:{padding:"4px"},attrs:{type:"text"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})]),t._v(" "),s("div",{attrs:{id:"button-contain"}},[s("div",{attrs:{id:"button"},on:{click:t.submitPressed}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description-contain"},[e("p",{staticClass:"description"},[this._v("博物館已經偵測出結界的三個端點。請站在『定位點』上，調整羅盤直到它正確呈現這三個地點的方位，破解結界的密碼就會顯現，即可進入結界。請拿出道具包的「怪奇羅盤」定位。")])])}]};var a=s("VU/8")(i,n,!1,function(t){s("CYv3")},"data-v-79dbfc74",null);e.default=a.exports}});
//# sourceMappingURL=25.e2afe42a27b6b6a1a4e5.js.map
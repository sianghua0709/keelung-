webpackJsonp([21],{"+fLL":function(e,t){},TSuB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"EscalatorShowUp",components:{DialogueTheme:i("HhdT").a},data:function(){return{window:{height:window.innerHeight,width:window.innerWidth},speaker:"手扶梯",msgs:["嘖，我真沒想到新館員會是你⋯⋯這樣的傢伙，看來張中元現在人手很不足啊。","哈哈，先別生氣，我不是針對你。既然只有你來，也就只能靠你了。","你看到包圍著我的這個天井吧？有個厲害的傢伙在這布了個「轉乘陣」，沒時間解釋，你需要知道的，我都寫在這張筆記上了，你快過去看看吧。"],showDialogue:!0}},mounted:function(){this.$store.commit("changeHeader",!1)},methods:{bgPressed:function(){this.showDialogue=!0},finishConversation:function(e){this.$router.push({name:"CommuteTransferDiagramIntroduction"})}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-div"},[i("div",{staticClass:"main-bg",on:{click:e.bgPressed}},[i("div",{style:{width:e.window.width+"px",height:"210px"},attrs:{id:"avator"}}),e._v(" "),e.showDialogue?i("DialogueTheme",{attrs:{id:"theme",msgs:e.msgs,speaker:e.speaker,finishConversation:e.finishConversation}}):e._e()],1)])},staticRenderFns:[]};var o=i("VU/8")(n,s,!1,function(e){i("+fLL")},"data-v-3b74d875",null);t.default=o.exports}});
//# sourceMappingURL=21.05f98acfd98b7f05c5ba.js.map
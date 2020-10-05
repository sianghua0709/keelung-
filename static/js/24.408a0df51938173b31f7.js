webpackJsonp([24],{AphX:function(e,s){},"Qz+e":function(e,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=i("HhdT"),t=i("bupt"),n={name:"CommuteSouthMainStation",components:{DialogueTheme:o.a,Selection:t.a},data:function(){return{speaker:"阿  勤",showDialogue_7:!0,message_7:["終點站，怪奇站—到了，感謝您的搭乘，並請各位旅客注意您隨身的行李⋯⋯嗯？客人您還好嗎？我們已經到終點站了，請趕快下車。"],showSelection_7:!1,selectionItems_7:this.hasPressSleepOver?["載我到怪奇博物館，否則就對你不客氣啦。","我是怪奇博物館的新館員，館長要我帶你回去。"]:["載我到怪奇博物館，否則就對你不客氣啦。","我是怪奇博物館的新館員，館長要我帶你回去。","睡過頭了⋯⋯抱歉，我馬上下車。"],showDialogue_7_1:!1,message_7_1:["唉，這不是逼我加班嗎？那可得要有加班費才行呀。客人，不如就用⋯⋯你的命來支付吧（笑）"],showDialogue_7_2:!1,message_7_2:["老闆還要我回去？唉⋯⋯你明白每天這樣通勤上下班，有多累人嗎？我不能休息一下嗎？"],showDialogue_7_3:!1,message_7_3:["……就這樣回去啦？好吧，掰掰。"],showSelection_8:!1,selectionItems_8:["振作點吧，工作就是這樣。","是挺累人的呢，其實我也有點累。"],showDialogue_9:!1,message_9:["啊，不好意思忘了自我介紹。我是９萬名基隆人每天不得不通勤到台北上班而產生的空虛感，累積形成的怪奇，你⋯⋯叫我「阿勤」好了，呵呵。","欸，你的工作是到處捕捉怪奇對吧？不會覺得很沒有意義嗎？每天從這個城市，移動到那個城市；工作開始就期待著結束，結束了很快又不得不再開始。"],showSelection_9:!1,selectionItems_9:["社會就是這樣運作的，不能適應的話也太沒用了吧？","我也有同感呢，為什麼假日都那麼短？好想週休五日啊⋯⋯"],showDialogue_10:!1,message_10:["你知道最好笑的是什麼嗎？我們以「青春」為車資，忍受著每日的通勤，希望能到達名為「夢想」的終點站；","但原來我們不是乘客，最後我們都成了「現實」這台車的零件，不停地運轉著、運轉著⋯⋯"],showSelection_10:!1,selectionItems_10:["哈哈哈，好笑、好笑，你真幽默欸！","與其說是笑話，我覺得這是恐怖故事吧⋯⋯"],showDialogue_11:!1,message_11:["有意思，你的反應似乎跟其他人不太一樣呢，大部分我遇到的館員，都只想趕快收服我回去交差，但你似乎⋯⋯真的有聽懂我在說什麼呢。","說實話，我沒有什麼不能回去博物館的理由，但我也不想那麼聽話。我有個願望，如果你能協助我完成，我就跟你回去，如何？"],showSelection_11:!1,selectionItems_11:["太麻煩了，我們還是戰鬥吧。","願望？說來聽聽。"],showDialogue_11_1:!1,message_11_1:["嘖，你果然還是個無趣的傢伙。就讓你也被空虛感吞噬吧！"],showDialogue_11_2:!1,message_11_2:["說簡單挺簡單，說麻煩也是呢，是這樣的，我總是為了某個「目的」而移動；卻不曾為了旅行而旅行。所以，我想要漫無目的的搭一次火車⋯⋯","你那什麼表情？怪奇也是可以搭火車的呀。總之，你陪我搭一趟火車到「三坑站」，我就跟你回博物館，就這麼簡單。"],showDialogue_12:!1,message_12:["跟你說話真沒意思，我們還是趕快打一打分個輸贏吧。"],showSelection_13:!1,selectionItems_13:["太麻煩了，我們還是戰鬥吧。","好，我們走吧。（需花費車資15元。)"],showDialogue_13_1:!1,message_13_1:["嘖，你果然還是個無趣的傢伙。就讓你也被空虛感吞噬吧！"],showDialogue_13_2:!1,message_13_2:["不知道會不會很無聊呢⋯⋯但不管了，我就是想這麼做，哈哈。"]}},mounted:function(){this.$store.commit("changeHeader",!1),this.$store.commit("showFooter",!0)},computed:{hasPressSleepOver:function(){return this.$store.state.hasPressSleepOver}},methods:{currruntImpression:function(){console.log("好感"+this.$store.state.goodImpression),console.log("惡感"+this.$store.state.badImpression)},finishConversation_7:function(e){this.showDialogue_7=!1,this.showSelection_7=!0},finishSelection_7:function(e){switch(this.showSelection_7=!1,console.log(e),e){case 0:this.showDialogue_7_1=!0;break;case 1:this.showDialogue_7_2=!0;break;case 2:this.showDialogue_7_3=!0}},finishConversation_7_1:function(e){this.showDialogue_7_1=!1,this.$router.push({path:"/commute-kim-hauntedhouse-fight"})},finishConversation_7_2:function(e){this.showDialogue_7_2=!1,this.showSelection_8=!0},finishConversation_7_3:function(e){this.showDialogue_7_3=!1,this.$store.commit("pressHasSleepOver"),window.location.reload()},finishSelection_8:function(e){switch(this.showSelection_8=!1,console.log(e),e){case 0:this.$store.commit("addBadImpression");break;case 1:this.$store.commit("addGoodImpression")}this.currruntImpression(),this.showDialogue_9=!0},finishConversation_9:function(e){this.showDialogue_9=!1,this.showSelection_9=!0},finishSelection_9:function(e){switch(this.showSelection_9=!1,console.log(e),e){case 0:this.$store.commit("addBadImpression");break;case 1:this.$store.commit("addGoodImpression")}this.currruntImpression(),this.showDialogue_10=!0},finishConversation_10:function(e){this.showDialogue_10=!1,this.showSelection_10=!0},finishSelection_10:function(e){switch(this.showSelection_10=!1,console.log(e),e){case 0:this.$store.commit("addBadImpression");break;case 1:this.$store.commit("addGoodImpression")}this.currruntImpression(),this.$store.state.goodImpression>this.$store.state.badImpression?this.showDialogue_11=!0:this.showDialogue_12=!0},finishConversation_11:function(e){this.showDialogue_11=!1,this.showSelection_11=!0},finishSelection_11:function(e){switch(this.showSelection_11=!1,console.log(e),e){case 0:this.showDialogue_11_1=!0;break;case 1:this.showDialogue_11_2=!0}},finishConversation_11_1:function(e){this.showDialogue_11_1=!1,this.$router.push({path:"/commute-kim-hauntedhouse-fight"})},finishConversation_11_2:function(e){this.showDialogue_11_2=!1,this.showSelection_13=!0},finishConversation_12:function(e){this.showDialogue_12=!1,this.$router.push({path:"/commute-kim-hauntedhouse-fight"})},finishSelection_13:function(e){switch(this.showSelection_13=!1,console.log(e),e){case 0:this.showDialogue_13_1=!0;break;case 1:this.showDialogue_13_2=!0}},finishConversation_13_1:function(e){this.showDialogue_13_1=!1,this.$router.push({path:"/commute-kim-hauntedhouse-fight"})},finishConversation_13_2:function(e){this.showDialogue_13_2=!1,this.$router.push({path:"./commute-train-journey"})}}},a={render:function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"main-div"},[i("div",{staticClass:"main-bg"},[e.showDialogue_7?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_7,speaker:e.speaker,finishConversation:e.finishConversation_7}}):e._e(),e._v(" "),e.showSelection_7?i("Selection",{attrs:{id:"selection",items:e.selectionItems_7,finishSelection:e.finishSelection_7}}):e._e(),e._v(" "),e.showDialogue_7_1?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_7_1,speaker:e.speaker,finishConversation:e.finishConversation_7_1}}):e._e(),e._v(" "),e.showDialogue_7_2?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_7_2,speaker:e.speaker,finishConversation:e.finishConversation_7_2}}):e._e(),e._v(" "),e.showDialogue_7_3?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_7_3,speaker:e.speaker,finishConversation:e.finishConversation_7_3}}):e._e(),e._v(" "),e.showSelection_8?i("Selection",{attrs:{id:"selection",items:e.selectionItems_8,finishSelection:e.finishSelection_8}}):e._e(),e._v(" "),e.showDialogue_9?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_9,speaker:e.speaker,finishConversation:e.finishConversation_9}}):e._e(),e._v(" "),e.showSelection_9?i("Selection",{attrs:{id:"selection",items:e.selectionItems_9,finishSelection:e.finishSelection_9}}):e._e(),e._v(" "),e.showDialogue_10?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_10,speaker:e.speaker,finishConversation:e.finishConversation_10}}):e._e(),e._v(" "),e.showSelection_10?i("Selection",{attrs:{id:"selection",items:e.selectionItems_10,finishSelection:e.finishSelection_10}}):e._e(),e._v(" "),e.showDialogue_11?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_11,speaker:e.speaker,finishConversation:e.finishConversation_11}}):e._e(),e._v(" "),e.showSelection_11?i("Selection",{attrs:{id:"selection",items:e.selectionItems_11,finishSelection:e.finishSelection_11}}):e._e(),e._v(" "),e.showDialogue_11_1?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_11_1,speaker:e.speaker,finishConversation:e.finishConversation_11_1}}):e._e(),e._v(" "),e.showDialogue_11_2?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_11_2,speaker:e.speaker,finishConversation:e.finishConversation_11_2}}):e._e(),e._v(" "),e.showDialogue_12?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_12,speaker:e.speaker,finishConversation:e.finishConversation_12}}):e._e(),e._v(" "),e.showSelection_13?i("Selection",{attrs:{id:"selection",items:e.selectionItems_13,finishSelection:e.finishSelection_13}}):e._e(),e._v(" "),e.showDialogue_13_1?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_13_1,speaker:e.speaker,finishConversation:e.finishConversation_13_1}}):e._e(),e._v(" "),e.showDialogue_13_2?i("DialogueTheme",{staticClass:"theme",attrs:{msgs:e.message_13_2,speaker:e.speaker,finishConversation:e.finishConversation_13_2}}):e._e(),e._v(" "),i("div",{attrs:{id:"avator"}})],1)])},staticRenderFns:[]};var h=i("VU/8")(n,a,!1,function(e){i("AphX")},"data-v-0b9555ed",null);s.default=h.exports}});
//# sourceMappingURL=24.408a0df51938173b31f7.js.map
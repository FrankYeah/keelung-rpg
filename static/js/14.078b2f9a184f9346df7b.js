webpackJsonp([14],{"+JRJ":function(t,s,e){t.exports=e.p+"static/img/river-peace-icon.d8b470c.png"},DtFR:function(t,s,e){t.exports=e.p+"static/img/river-actual-bg.f531090.png"},OsrS:function(t,s,e){t.exports=e.p+"static/img/silver-shine-bg.f730d33.png"},UhIb:function(t,s,e){t.exports=e.p+"static/img/river-float-icon.9b76460.png"},YKxO:function(t,s){},dHRY:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("mvHQ"),i=e.n(a),o=e("OsrS"),r=e.n(o),c=e("DtFR"),l=e.n(c),v={name:"RiverHouseEnd",components:{},data:function(){return{step:10,riverName:"",peaceName:"",silverBg:r.a,riverActualBg:l.a}},mounted:function(){},methods:{answerRiverName:function(){"旭川河"===this.riverName?(alert("答對了"),this.step=10.5):alert("名稱錯誤，無法收服怪奇。")},answerPeaceName:function(){"adbcef"===this.peaceName.toLowerCase()||"adbecf"===this.peaceName.toLowerCase()?(alert("答對了"),this.step=11):alert("名稱錯誤，無法收服怪奇。")},goToStepQ111:function(){this.step=11.1},goToStepQ1115:function(){this.step=11.15},goToStepQ112:function(){this.step=11.2},goToStepQ100:function(){this.step=100},goToStepQ1001:function(){this.step=100.1,this.$store.commit("changeHeader",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("riverWin",!0),this.$store.commit("getRiverCard","color");var t=JSON.parse(localStorage.getItem("vuexList"));t.isRiverWin=!0,t.riverCardType="color",localStorage.setItem("vuexList",i()(t))}},computed:{power:function(){return this.$store.state.power}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"river-house"},[10===t.step?a("div",{staticClass:"house-0-box"},[a("div",{staticClass:"house-0-all-245-box"},[t._m(0),t._v(" "),a("div",[t._v("怪奇的名字")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.riverName,expression:"riverName"}],staticClass:"house-0-245-input",attrs:{type:"text"},domProps:{value:t.riverName},on:{input:function(s){s.target.composing||(t.riverName=s.target.value)}}}),t._v(" "),a("div",{staticClass:"house-0-245-go",on:{click:t.answerRiverName}},[t._v("GO")])])]):t._e(),t._v(" "),10.5===t.step?a("div",{staticClass:"house-0-box"},[a("div",{staticClass:"house-0-all-245-box"},[t._m(1),t._v(" "),a("div",[t._v("代碼順序")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.peaceName,expression:"peaceName"}],staticClass:"house-0-245-input",attrs:{type:"text"},domProps:{value:t.peaceName},on:{input:function(s){s.target.composing||(t.peaceName=s.target.value)}}}),t._v(" "),a("div",{staticClass:"house-0-245-go",on:{click:t.answerPeaceName}},[t._v("GO")])])]):t._e(),t._v(" "),11===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.silverBg+")"},on:{click:t.goToStepQ111}},[t._m(2)]):t._e(),t._v(" "),11.1===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverActualBg+")"}},[a("img",{staticClass:"house-0-big-fishbird",attrs:{src:e("UhIb"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("旭川河")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("我想起來了，全都想起來了。沒錯，我的名字正是旭川河。我不像其他的河一樣是自然母親的孩子，我是人類開挖出來的運河，為的是服務人類的各種需要⋯⋯但是當我不被需要後，人類就將我掩蓋，抹煞我的存在，甚至將糞便尿液都倒到我身上。我的怨氣累積，使我成為了怪奇⋯⋯")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ1115}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),11.15===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverActualBg+")"}},[a("img",{staticClass:"house-0-big-fishbird",attrs:{src:e("UhIb"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ112}},[t._v("呃⋯⋯我趕時間，講古的部分可以省略嗎？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ112}},[t._v("這真是十分遺憾吶⋯⋯")])])]):t._e(),t._v(" "),11.2===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverActualBg+")"}},[a("img",{staticClass:"house-0-big-fishbird",attrs:{src:e("UhIb"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("旭川河")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[t._m(3),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ100}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),100===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverActualBg+")"},on:{click:t.goToStepQ1001}},[t._m(4)]):t._e(),t._v(" "),100.1==t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.riverActualBg+")"}},[t._m(5)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-245-text"},[this._v("眼前的怪奇似乎心理上遭受莫大的打擊，它的形體突然化為六塊碎片，往不同方向噴射出去。看來如果要收服他，就得找回這六塊碎片。"),s("span",{staticStyle:{color:"#95ff00"}},[this._v("請先前往「曙・初見咖啡」，到了之後")]),this._v("拿出道具包的「手冊」以及「填字卡」，"),s("span",{staticStyle:{color:"#95ff00"}},[this._v("填完內容後，再向店員索取「現形片」。")]),this._v("透過填字卡及現形片，你將得知怪奇的名字。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-245-text"},[this._v("你知曉了怪奇的名字，但他的人格碎片仍四散在各處。請疊合現形片及填字卡，"),s("span",{staticStyle:{color:"#95ff00"}},[this._v("以「虛線內的污點」為線索")]),this._v("，前往大樓的各處蒐集人格碎片，查看碎片的內容，並按照時間順序填入碎片代碼。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-float-frame"},[s("img",{staticClass:"house-0-float-man",attrs:{src:e("+JRJ"),alt:"ghost"}}),this._v(" "),s("div",{staticClass:"house-0-float-text"},[this._v("你成功蒐集完怪奇的人格碎片，也得知了他的名字：旭川河。"),s("br"),this._v("經過你重新拼湊後的他，重新在你眼前顯現，而且形象、氣場都有所轉變，甚至散發出一種神聖的光芒。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("感謝你，好人。你幫助我找回我的名字還有記憶，現在我必須告訴你一個真相。張中元⋯⋯你的館長，他並沒有告訴你捕捉怪奇的真正目的，你和我都是被他利用的棋子而已。不過不用擔心，我們已經想到辦法了，你就先照他的指示，搜集所有的怪奇，帶回去給他吧。"),s("br"),this._v("回去前，可以到「曙・初見咖啡」坐坐，只要跟店員說「我打贏旭川了」就可以獲得神秘禮物哦，快去吧！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-float-frame"},[s("div",{staticClass:"house-0-float-text",staticStyle:{"margin-top":"40vh"}},[this._v("怪奇旭川河在你眼前消失。你收服了他，你所在的建築物突然一陣搖晃，接著你聽到像是浴缸裡的水流掉的聲音，最後聲音歸於平靜。原本難以忍受的惡臭也消失，附近的市民一個個甦醒過來。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-last-frame"},[s("div",[this._v("本地區的怪力密度下降，人們也恢復正常狀態。")]),this._v(" "),s("div",{staticClass:"house-0-all-btn"},[this._v("此線完結")])])])}]};var u=e("VU/8")(v,n,!1,function(t){e("YKxO")},"data-v-b82baa90",null);s.default=u.exports}});
//# sourceMappingURL=14.078b2f9a184f9346df7b.js.map
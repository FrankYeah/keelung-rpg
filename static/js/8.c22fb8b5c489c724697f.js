webpackJsonp([8],{"+JZD":function(s,t,a){s.exports=a.p+"static/img/ling-woman-ghost.214cad5.png"},"/Eg6":function(s,t,a){s.exports=a.p+"static/img/ling-float-icon.93e9208.png"},"9Z6O":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mvHQ"),i=a.n(o),e=a("n04a"),l=a.n(e),c=a("ZwoY"),v=a.n(c),h={name:"HauntedHouse",components:{},data:function(){return{step:0,zeroStep:!0,q8:"",towerBg:l.a,mapBg:v.a}},mounted:function(){},methods:{falseZeroStep:function(){this.zeroStep=!1},goToStep1:function(){this.step=1,this.zeroStep=!0},goToStep11:function(){this.step=11,this.zeroStep=!0},goToStep2:function(){this.step=2},goToStep3:function(){this.step=3},answerQ8:function(){"8"===this.q8?(alert("答對了"),this.step=4):alert("答錯了")},goToStep41:function(){this.step=41},goToStep5:function(){this.step=5},goToStep6:function(){this.step=6},goToFight:function(){this.$store.commit("fightLing",!0);var s=JSON.parse(localStorage.getItem("vuexList"));s.isOnlyFightLing=!0,localStorage.setItem("vuexList",i()(s)),this.$router.push({path:"./haunted-house-fight"})},goToStep61:function(){this.step=61},goToStep7:function(){this.step=7},goToStep8:function(){this.step=8},goToStep81:function(){this.step=81},goToStep9:function(){this.step=9},goToStep100:function(){this.step=100},goToStep110:function(){this.step=110},goToStep101:function(){this.step=101},goToStep102:function(){this.step=102},goToStep111:function(){this.step=111},goToStep112:function(){this.step=112},goToStep103:function(){this.step=103,this.$store.commit("changeHeader",!0),this.$store.commit("changeNotDotHeadOne",!0),this.$store.commit("changeNoteDot",!0),this.$store.commit("changeNotDotHead",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("lingWin",!0),this.$store.commit("getLingCard","color");var s=JSON.parse(localStorage.getItem("vuexList"));s.isLingWin=!0,s.lingCardType="color",localStorage.setItem("vuexList",i()(s))},goToStep104:function(){this.step=104,this.$store.commit("changeHeader",!0),this.$store.commit("changeNotDotHeadOne",!0),this.$store.commit("changeNoteDot",!0),this.$store.commit("changeNotDotHead",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("lingWin",!0),this.$store.commit("getLingCard","color");var s=JSON.parse(localStorage.getItem("vuexList"));s.isLingWin=!0,s.lingCardType="color",localStorage.setItem("vuexList",i()(s))},goToStep114:function(){this.step=114},goToStep105:function(){this.step=105},goToStep106:function(){this.step=106},goToStep107:function(){this.step=107}}},g={render:function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"haunted-house"},[0===s.step?o("div",{staticClass:"house-0-box"},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("+JZD"),alt:"ghost"}}),s._v(" "),s.zeroStep?o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("女鬼")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("我好恨啊、我好恨啊⋯⋯喂，你，就是問你，是你在找尋鬧鬼的房子嗎？")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.falseZeroStep}},[o("div",{staticClass:"house-0-triangle"})])])]):o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep1}},[s._v("沒錯！基隆鬼屋就是妳在作怪吧？我要收服妳！")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep11}},[s._v("這裡有鬧鬼嗎？我要找的是躲在這裡的怪奇。")])])]):s._e(),s._v(" "),1===s.step?o("div",{staticClass:"house-0-box"},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("呵呵呵，傻孩子，你看本宅像鬼嗎？不要輕易相信你聽說的，用自己的眼睛去看吧。除非你像本宅一樣眼睛被遮了起來，那就怪不得你啦，呵呵呵。吾名為「林開郡洋樓」是人類對建築的情感，所衍生的怪奇是也！")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep2}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),11===s.step?o("div",{staticClass:"house-0-box"},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("不錯、不錯，你倒是看得挺清楚的。什麼鬧鬼都是無知之人的捕風捉影，人們的無知豢養出更多愚昧，最後如果養出了個「蠢蛋怪奇」也都是你們人類的錯吧，呵呵呵。吾名為「林開郡洋樓」是人類對建築的情感，所衍生的怪奇是也！")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep2}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),2===s.step?o("div",{staticClass:"house-0-box"},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("Z26o"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("嗯？阿樹你說什麼？這傢伙是張中元派來抓捕我們的？哎呦，本宅的老骨頭可經不起那個地方呀，我們還是趕緊開溜吧，呵呵呵。")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep3}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),3===s.step?o("div",{staticClass:"house-3-box"},[s._m(0),s._v(" "),o("div",{staticClass:"house-3-question"},[s._v("洋樓與透明片相差幾個X？")]),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.q8,expression:"q8"}],staticClass:"house-3-input",attrs:{type:"text"},domProps:{value:s.q8},on:{input:function(t){t.target.composing||(s.q8=t.target.value)}}}),s._v(" "),o("div",{staticClass:"house-3-btn",on:{click:s.answerQ8}},[s._v("GO")])]):s._e(),s._v(" "),4===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("你真是緊追不捨啊，所有的館員都像你這麼拚命嗎？真要命啊，本宅就想說本宅在博物館裡，怎麼有天突然眼前一片黑。你們人類什麼時候在本宅眼前蓋了這個鬼東西⋯⋯")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep41}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),41===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep5}},[s._v("你散發的怪力讓市民恐懼，我必須帶你回怪奇博物館。")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep6}},[s._v("你散發的怪力讓市民恐懼，你能停下來嗎？")])])]):s._e(),s._v(" "),5===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("怪奇讓市民恐懼？那麼怪奇又是怎麼形成的呢？還不是你們把本宅搞的四不像，大家總是在說本宅閒話、談本宅的八卦，就是在這些負面的言語中才會誕生出怪奇，現在怪到本宅頭上是個什麼道理？你要帶本宅回去，就看你有沒有張中元的本事了！")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToFight}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),6===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("真遺憾，本宅是怪奇，那就是本宅生命的能量，只要本宅在的地方，人們就會受到影響。說起來這也是你們人類的錯，是你們把本宅搞的四不像，說本宅閒話、談本宅八卦，這些負面的言論誕生出本宅這一個怪奇，如今卻想怪到本宅身上嗎？")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep61}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),61===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep7}},[s._v("那麼我只好強行帶你回去了。")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep8}},[s._v("真的沒有別的辦法了嗎？")])])]):s._e(),s._v(" "),7===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("呵呵呵，是嗎？本宅好不容易出來了，怎麼可能輕易回去？想帶本宅回去，要看你有沒有張中元的本事了！")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToFight}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),8===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("多少年了呀，這城市⋯⋯改變到本宅都認不得了。連本宅曾經風光的林開郡洋樓啊，都成了一棟鬼屋了呢，呵呵呵。")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep81}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),81===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep9}},[s._v("唉⋯⋯看來沒別的辦法了。")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep100}},[s._v("你不是鬼屋啦，你是沒被人們看見的歷史建築。")])])]):s._e(),s._v(" "),9===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("是啊，人類製造怪奇；人類捕捉怪奇。都是沒辦法的事呢。我們的存在，都是如此無助。既然這樣，就讓我們拚個你死我活吧！")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToFight}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),100===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("本宅有些掛念的事，如果不弄明白本宅是不會甘心的。你如果了卻本宅的心願，跟你回去又有何妨呢？本宅老了，又有些東西擋在本宅眼前，看不清楚了。你可以幫本宅看看，本宅最重要的幾位老朋友，他們現在是否還在？仍然是本宅當初認識的那個模樣的，還剩下哪個呀？")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep110}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),110===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep101}},[s._v("基隆驛")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep101}},[s._v("舊郵便局")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep102}},[s._v("許梓桑古厝")])])]):s._e(),s._v(" "),101===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("你輸入錯誤了嗎？為什麼本宅感覺不到他們的怪力呢？")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep111}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),111===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToFight}},[s._v("我不行了，戰鬥吧！")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep110}},[s._v("我要再試一次。")])])]):s._e(),s._v(" "),102===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("基隆驛和郵便局都不在很久了呢，他們氣味也漸漸消散殆盡了，許宅也變得像廢墟一樣，看來本宅已經是最幸運的一個了呢，真不知道，是該笑還是該哭呢？呵呵呵⋯⋯")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep112}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),112===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep103}},[s._v("我完成約定了，跟我走吧。")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep104}},[s._v("我還能為你做些什麼嗎？")])])]):s._e(),s._v(" "),103===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),s._m(1)]):s._e(),s._v(" "),104===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("其實⋯⋯本宅很害怕死亡的，本宅怕本宅會像基隆驛、郵便局那樣消失；也怕本宅像許梓桑古厝那樣半死不活的模樣。如果就這樣消失了，人們對本宅的記憶，是否就只是一棟可笑的鬼屋呢？如果可以，你是否願意為本宅畫下本宅最風華的模樣呢？")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep114}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),114===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-all-box"},[o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep103}},[s._v("抱歉，我還有重要的事⋯⋯")]),s._v(" "),o("div",{staticClass:"house-0-all-btn",on:{click:s.goToStep105}},[s._v("好啊，我有的是時間。")])])]):s._e(),s._v(" "),105===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("謝謝你，那麼本宅就跟你回去吧。")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep106}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),106===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.towerBg+")"}},[o("img",{staticClass:"house-0-ghost",attrs:{src:a("/Eg6"),alt:"ghost"}}),s._v(" "),o("div",{staticClass:"house-0-talk-box"},[o("div",{staticClass:"house-0-head"},[s._v("林開郡洋樓")]),s._v(" "),o("div",{staticClass:"house-0-frame"},[o("div",[s._v("因為你的真心誠意，你和平地帶回了怪奇:林開郡洋樓，並且消除 了他心中的糾結。請前往「見書店」，並使用道具包裡的「明信 片」，畫下、寫下對林開郡洋樓的印象，或是想對他說的一句話。完成後交 給店家，可獲得神秘卡片。")]),s._v(" "),o("div",{staticClass:"house-0-triangle-box",on:{click:s.goToStep107}},[o("div",{staticClass:"house-0-triangle"})])])])]):s._e(),s._v(" "),107===s.step?o("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+s.mapBg+")"}},[s._m(2)]):s._e()])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"house-3-text"},[this._v("怪奇「林開郡洋樓」消失了，怪力在洋樓內四處穿梭，怪奇似乎跑到了建築物的邊緣處。"),t("span",{staticStyle:{color:"#95ff00"}},[this._v("請拿出道具包中的「透明片」")]),this._v("，到可以使林開郡洋樓與透明片的線條完全重疊的位置，即可逼怪奇現形。"),t("br"),this._v("小提示：馬路有點危險，中途停留一下，或許就能找到答案。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"house-0-talk-box"},[t("div",{staticClass:"house-0-head"},[this._v("林開郡洋樓")]),this._v(" "),t("div",{staticClass:"house-0-frame",staticStyle:{background:"none",color:"white"}},[t("div",[this._v("好吧，你似乎是個好人，本宅就跟你回去吧。唉⋯⋯如果人們可以學會面對自己，學會與萬物和諧共存，又怎麼會有我們這些怪奇，需要你們來捕捉呢？")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"house-0-talk-box"},[t("div",{staticStyle:{color:"white",padding:"10px"}},[this._v("本地區的怪力密度下降"),t("br"),this._v("人們也恢復正常狀態")]),this._v(" "),t("div",{staticClass:"house-0-all-btn"},[this._v("此線完結")])])}]};var u=a("VU/8")(h,g,!1,function(s){a("vu/j")},"data-v-8242a154",null);t.default=u.exports},Z26o:function(s,t,a){s.exports=a.p+"static/img/ling-half-icon.d7e5da6.png"},ZwoY:function(s,t,a){s.exports=a.p+"static/img/ling-normal-map.9ab1dad.png"},n04a:function(s,t,a){s.exports=a.p+"static/img/ling-tower.c333d4f.png"},"vu/j":function(s,t){}});
//# sourceMappingURL=8.c22fb8b5c489c724697f.js.map
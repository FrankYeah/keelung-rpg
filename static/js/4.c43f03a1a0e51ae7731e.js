webpackJsonp([4],{"50/A":function(t,s,i){t.exports=i.p+"static/img/big-fish-bird.ceb2e65.png"},"8w01":function(t,s,i){t.exports=i.p+"static/img/lulu-full-icon.4897c56.png"},DrZY:function(t,s,i){t.exports=i.p+"static/img/small-fish-bird.66dadc3.png"},JRmv:function(t,s,i){t.exports=i.p+"static/img/worker-man.0ec9c7b.png"},ThZd:function(t,s,i){t.exports=i.p+"static/img/the-man-eye.ec6d3e2.png"},VNt2:function(t,s,i){t.exports=i.p+"static/img/red-shirt.6443464.png"},hG2B:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("pOu1"),e=i.n(a),o=i("p3xK"),l=i.n(o),c={name:"LuluHouse",components:{},data:function(){return{step:6,Q6Step:!0,quickQA:0,wetoBg:e.a,normalMap:l.a,close115Q2:!0,close115Q3:!0,redShirtInput:"",wrongCount:0,chooseSelfCount:0,lastLie:0}},mounted:function(){},methods:{goToStepQ6half:function(){this.step=6.5},goToStepQ7:function(){this.step=7},goToStepQ8:function(){this.step=8},goToCompass:function(){this.$router.push({path:"./lulu-house-compass"})},goToQuickQA:function(){this.quickQA++},rightQA:function(){this.power<=0?alert("請補充能力值"):this.quickQA++},wrongQA:function(){this.power<=0?alert("請補充能力值"):(this.$store.commit("changePower",1),this.quickQA++,this.power<=0&&(this.quickQA=0,this.step=9))},lastRightQA:function(){this.step=10},goToStepQ911:function(){this.step=9.11},goToStepQ91:function(){this.step=9.1},goToStepQ11:function(){this.step=11},goToStepQ115:function(){this.step=11.5},goToStepQ12:function(){this.step=12},goToStepQ13:function(){this.step=13},goToStepQ14:function(){this.step=14},goToStepQ15:function(){this.step=15},goToFight:function(){this.$store.commit("fightlulu"),this.$router.push({path:"./lulu-house-fight"})},goBackQ115Delete2:function(){this.step=11.5,this.close115Q2=!1},goBackQ115Delete3:function(){this.step=11.5,this.close115Q3=!1,this.power>0&&(this.$store.commit("changePower",1),alert("女子揍了你一拳，能力值−１"))},goToStepQ155:function(){this.step=15.5},goToStepQ16:function(){this.step=16},goToStepQ17:function(){this.step=17},goToStepQ175:function(){this.step=17.5},goToStepQ18:function(){this.step=18},goToStepQ19:function(){this.step=19},goToStepQ20:function(){this.step=20},goToStepQ21:function(){this.step=21},goToStepQ22:function(){this.step=22},goToStepQ225:function(){this.step=22.5},goToStepQ23:function(){this.step=223},goToStepQ24:function(){this.step=24},goToStepQ245:function(){this.step=24.5},redShirtAnswer:function(){this.wrongCount>1?this.step=25.5:"自己"===this.redShirtInput?this.step=26:"林發財"===this.redShirtInput?this.step=27:"阿進"===this.redShirtInput?this.step=28:(this.wrongCount++,this.step=25)},goToStepQ265:function(){this.step=26.5},goToStepQ2651:function(){if(this.power>=10)return this.$store.commit("changePower",10),void(this.step=26.52);this.chooseSelfCount>0?this.step=25.5:(this.chooseSelfCount++,this.step=26.51)},goToStepQ9a:function(){this.step=99,this.$store.commit("changeHeader",!0),this.$store.commit("changeNoteDot",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("luluWin"),this.$store.commit("getLuluCard","color")},goToStepQ285:function(){this.step=28.5},goToStepQ2851:function(){this.step=28.51,this.$store.commit("changePower",this.power)},goToStepQ2852:function(){this.lastLie>0?this.step=25.5:(this.step=28.52,this.lastLie++)},goToStepQ28515:function(){this.step=28.515},goToStepQ9b:function(){this.step=100,this.$store.commit("changeHeader",!0),this.$store.commit("changeNoteDot",!0),this.$store.commit("changeFrameDot",!0),this.$store.commit("luluWin"),this.$store.commit("getLuluCard","color")},goToLast:function(){this.step=1e3}},computed:{power:function(){return this.$store.state.power}}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"lulu-house"},[6===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("委芬託斯")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("委託、委託（吼叫聲）真噁心、真噁心⋯⋯人類身上都是博物館的臭味，咬死人類、咬死人類⋯⋯不行，露露要委芬託斯問問題，")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ6half}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),6.5===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ7}},[t._v("修淡幾咧！我只是剛好路過耶⋯⋯")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ8}},[t._v("只是回答問題而已，放馬過來吧！")])])]):t._e(),t._v(" "),7===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("委芬託斯")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("委託、委託⋯⋯（冷靜下來）啊，是這樣啊，真不好意思，那你走吧。（禮貌尷尬貌）")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToCompass}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),8===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),0===t.quickQA?a("div",{staticClass:"house-0-all-box",staticStyle:{"padding-top":"0px","text-align":"center"},on:{click:t.goToQuickQA}},[a("img",{staticClass:"house-0-big-fishbird",attrs:{src:i("p5VL"),alt:"ghost"}}),t._v(" "),t._m(0)]):t._e(),t._v(" "),1===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("1.連接船員與委託行之間負責將貨運進店家的人物叫什麼？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("海龍珠")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("海蜘蛛")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("海蟑螂")])]):t._e(),t._v(" "),2===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("2.曾是全台最大的港口、最多委託行、最潮的城市沒有哪個名稱？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("風城")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("雨都")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("台灣頭")])]):t._e(),t._v(" "),3===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("3.委託行據說什麼都賣，以下哪個是委託行內不販售的商品？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("巧克力")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("汽車")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("蘋果")])]):t._e(),t._v(" "),4===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("4.過去委託行的商品「不是」透過什麼管道來的？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("船員從國外帶回國")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("外國留學生從家鄉帶回來")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("中國商店海運寄來")])]):t._e(),t._v(" "),5===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("5.以下哪個「不是」導致基隆委託行沒落的原因？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("基隆港被其他港口取代")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("貨源被其他城市壟斷")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("大量仿製的地下工廠盛行")])]):t._e(),t._v(" "),6===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("6.委託行街上方的頂棚是怎麼來的？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("基隆多雨因此店家集資共同建造")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("風水師說「聚財」")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("基隆黑鳶常降鳥屎")])]):t._e(),t._v(" "),7===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("7.過去船員夾帶私貨過海關時，哪個是「真實發生過」的方式？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("綁石頭沉海，上岸後再潛水打撈")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("找流氓從碼頭偷竊出去")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("把所有服裝穿在身上並用大衣包覆")])]):t._e(),t._v(" "),8===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("8.以下何者為委託行街興盛時的象徵？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("北中南前來批貨的滿滿客人")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("在門口販賣的各式小吃攤")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("以上皆是")])]):t._e(),t._v(" "),9===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("9.基隆委託行興盛時期高達多少間店家？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("50多間")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.rightQA}},[t._v("200多間")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("500多間")])]):t._e(),t._v(" "),10===t.quickQA?a("div",{staticClass:"house-0-all-box-quick"},[a("div",{staticClass:"house-0-text",staticStyle:{padding:"0px 10px"}},[t._v("10.現在仍開著店的委託行，何者「不是」它們生意不好仍繼續開的原因呢？")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("為了僅剩的老顧客來時得以寒暄幾句")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.lastRightQA}},[t._v("因為委託行沒落時欠下的債物")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.wrongQA}},[t._v("閒著也是閒著，且就住在樓上開店很方便")])]):t._e()]):t._e(),t._v(" "),9===t.step?a("div",{staticClass:"house-0-box",on:{click:t.goToStepQ911}},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),t._m(1)]):t._e(),t._v(" "),9.11===t.step?a("div",{staticClass:"house-0-box",on:{click:t.goToStepQ91}},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),t._m(2)]):t._e(),t._v(" "),9.1===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"100%",top:"0px"},attrs:{src:i("ThZd"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("館長")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("啊，真是千鈞一髮，你剛剛差點被吃掉了呢。不要問，我為什麼會路過；你要問，該怎麼通過委芬託斯的考驗。要注意，委芬託斯無法被打倒，只能老實回答問題。補完能力值再上吧！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ8}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),10===t.step?a("div",{staticClass:"house-0-box"},[a("img",{staticClass:"house-0-fishbird",attrs:{src:i("50/A"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box",staticStyle:{"padding-top":"0px","text-align":"center"},on:{click:t.goToStepQ11}},[a("img",{staticClass:"house-0-big-fishbird",attrs:{src:i("DrZY"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-text"},[t._v("可、可惡，好想吃掉人類！")]),t._v(" "),a("div",{staticClass:"house-0-text",staticStyle:{"font-size":"40px"}},[t._v("給我記住⋯⋯")])])]):t._e(),t._v(" "),11===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("竟然有人類通過了委芬託斯？你是誰？你來這裡做什麼？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ115}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),11.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box",staticStyle:{"padding-top":"5vh"}},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ12}},[t._v("我是館長派來收服怪奇的，跟我戰鬥吧！")]),t._v(" "),t.close115Q2?a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ13}},[t._v("我⋯⋯我是來買東西的。")]):t._e(),t._v(" "),t.close115Q3?a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ14}},[t._v("我是來收服⋯⋯妳的心的。")]):t._e(),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ15}},[t._v("我是怪奇博物館的新館員，請問怪奇您怎麼稱呼？")])])]):t._e(),t._v(" "),12===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("哼，我可是聚集了千件滯銷商品的怨念，想收服我，你有這本事嗎？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToFight}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),13===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("你真不會說謊呢，我遠遠就聞到你身上張中元的味道了，你是來收服怪奇的館員吧？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goBackQ115Delete2}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),14===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("『（嬌笑）噢呵呵呵，哎呀，你真是⋯⋯（猙獰變臉）貢殺毀！恁祖媽可以這樣讓你調戲膩？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goBackQ115Delete3}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),15===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("叫我露露就好。我這裡要做生意，我對博物館沒興趣，你走吧！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ155}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),15.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ16}},[t._v("做生意？少騙人了！你已經為害到市民的安全，我要代替館長來收服妳！")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ17}},[t._v("妳的怪力對居民帶來負面影響，你可以協助我阻止這件事嗎？")])])]):t._e(),t._v(" "),16===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[t._m(3),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToFight}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),17===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[t._m(4),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ175}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),17.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ18}},[t._v("我知道，你們存在是因為⋯⋯")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ19}},[t._v("我不知道，可以告訴我嗎？")])])]):t._e(),t._v(" "),18===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ20}},[t._v("怪奇是人類的祖先。")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ20}},[t._v("怪奇是二戰時期創造的生化武器。")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ21}},[t._v("怪奇是產生情感的世間萬物。")])])]):t._e(),t._v(" "),19===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("恁祖媽看起來像是漢聲小百科嗎？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ22}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),20===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("滿嘴謊言的傢伙，人類果然不可信任。納命來！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToFight}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),21===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("看來你倒是知道挺多的，那麼你還是認為對市民造成影響，是我的問題嗎？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ22}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),22===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[t._m(5),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ225}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),22.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ20}},[t._v("我寧願戰鬥。")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ24}},[t._v("讓我試試看。")])])]):t._e(),t._v(" "),24===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("我相信這樣的人，就在這附近。你找到他之後，就再回來這裡找我吧。")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ245}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),24.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("div",{staticClass:"house-0-all-245-box"},[a("img",{staticClass:"house-0-245-fishbird",attrs:{src:i("VNt2"),alt:"ghost"}}),t._v(" "),t._m(6),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.redShirtInput,expression:"redShirtInput"}],staticClass:"house-0-245-input",attrs:{type:"text"},domProps:{value:t.redShirtInput},on:{input:function(s){s.target.composing||(t.redShirtInput=s.target.value)}}}),t._v(" "),a("div",{staticClass:"house-0-245-go",on:{click:t.redShirtAnswer}},[t._v("GO")])])]):t._e(),t._v(" "),25===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("嗯⋯⋯嗯？這人根本不是真心想買！你是故意要戲弄我嗎？再亂來的話，我就不跟你客氣了。")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ245}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),25.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("虛情假意的人類，休想再玩弄商品的感情了！納命來！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToFight}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),26===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("你？你要買下來？你發誓你是真的看見它的美，你願意承諾你會珍惜這件商品，不會退貨也不會隨意丟棄？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ265}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),26.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ2651}},[t._v("是。")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ2651}},[t._v("否。")])])]):t._e(),t._v(" "),26.51===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame"},[a("div",[t._v("：（皺眉）你身上的能力值根本不夠，等你弄到１０點再來吧。再亂來的話，我就不跟你客氣了。")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ245}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),26.52===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("好的，那麼就交給你了。")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ9a}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),27===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("你竟敢帶惡魔當鋪的老闆來？你以為我會愚蠢到連惡魔都不認得嗎？與惡魔交易的負心人啊，我一定會讓你付出代價的！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToFight}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),28===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("你找來的人就是他？土裡土氣的，你確定他真的識貨嗎⋯⋯啊，而且他錢不夠呢，我這裡不接受賒帳的！你要推薦他，你要用你現在所有的能力值來補足他不夠的金額，你願意嗎？")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ285}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),28.5===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-all-box"},[a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ2851}},[t._v("是。")]),t._v(" "),a("div",{staticClass:"house-0-all-btn",on:{click:t.goToStepQ2852}},[t._v("否。")])])]):t._e(),t._v(" "),28.51===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("是嗎⋯⋯好的，那麼就賣給他吧。")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ28515}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),28.515===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("JRmv"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("工人")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("你真的要幫我買下它嗎？多謝！多謝！我一直想買這件洋裝，送給我太太。因為她每次經過這裡都會停下腳步，看著這件洋裝，一看就是十多分鐘不肯離開，但我實在沒存夠錢買，本來還擔心被別人買走她會傷心，謝謝你幫我出錢，這下我太太一定會足歡喜的！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ9b}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),28.52===t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"50%"},attrs:{src:i("8w01"),alt:"ghost"}}),t._v(" "),a("div",{staticClass:"house-0-talk-box"},[a("div",{staticClass:"house-0-head"},[t._v("露露")]),t._v(" "),a("div",{staticClass:"house-0-frame",staticStyle:{width:"100vw","text-align":"center"}},[a("div",[t._v("你是故意要戲弄我嗎！")]),t._v(" "),a("div",{staticClass:"house-0-triangle-box",on:{click:t.goToStepQ245}},[a("div",{staticClass:"house-0-triangle"})])])])]):t._e(),t._v(" "),99==t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"},on:{click:t.goToLast}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"80%"},attrs:{src:i("l6i5"),alt:"ghost"}}),t._v(" "),t._m(7)]):t._e(),t._v(" "),100==t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.wetoBg+")"},on:{click:t.goToLast}},[a("img",{staticClass:"house-0-fishbird",staticStyle:{width:"80%"},attrs:{src:i("l6i5"),alt:"ghost"}}),t._v(" "),t._m(8)]):t._e(),t._v(" "),1e3==t.step?a("div",{staticClass:"house-0-box",style:{backgroundImage:"url("+t.normalMap+")"}},[t._m(9)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-text"},[this._v("委託、委託⋯⋯委託行快問快答"),s("br"),this._v("答錯就扣１點能力值"),s("br"),this._v("沒能力值就吃掉人類！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-all-box",staticStyle:{"padding-top":"0px","text-align":"center"}},[s("img",{staticClass:"house-0-big-fishbird",attrs:{src:i("p5VL"),alt:"ghost"}}),this._v(" "),s("div",{staticClass:"house-0-text"},[this._v("錯太多")]),this._v(" "),s("div",{staticClass:"house-0-text",staticStyle:{"font-size":"40px"}},[this._v("吃掉人類！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-all-box",staticStyle:{"text-align":"center"}},[s("div",{staticClass:"house-0-text"},[this._v("你眼前一黑"),s("br"),this._v("以為自己就這樣沒命了"),s("br"),s("br"),this._v("當你再次睜開眼睛時⋯⋯")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("（掩嘴嬌笑）哈哈哈，我危害到市民的安全？真奇怪。我啊，就只是在這邊等著有緣人，來買下珍貴事物的商人而已。"),s("br"),this._v("（落寞）可惜啊可惜，既然你來了，看來我是等不到了⋯⋯說起來，就算我賣了，你們人類也不會珍惜，不過都是在利用這些物品的生命而已。利用完畢了，就會馬上丟棄吧！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("我帶來負面影響？那麼人類也對我帶來負面影響，你怎麼不收服人類呢？偏心鬼。再說，你知道為什麼會有我們這些怪奇存在嗎？"),s("br"),this._v("（落寞）可惜啊可惜，既然你來了，看來我是等不到了⋯⋯說起來，就算我賣了，你們人類也不會珍惜，不過都是在利用這些物品的生命而已。利用完畢了，就會馬上丟棄吧！")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[this._v("怪奇就是某些糾結的情感，附著在人間的某樣東西上。像我呀，最糾結的就是某些商品賣不出去了⋯⋯每個商品的存在，都在等著一個有緣人，懂得自己的價值，願意善待自己。"),s("br"),this._v("\n          （憤怒）但有些商品一輩子在這裡生灰塵，有些被假意買去卻又拿來退貨換錢，我們被當成像垃圾一樣對待，好可恨啊⋯⋯沒錯！我就是那些不被珍惜的商品的怨氣！"),s("br"),this._v("\n          （沈默盯著玩家）⋯⋯"),s("br"),this._v("\n          你是第一個願意傾聽我的人類，你會是個懂珍惜的人嗎？你能不能，讓我把我最珍貴的這件商品賣出去呢？如果可以找到珍惜這件商品的人，我就跟你回怪奇博物館吧。\n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-245-text"},[this._v("委託行附近存在著7個時空縫隙，快拿出"),s("span",{staticStyle:{color:"#95ff00"}},[this._v("道具包裡的「時空旅人名冊」")]),this._v("，看看他們的說法，想想他們是否就是露露等待的有心人？如果認為找到了合適人選，就去告訴露露吧！"),s("br"),s("br"),this._v("誰是有心人？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-last-frame"},[s("div",[this._v("等待了這麼多年，終於完成我的心願。謝謝你願意為了我買下它，看來該是我履行承諾的時候了。不過我還是會一直盯著人類的，只要有人不珍惜買來的東西，我還是會再次出現的！")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-last-frame"},[s("div",[this._v("等待了這麼多年，終於完成我的心願。他確實是個識貨的人呢，這麼多商品，他每次來都是看那件洋裝。謝謝你為我找到珍惜商品的人，看來該是我履行承諾的時候了。我另外有個禮物給你，你到ＸＸ委託行去吧，記得跟店員說：「我要拿露露的信物」")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"house-0-talk-box"},[s("div",{staticClass:"house-0-last-frame"},[s("div",[this._v("本地區的怪力密度下降，人們也恢復正常狀態。")])])])}]};var v=i("VU/8")(c,h,!1,function(t){i("p9Fd")},"data-v-6173dab9",null);s.default=v.exports},l6i5:function(t,s,i){t.exports=i.p+"static/img/lulu-opacity-icon.0b373a8.png"},p3xK:function(t,s,i){t.exports=i.p+"static/img/lulu-white-map.cb1ccc2.png"},p5VL:function(t,s,i){t.exports=i.p+"static/img/fish-bird-green.b11ce8d.png"},p9Fd:function(t,s){},pOu1:function(t,s,i){t.exports=i.p+"static/img/weto-house-opacity.3647c1a.png"}});
//# sourceMappingURL=4.c43f03a1a0e51ae7731e.js.map
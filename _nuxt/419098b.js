(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{460:function(t,e,j){"use strict";j.r(e);var n=j(462),r=n.b.reactiveProp,o={extends:n.a,mixins:[r],props:{options:{type:Object,required:!0}},mounted:function(){this.renderChart(this.chartData,this.options)}},l=j(35),component=Object(l.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},461:function(t,e,j){var map={"./af":325,"./af.js":325,"./ar":326,"./ar-dz":327,"./ar-dz.js":327,"./ar-kw":328,"./ar-kw.js":328,"./ar-ly":329,"./ar-ly.js":329,"./ar-ma":330,"./ar-ma.js":330,"./ar-sa":331,"./ar-sa.js":331,"./ar-tn":332,"./ar-tn.js":332,"./ar.js":326,"./az":333,"./az.js":333,"./be":334,"./be.js":334,"./bg":335,"./bg.js":335,"./bm":336,"./bm.js":336,"./bn":337,"./bn-bd":338,"./bn-bd.js":338,"./bn.js":337,"./bo":339,"./bo.js":339,"./br":340,"./br.js":340,"./bs":341,"./bs.js":341,"./ca":342,"./ca.js":342,"./cs":343,"./cs.js":343,"./cv":344,"./cv.js":344,"./cy":345,"./cy.js":345,"./da":346,"./da.js":346,"./de":347,"./de-at":348,"./de-at.js":348,"./de-ch":349,"./de-ch.js":349,"./de.js":347,"./dv":350,"./dv.js":350,"./el":351,"./el.js":351,"./en-au":352,"./en-au.js":352,"./en-ca":353,"./en-ca.js":353,"./en-gb":354,"./en-gb.js":354,"./en-ie":355,"./en-ie.js":355,"./en-il":356,"./en-il.js":356,"./en-in":357,"./en-in.js":357,"./en-nz":358,"./en-nz.js":358,"./en-sg":359,"./en-sg.js":359,"./eo":360,"./eo.js":360,"./es":361,"./es-do":362,"./es-do.js":362,"./es-mx":363,"./es-mx.js":363,"./es-us":364,"./es-us.js":364,"./es.js":361,"./et":365,"./et.js":365,"./eu":366,"./eu.js":366,"./fa":367,"./fa.js":367,"./fi":368,"./fi.js":368,"./fil":369,"./fil.js":369,"./fo":370,"./fo.js":370,"./fr":371,"./fr-ca":372,"./fr-ca.js":372,"./fr-ch":373,"./fr-ch.js":373,"./fr.js":371,"./fy":374,"./fy.js":374,"./ga":375,"./ga.js":375,"./gd":376,"./gd.js":376,"./gl":377,"./gl.js":377,"./gom-deva":378,"./gom-deva.js":378,"./gom-latn":379,"./gom-latn.js":379,"./gu":380,"./gu.js":380,"./he":381,"./he.js":381,"./hi":382,"./hi.js":382,"./hr":383,"./hr.js":383,"./hu":384,"./hu.js":384,"./hy-am":385,"./hy-am.js":385,"./id":386,"./id.js":386,"./is":387,"./is.js":387,"./it":388,"./it-ch":389,"./it-ch.js":389,"./it.js":388,"./ja":390,"./ja.js":390,"./jv":391,"./jv.js":391,"./ka":392,"./ka.js":392,"./kk":393,"./kk.js":393,"./km":394,"./km.js":394,"./kn":395,"./kn.js":395,"./ko":396,"./ko.js":396,"./ku":397,"./ku.js":397,"./ky":398,"./ky.js":398,"./lb":399,"./lb.js":399,"./lo":400,"./lo.js":400,"./lt":401,"./lt.js":401,"./lv":402,"./lv.js":402,"./me":403,"./me.js":403,"./mi":404,"./mi.js":404,"./mk":405,"./mk.js":405,"./ml":406,"./ml.js":406,"./mn":407,"./mn.js":407,"./mr":408,"./mr.js":408,"./ms":409,"./ms-my":410,"./ms-my.js":410,"./ms.js":409,"./mt":411,"./mt.js":411,"./my":412,"./my.js":412,"./nb":413,"./nb.js":413,"./ne":414,"./ne.js":414,"./nl":415,"./nl-be":416,"./nl-be.js":416,"./nl.js":415,"./nn":417,"./nn.js":417,"./oc-lnc":418,"./oc-lnc.js":418,"./pa-in":419,"./pa-in.js":419,"./pl":420,"./pl.js":420,"./pt":421,"./pt-br":422,"./pt-br.js":422,"./pt.js":421,"./ro":423,"./ro.js":423,"./ru":424,"./ru.js":424,"./sd":425,"./sd.js":425,"./se":426,"./se.js":426,"./si":427,"./si.js":427,"./sk":428,"./sk.js":428,"./sl":429,"./sl.js":429,"./sq":430,"./sq.js":430,"./sr":431,"./sr-cyrl":432,"./sr-cyrl.js":432,"./sr.js":431,"./ss":433,"./ss.js":433,"./sv":434,"./sv.js":434,"./sw":435,"./sw.js":435,"./ta":436,"./ta.js":436,"./te":437,"./te.js":437,"./tet":438,"./tet.js":438,"./tg":439,"./tg.js":439,"./th":440,"./th.js":440,"./tk":441,"./tk.js":441,"./tl-ph":442,"./tl-ph.js":442,"./tlh":443,"./tlh.js":443,"./tr":444,"./tr.js":444,"./tzl":445,"./tzl.js":445,"./tzm":446,"./tzm-latn":447,"./tzm-latn.js":447,"./tzm.js":446,"./ug-cn":448,"./ug-cn.js":448,"./uk":449,"./uk.js":449,"./ur":450,"./ur.js":450,"./uz":451,"./uz-latn":452,"./uz-latn.js":452,"./uz.js":451,"./vi":453,"./vi.js":453,"./x-pseudo":454,"./x-pseudo.js":454,"./yo":455,"./yo.js":455,"./zh-cn":456,"./zh-cn.js":456,"./zh-hk":457,"./zh-hk.js":457,"./zh-mo":458,"./zh-mo.js":458,"./zh-tw":459,"./zh-tw.js":459};function n(t){var e=r(t);return j(e)}function r(t){if(!j.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=461},471:function(t,e,j){"use strict";j.r(e);var n={name:"DagGrowth",components:{Chart:j(460).default},data:function(){return{chartData:{labels:["1","2","3","4","5","6","7"],datasets:[{label:"UBQ",backgroundColor:this.$vuetify.theme.currentTheme.primary,data:[1,1.09,1.19,1.28,1.37,1.46,1.55,1.63]},{label:"ETH",backgroundColor:this.$vuetify.theme.currentTheme.accent,data:[1,1.55,2.09,2.64,3.19,3.73,4.28,4.83]}]},chartOptions:{scales:{yAxes:[{ticks:{min:0,fontColor:this.$vuetify.theme.currentTheme.fontColor},scaleLabel:{display:!0,labelString:this.$t("mining.size"),fontColor:this.$vuetify.theme.currentTheme.fontColor}}],xAxes:[{ticks:{fontColor:this.$vuetify.theme.currentTheme.fontColor},scaleLabel:{display:!0,labelString:this.$t("mining.years"),fontColor:this.$vuetify.theme.currentTheme.fontColor}}]},legend:{display:!0,labels:{fontColor:this.$vuetify.theme.currentTheme.fontColor}},responsive:!0,maintainAspectRatio:!1}}}},r=j(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,j=t._self._c||e;return j("v-card",{staticClass:"pa-4",attrs:{flat:"",tile:"",outlined:""}},[j("Chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions,height:300,styles:{height:"300px"}}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
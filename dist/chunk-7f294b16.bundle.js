(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f294b16"],{"057e":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".key-list button[data-v-7e018f5d]{width:100%}",""])},"312f":function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"import-hardware"},[e.external?a("Input",{attrs:{disabled:e.gettingAvailableKeys,text:e.external.addressIndex,type:"number",label:"Index number on your device where you key is located (0 is default)"},on:{changed:function(t){return e.external.addressIndex=t}}}):e._e(),a("section",{staticClass:"key-list"},e._l(e.availableKeys,function(t){return a("Button",{key:t.index,attrs:{text:t.key,primary:"1"},nativeOn:{click:function(a){return e.importKey(t)}}})}),1),e.gettingAvailableKeys?a("figure",{staticClass:"loading-keys"},[a("i",{staticClass:"icon-spin4 animate-spin"})]):e._e()],1)},i=[],s=a("bd86"),l=a("7618"),c=(a("96cf"),a("3b8d")),o=(a("7f7f"),a("f997")),u=a.n(o),d=(a("17e3"),a("1f17")),h=a.n(d),p=a("21f8"),f=a("4b59"),b={props:["network"],data:function(){return{hardwareType:null,external:null,gettingAvailableKeys:!1,availableKeys:[],availableWallets:[]}},mounted:function(){var e=this;window.wallet.hardwareTypes().then(function(t){e.availableWallets=t,t.length&&e.changeHardwareType(t[0].name)})},computed:{externalWallets:function(){return this.availableWallets.map(function(e){return e.name})},blockchain:function(){return this.network.blockchain}},methods:{changeHardwareType:function(e){this.hardwareType=e,this.external=new u.a(this.hardwareType,this.blockchain)},getKeys:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.gettingAvailableKeys=!0,this.availableKeys=[],e.next=4,window.wallet.hardwareKey(this.external.blockchain,parseInt(this.external.addressIndex));case 4:t=e.sent,"object"===Object(l["a"])(t)&&!Array.isArray(t)&&t.hasOwnProperty("error")?p["a"].push(f["a"].snackbar(t.error)):this.availableKeys=[{index:this.external.addressIndex,key:t}],this.gettingAvailableKeys=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),importKey:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var a,n,r,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.index,n=t.key,r=h.a.placeholder(),r.external=this.external,r.blockchains=[this.external.blockchain],r.external.addressIndex=a,r.external.publicKey=n,r.publicKeys.push({blockchain:r.external.blockchain,key:n}),r.isUnique()){e.next=9;break}return e.abrupt("return",p["a"].push(f["a"].snackbar("This key is already imported")));case 9:setTimeout(function(){return i.$emit("imported",r)},1);case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},watch:Object(s["a"])({},"external.addressIndex",function(){var e=this;clearTimeout(n),n=setTimeout(function(){e.getKeys()},800)})},y=b,x=(a("ef26"),a("2877")),w=Object(x["a"])(y,r,i,!1,null,"7e018f5d",null);t["default"]=w.exports},"7eaf":function(e,t,a){var n=a("057e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("37f5e41a",n,!0,{sourceMap:!1,shadowMode:!1})},ef26:function(e,t,a){"use strict";var n=a("7eaf"),r=a.n(n);r.a}}]);
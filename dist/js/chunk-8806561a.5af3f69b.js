(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8806561a"],{"857a":function(t,e,n){var c=n("1d80"),a=/"/g;t.exports=function(t,e,n,i){var r=String(c(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"}},9911:function(t,e,n){"use strict";var c=n("23e7"),a=n("857a"),i=n("af03");c({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},"9c6c":function(t,e,n){"use strict";n.r(e);n("9911");var c=n("7a23"),a={class:"row"},i={class:"col-4"},r={class:"list-group"},o=Object(c["f"])(" 元件A "),u=Object(c["f"])(" 元件B "),s={class:"col-8"};function l(t,e,n,l,g,f){var v=Object(c["v"])("router-link"),d=Object(c["v"])("router-view");return Object(c["p"])(),Object(c["d"])("div",a,[Object(c["g"])("div",i,[Object(c["g"])("div",r,[Object(c["g"])(v,{class:["list-group-item list-group-item-action",{active:"A"===g.link}],"data-value":"A",onClick:f.changeStatus,to:"/newPage/componentA"},{default:Object(c["A"])((function(){return[o]})),_:1},8,["onClick","class"]),Object(c["g"])(v,{class:["list-group-item list-group-item-action",{active:"B"===g.link}],"data-value":"B",onClick:f.changeStatus,to:"/newPage/componentB"},{default:Object(c["A"])((function(){return[u]})),_:1},8,["onClick","class"])])]),Object(c["g"])("div",s,[Object(c["g"])(d)])])}var g={data:function(){return{link:""}},methods:{changeStatus:function(t){var e=t.target.dataset.value;this.link=e}}};g.render=l;e["default"]=g},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-8806561a.5af3f69b.js.map
"use strict";(self.webpackChunkethan_desktop=self.webpackChunkethan_desktop||[]).push([[595],{6595:(H,g,s)=>{s.r(g),s.d(g,{HydrogenBrowserApp:()=>O,HydrogenBrowserModule:()=>v});var p=s(5615),u=s(1977),b=s(727),t=s(4650);let _=(()=>{class e{constructor(){this.homePage="https://cn.bing.com/",this.history=[]}setHistory(n){for(let o=0;o<this.history.length;o++);}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=s(9238),m=s(8900),a=s(6895),l=s(4006),x=s(8805),C=s(9593),w=s(4998);const y=function(e){return{active:e}};function k(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.NdJ("mouseup",function(i){const d=t.CHM(n).index,B=t.oxw(2);return t.KtG(B.onTabMouseDown(i,d))}),t.TgZ(1,"div",14),t._uU(2),t.qZA(),t.TgZ(3,"i",15),t.NdJ("click",function(){const c=t.CHM(n).index,d=t.oxw(2);return t.KtG(d.closeTab(c))}),t.qZA()()}if(2&e){const n=r.$implicit,o=r.index,i=t.oxw(2);t.Q6J("ngClass",t.VKq(2,y,i.tabIndex==o)),t.xp6(2),t.Oqu(n.title)}}const M=function(e){return{hide:e}};function T(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",16),t._UZ(2,"iframe",17),t.ALo(3,"safeUrl"),t.qZA(),t.BQk()),2&e){const n=r.$implicit,o=r.index,i=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.VKq(4,M,i.tabIndex!=o)),t.xp6(1),t.Q6J("src",t.lcZ(3,2,n.addressList[n.addressIndex]),t.uOi)}}const h=function(e){return{disabled:e}};function A(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"i",3),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.back())}),t.qZA(),t.TgZ(3,"i",4),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.forward())}),t.qZA(),t.TgZ(4,"i",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.refresh())}),t.qZA(),t.TgZ(5,"i",6),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.home())}),t.qZA(),t.TgZ(6,"div",7)(7,"input",8),t.NdJ("ngModelChange",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.addressInput=i)})("keydown",function(i){t.CHM(n);const c=t.oxw();return t.KtG(c.search(i))}),t.qZA()()(),t.TgZ(8,"div",9),t.YNc(9,k,4,4,"div",10),t.TgZ(10,"i",11),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.addTab())}),t.qZA()(),t.YNc(11,T,4,6,"ng-container",12),t.BQk()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngClass",t.VKq(5,h,0==n.tabList[n.tabIndex].addressIndex)),t.xp6(1),t.Q6J("ngClass",t.VKq(7,h,n.tabList[n.tabIndex].addressIndex==n.tabList[n.tabIndex].addressList.length-1)),t.xp6(4),t.Q6J("ngModel",n.addressInput),t.xp6(2),t.Q6J("ngForOf",n.tabList),t.xp6(2),t.Q6J("ngForOf",n.tabList)}}let O=(()=>{class e{constructor(n,o,i){this.HBAS=n,this.EAS=o,this.toastSrv=i,this.titleBarConfig={showBorder:!1},this.menu=[{name:"\u5bfc\u822a",children:[{name:"\u540e\u9000",click:()=>{this.back()}},{name:"\u524d\u8fdb",click:()=>{this.forward()}},{name:"\u5237\u65b0",click:()=>{this.refresh()}},{name:"\u4e3b\u9875",click:()=>{this.home()}}]},{name:"\u6807\u7b7e\u9875",children:[{name:"\u65b0\u5efa\u6807\u7b7e\u9875",click:()=>{this.addTab()}},{name:"\u5173\u95ed\u6240\u6709\u6807\u7b7e\u9875",click:()=>{}}]},{name:"\u8bbe\u7f6e",children:[]}],this.subscription=new b.w0,this.maxTabCount=5,this.tabList=[],this.EAS.setAppActionBarMenu("hydrogenBrowser",this.menu)}ngOnInit(){}ngAfterViewInit(){this.subscription.add(this.EAS.eAppConfigChange.subscribe(n=>{"hydrogenBrowser"==n.id&&this.addTab(n.config?.src)}))}ngOnDestroy(){this.subscription.unsubscribe()}onTabMouseDown(n,o){0==n.button?this.tabIndex=o:1==n.button&&this.closeTab(o)}addTab(n){this.tabList.length>=this.maxTabCount?this.toastSrv.info(`\u6700\u591a\u53ea\u80fd\u521b\u5efa${this.maxTabCount}\u4e2a\u6807\u7b7e\u9875\u54e6`):(this.tabList.push({title:"\u65b0\u6807\u7b7e\u9875",addressIndex:0,addressList:[n||this.HBAS.homePage]}),this.tabIndex=this.tabList.length-1)}closeTab(n){1==this.tabList.length&&this.addTab(),this.tabIndex=0==n?this.tabList.length-2:--n,this.tabList.splice(n,1)}search(n){const o=()=>{clearTimeout(this.ctrlKeyTimeout),this.ctrlKeyTimeout=null};if(n.ctrlKey&&(this.ctrlKey=!0,o(),this.ctrlKeyTimeout=setTimeout(()=>{o(),this.ctrlKey=!1},200)),13==n.keyCode){let i=this.addressInput;if(this.isUrl(i))return void this.to(i);i=this.ctrlKey?`//${i}.com`:`https://cn.bing.com/search?q=${i}`,this.to(i),this.addressInput=""}}isUrl(n){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(n)}back(){0!=this.tabList[this.tabIndex].addressIndex&&this.tabList[this.tabIndex].addressIndex--}forward(){this.tabList[this.tabIndex].addressIndex!=this.tabList[this.tabIndex].addressList.length-1&&this.tabList[this.tabIndex].addressIndex++}refresh(){}home(){this.to(this.HBAS.homePage)}to(n){this.tabList[this.tabIndex].addressList.push(""),this.tabList[this.tabIndex].addressIndex=this.tabList[this.tabIndex].addressList.length-1,(0,u.gw)(()=>{this.tabList[this.tabIndex].addressList[this.tabList[this.tabIndex].addressList.length-1]=n},100)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_),t.Y36(f.y),t.Y36(m.S))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:2,vars:2,consts:[[3,"titleBarConfig"],[4,"ngIf"],[1,"util-block","flex-row","align-center","px-sm"],["size","medium","e-icon","","icon","arrow_back",1,"util-icon",3,"ngClass","click"],["size","medium","e-icon","","icon","arrow_forward",1,"util-icon",3,"ngClass","click"],["size","medium","e-icon","","icon","refresh",1,"util-icon",3,"click"],["size","medium","type","outlined","e-icon","","icon","home",1,"util-icon",3,"click"],[1,"address-block","flex-row","align-center","mx-sm"],["placeholder","\u8f93\u5165\u7f51\u5740\u6216\u7528\u4e8e\u641c\u7d22\u7684\u5173\u952e\u8bcd",1,"address-input","full-parent",3,"ngModel","ngModelChange","keydown"],[1,"tab-block","flex-row","align-center"],["class","tab-item flex-row align-center",3,"ngClass","mouseup",4,"ngFor","ngForOf"],["size","small","e-icon","","icon","add_box","type","filled",1,"close-icon","pl-sm",3,"click"],[4,"ngFor","ngForOf"],[1,"tab-item","flex-row","align-center",3,"ngClass","mouseup"],[1,"title"],["size","small","e-icon","","icon","cancel","type","filled",1,"close-icon",3,"click"],[1,"iframe-content",3,"ngClass"],["frameborder","0","width","100%","height","100%","scrolling","auto","sandbox","allow-same-origin allow-scripts allow-forms",1,"iframe",3,"src"]],template:function(n,o){1&n&&(t.TgZ(0,"e-app",0),t.YNc(1,A,12,9,"ng-container",1),t.qZA()),2&n&&(t.Q6J("titleBarConfig",o.titleBarConfig),t.xp6(1),t.Q6J("ngIf",null==o.tabList?null:o.tabList.length))},dependencies:[a.mk,a.sg,a.O5,l.Fj,l.JJ,l.On,x.T,C.S,w.Q],styles:[".util-block[_ngcontent-%COMP%]{height:38px}.util-block[_ngcontent-%COMP%]   .util-icon[_ngcontent-%COMP%]{border-radius:50%;padding:5px;margin:0 2px;flex-shrink:0;transition:background-color .2s}.util-block[_ngcontent-%COMP%]   .util-icon[_ngcontent-%COMP%]:hover{background-color:#f7f7f7}.util-block[_ngcontent-%COMP%]   .util-icon[_ngcontent-%COMP%]:active{background-color:#ebebeb}.util-block[_ngcontent-%COMP%]   .util-icon.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.util-block[_ngcontent-%COMP%]   .address-block[_ngcontent-%COMP%]{width:100%;height:32px;border-radius:32px;background-color:#f7f7f7;padding:0 18px;transition:background-color .2s}.util-block[_ngcontent-%COMP%]   .address-block[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.tab-block[_ngcontent-%COMP%]{height:32px;border-bottom:solid rgba(0,0,0,.08) 1px}.tab-block[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]{width:160px;height:32px;padding:0 4px;border-right:solid rgba(0,0,0,.08) 1px;background-color:#fff}.tab-block[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]{background-color:#0052cc;color:#fff}.tab-block[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;color:inherit;font-size:14px;height:32px;line-height:32px;padding:0 8px}.tab-block[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{opacity:0;flex-shrink:0;color:inherit;transform:translateY(2px);transition:transform .2s ease,opacity .2s ease}.tab-block[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.iframe-content[_ngcontent-%COMP%]{height:calc(100% - 70px)}.iframe-content.hide[_ngcontent-%COMP%]{display:none}.iframe-content[_ngcontent-%COMP%]   .iframe[_ngcontent-%COMP%]{height:100%}"]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.m]}),e})()}}]);
"use strict";(self.webpackChunkethan_desktop=self.webpackChunkethan_desktop||[]).push([[863],{7863:(_t,_,r)=>{r.r(_),r.d(_,{SettingApp:()=>ft,SettingModule:()=>dt});var y=r(727),A=r(5615),g=r(1977),t=r(4650),h=r(4023),C=r(9452),v=r(9709),k=r(7169),f=r(8900),Z=r(6578),p=r(6895),S=r(5228),x=r(707);function F(n,a){1&n&&(t.TgZ(0,"span",13),t._uU(1,"\u5f53\u524d\u767b\u5f55"),t.qZA())}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.randomInfo(o))}),t._uU(1,"\u968f\u673a\u6362\u4e2a\u7528\u6237\u540d\u548c\u5934\u50cf"),t.qZA()}}function E(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.logoutConfirm())}),t._uU(1,"\u9000\u51fa\u767b\u5f55"),t.qZA()}}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",3),t._UZ(1,"img",4)(2,"e-image",5),t.TgZ(3,"div",6)(4,"div",7),t._uU(5),t.YNc(6,F,2,0,"span",8),t.qZA(),t.TgZ(7,"div",9),t._uU(8),t.qZA(),t.TgZ(9,"div",10),t.YNc(10,I,2,0,"button",11),t.YNc(11,E,2,0,"button",11),t.TgZ(12,"button",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.deleteUser(s))}),t._uU(13,"\u5220\u9664\u7528\u6237"),t.qZA()()()()}if(2&n){const e=a.$implicit;t.xp6(1),t.Q6J("src",e.header,t.LSH),t.xp6(1),t.Q6J("src",e.header),t.xp6(3),t.hij("\u7528\u6237\u540d\uff1a",e.name,""),t.xp6(1),t.Q6J("ngIf",e.current),t.xp6(2),t.hij("\u8d26\u53f7\uff1a",e.account,""),t.xp6(2),t.Q6J("ngIf",e.current),t.xp6(1),t.Q6J("ngIf",e.current)}}function J(n,a){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,B,14,7,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.userList)}}let w=(()=>{class n{constructor(e,i,o,s,c,m){this.configSrv=e,this.mockPostSrv=i,this.userSrv=o,this.modalSrv=s,this.toastSrv=c,this.storageSrv=m}ngOnInit(){this.queryUserList()}queryUserList(){this.mockPostSrv.post({url:this.configSrv.api.queryUserList}).subscribe(i=>{200==i.status&&(i.data.map(o=>{o.current=o.account==this.userSrv.userInfo.account}),this.userList=i.data)})}randomInfo(e){this.mockPostSrv.post({url:this.configSrv.api.randomHeaderAndName}).subscribe(o=>{200==o.status&&this.mockPostSrv.post({url:this.configSrv.api.updateUserInfo,param:{id:e.id,name:o.data.name,header:o.data.header}}).subscribe(c=>{200==c.status?(this.queryUserList(),this.userSrv.set(c.data),this.toastSrv.success("\u66f4\u65b0\u7528\u6237\u8d44\u6599\u6210\u529f")):this.toastSrv.error(c.msg)})})}deleteUser(e){this.modalSrv.confirm({title:"\u786e\u8ba4\u5220\u9664\u6b64\u7528\u6237\uff1f",content:"\u6b64\u64cd\u4f5c\u4e0d\u80fd\u64a4\u9500\uff0c\u6240\u6709\u5173\u4e8e\u672c\u7528\u6237\u7684\u8bbe\u7f6e\u90fd\u5c06\u4ece\u672c\u673a\u7f13\u5b58\u4e2d\u6e05\u9664",confirmAction:()=>{this.mockPostSrv.post({url:this.configSrv.api.deleteUser,param:{id:e.id}}).subscribe(o=>{200==o.status?(this.toastSrv.success("\u5220\u9664\u6210\u529f"),e.id==this.userSrv.userInfo.id?this.logout():this.queryUserList()):this.toastSrv.error(o.msg)})}})}logoutConfirm(){this.modalSrv.confirm({title:"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\u5417\uff1f",confirmAction:()=>{this.logout()}})}logout(){this.storageSrv.clearToken()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.E),t.Y36(C.s),t.Y36(v.K),t.Y36(k._),t.Y36(f.S),t.Y36(Z.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["account-setting"]],decls:1,vars:1,consts:[["class","account-setting",4,"ngIf"],[1,"account-setting"],["class","user-item",4,"ngFor","ngForOf"],[1,"user-item"],[1,"bg",3,"src"],["shape","circle",1,"header",3,"src"],[1,"info-block"],[1,"name","mb-sm"],["class","tag ml-sm",4,"ngIf"],[1,"account"],[1,"button-block","flex-row","mt-md"],["class","mr-sm mb-sm","e-button","",3,"click",4,"ngIf"],["e-button","","eColor","danger",3,"click"],[1,"tag","ml-sm"],["e-button","",1,"mr-sm","mb-sm",3,"click"]],template:function(e,i){1&e&&t.YNc(0,J,2,1,"div",0),2&e&&t.Q6J("ngIf",i.userList)},dependencies:[p.sg,p.O5,S.o,x.A],styles:['.account-setting[_ngcontent-%COMP%]{padding:64px 16px 32px}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]{position:relative;padding:48px 16px 16px;border-radius:6px;box-shadow:0 2px 4px -2px #0000001f,0 2px 8px #00000014;border:solid rgba(0,0,0,.08) 1px;background-color:#fff}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{position:absolute;width:200px;height:100%;right:0;top:0;z-index:0;opacity:.2;object-fit:cover;border-radius:0 4px 4px 0}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]:before{content:"";position:absolute;width:80px;height:100%;right:120px;top:0;z-index:1;background:linear-gradient(90deg,white,rgba(255,255,255,0))}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:64px}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{position:absolute;top:0;left:16px;transform:translateY(-50%)}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]{position:relative;z-index:2}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:14px;padding:4px 8px;background-color:#00875a;border-radius:4px}.account-setting[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]{flex-wrap:wrap}']}),n})();var U=r(8898),Q=r(6569);let b=(()=>{class n{constructor(e,i){this.ETS=e,this.toastSrv=i,this.back=new t.vpe,this.efConfig={ui:{layout:"vertical"},schema:{datetime:{title:"\u4fee\u6539\u65f6\u95f4",widget:"date",dateInline:!0,dateFormat:"yyyy/MM/dd HH:mm:ss",validator:o=>o?[]:["\u8bf7\u9009\u62e9\u65f6\u95f4"]}},buttons:[{text:"\u81ea\u52a8\u8bbe\u5b9a\u65f6\u95f4",click:()=>{this.ETS.setTime(),this.toastSrv.success("\u8bbe\u7f6e\u6210\u529f"),this.back.emit()}},{text:"\u786e\u5b9a\u4fee\u6539",type:"submit",color:"primary",click:o=>{this.ETS.setTime(new Date(o.datetime)),this.toastSrv.success("\u8bbe\u7f6e\u6210\u529f"),this.back.emit()}}]}}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(U.O),t.Y36(f.S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["time-setting"]],outputs:{back:"back"},decls:5,vars:1,consts:[[1,"time-setting","p-lg"],[1,"mb-lg"],[3,"config"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h1",1)(2,"b"),t._uU(3,"\u65e5\u671f/\u65f6\u95f4\u8bbe\u5b9a"),t.qZA()(),t._UZ(4,"ef",2),t.qZA()),2&e&&(t.xp6(4),t.Q6J("config",i.efConfig))},dependencies:[Q.z],encapsulation:2}),n})();var Y=r(6666);const N=["inputFile"],K=["*"];let G=(()=>{class n{constructor(){this.change=new t.vpe}ngOnInit(){}clearValue(){this.inputFile.nativeElement.value=""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["e-uploader"]],viewQuery:function(e,i){if(1&e&&t.Gf(N,5),2&e){let o;t.iGM(o=t.CRH())&&(i.inputFile=o.first)}},inputs:{multiple:"multiple"},outputs:{change:"change"},ngContentSelectors:K,decls:4,vars:1,consts:[[1,"e-uploader"],["type","file",1,"file-input","full-parent",3,"multiple","click"],["inputFile",""]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"label",0)(1,"input",1,2),t.NdJ("click",function(){return i.clearValue()}),t.qZA(),t.Hsn(3),t.qZA()),2&e&&(t.xp6(1),t.Q6J("multiple",null!=!!i.multiple))},styles:[".e-uploader[_ngcontent-%COMP%]{position:relative;display:inline-block}.e-uploader[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;cursor:default}"]}),n})();const H=["waterFall"];function L(n,a){1&n&&t.GkF(0)}const q=function(n){return{"margin-bottom":n}},z=function(n){return{$implicit:n}};function R(n,a){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,L,1,0,"ng-container",6),t.qZA()),2&n){const e=a.$implicit,i=t.oxw(2);t.Q6J("ngStyle",t.VKq(3,q,i.gap)),t.xp6(1),t.Q6J("ngTemplateOutlet",i.reference)("ngTemplateOutletContext",t.VKq(5,z,e))}}function D(n,a){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,R,2,7,"div",4),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}const $=function(n){return{gap:n}};let X=(()=>{class n{constructor(){}ngOnInit(){}ngOnChanges(){this.refresh()}refresh(){if(this.columnCount){this.waterfallData=[];for(let e=0;e<this.columnCount;e++)this.waterfallData.push([]);this.pushItemToColumn(0)}}pushItemToColumn(e){(0,g.gw)(()=>{const i=[...this.waterFall.nativeElement.children];let o=0,s=0;i.map((c,m)=>{const{height:d}=c.getBoundingClientRect();0==m?s=d:d<s&&(o=m,s=d)}),this.waterfallData[o].push(this.list[e]),e!=this.list.length-1&&this.pushItemToColumn(e+1)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["e-waterfall"]],viewQuery:function(e,i){if(1&e&&t.Gf(H,5),2&e){let o;t.iGM(o=t.CRH())&&(i.waterFall=o.first)}},inputs:{list:"list",columnCount:"columnCount",reference:"reference",gap:"gap"},features:[t.TTD],decls:3,vars:4,consts:[[1,"e-waterfall","flex-row","align-start",3,"ngStyle"],["waterFall",""],["class","e-waterfall-column",4,"ngFor","ngForOf"],[1,"e-waterfall-column"],["class","e-waterfall-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"e-waterfall-item",3,"ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0,1),t.YNc(2,D,2,1,"div",2),t.qZA()),2&e&&(t.Q6J("ngStyle",t.VKq(2,$,i.gap)),t.xp6(2),t.Q6J("ngForOf",i.waterfallData))},dependencies:[p.sg,p.tP,p.PC],styles:[".e-waterfall[_ngcontent-%COMP%]   .e-waterfall-column[_ngcontent-%COMP%]{flex:1}"]}),n})(),O=(()=>{class n{transform(e,...i){return e.replace("/wallpaper/","/wallpaper/thumbnail/")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"thumbnail",type:n,pure:!0}),n})();const j=["waterFall"],V=["loadImgRef"];function tt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"img",9,10),t.NdJ("load",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onLoadImgComplete())})("error",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onLoadImgError(o))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("src",e.loadImg.url,t.LSH)}}function et(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.currentWallpaper==s.url?"":c.setWallpaper(s))}),t._UZ(1,"img",12),t.ALo(2,"thumbnail"),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw();t.Q6J("ngClass",i.currentWallpaper==e.url?"active":""),t.xp6(1),t.Q6J("src",t.lcZ(2,2,e.url),t.LSH)}}const nt=function(n){return{loading:n}};let M=(()=>{class n{constructor(e,i,o,s){this.wallpaperSrv=e,this.mockPostSrv=i,this.configSrv=o,this.toastSrv=s}ngOnInit(){this.getWallpaper()}getWallpaper(){this.mockPostSrv.post({url:this.configSrv.api.getWallpaper}).subscribe(i=>{200==i.status&&(this.wallpaperList=i.data,this.wallpaperSrv.getWallpaper().subscribe(o=>{this.currentWallpaper=o}))})}setWallpaper(e){this.loading=!0,this.loadImg=(0,g.I8)(e)}onLoadImgComplete(){this.wallpaperSrv.setWallpaper(this.loadImg.url,Boolean(2==this.loadImg.type)),this.toastSrv.success("\u8bbe\u7f6e\u58c1\u7eb8\u6210\u529f",{content:2==this.loadImg.type?"\u672c\u5730\u4e0a\u4f20\u7684\u58c1\u7eb8\u5237\u65b0\u9875\u9762\u540e\u5c06\u4e22\u5931":""}),this.loadImg=null,this.loading=!1}onLoadImgError(e){this.loadImg=null,this.loading=!1,this.toastSrv.error("\u8bbe\u7f6e\u58c1\u7eb8\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc")}onFileSelect(e){[...e.target.files].map((i,o)=>{let s=new FileReader;s.readAsDataURL(i),s.onload=()=>{const c={id:(0,g.zv)(),type:2,url:String(s.result)};this.wallpaperList.push(c),this.waterFall.refresh(),0==o&&this.setWallpaper(c)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Y.r),t.Y36(C.s),t.Y36(h.E),t.Y36(f.S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["wallpaper-setting"]],viewQuery:function(e,i){if(1&e&&(t.Gf(j,5),t.Gf(V,5)),2&e){let o;t.iGM(o=t.CRH())&&(i.waterFall=o.first),t.iGM(o=t.CRH())&&(i.loadImgRef=o.first)}},decls:11,vars:7,consts:[[1,"wallpaper-setting","full-parent",3,"ngClass"],[1,"wallpaper-setting-wrapper","full-parent-scroll","px-md","py-lg"],["class","load-image",3,"src","load","error",4,"ngIf"],[3,"change"],["e-button",""],[1,"wallpaper-select","mt-md"],["gap","16px",3,"list","columnCount","reference"],["waterFall",""],["reference",""],[1,"load-image",3,"src","load","error"],["loadImgRef",""],[1,"wallpaper-item",3,"ngClass","click"],[1,"bg",3,"src"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,tt,2,1,"img",2),t.TgZ(3,"e-uploader",3),t.NdJ("change",function(s){return i.onFileSelect(s)}),t.TgZ(4,"button",4),t._uU(5,"\u9009\u62e9\u672c\u5730\u58c1\u7eb8"),t.qZA()(),t.TgZ(6,"div",5)(7,"e-waterfall",6,7),t.YNc(9,et,3,4,"ng-template",null,8,t.W1O),t.qZA()()()()),2&e){const o=t.MAs(10);t.Q6J("ngClass",t.VKq(5,nt,i.loading)),t.xp6(2),t.Q6J("ngIf",i.loadImg),t.xp6(5),t.Q6J("list",i.wallpaperList)("columnCount",2)("reference",o)}},dependencies:[p.mk,p.O5,S.o,G,X,O],styles:['@charset "UTF-8";.wallpaper-setting[_ngcontent-%COMP%]{position:relative}.wallpaper-setting[_ngcontent-%COMP%]:before{content:"\\8bbe\\7f6e\\58c1\\7eb8\\4e2d...";font-size:18px;font-weight:700;position:fixed;left:50%;top:50%;z-index:1;opacity:0;pointer-events:none;transform:translate(-50%,-50%);transition:opacity .3s ease}.wallpaper-setting.loading[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]{opacity:.1;pointer-events:none}.wallpaper-setting.loading[_ngcontent-%COMP%]:before{opacity:1}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]{transition:opacity .3s ease}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .wallpaper-select[_ngcontent-%COMP%]   .wallpaper-item[_ngcontent-%COMP%]{position:relative}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .wallpaper-select[_ngcontent-%COMP%]   .wallpaper-item[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{width:100%;border:solid 4px transparent;border-radius:14px;transition:transform .2s ease,border .2s ease;overflow:hidden;box-sizing:border-box}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .wallpaper-select[_ngcontent-%COMP%]   .wallpaper-item[_ngcontent-%COMP%]:hover   .bg[_ngcontent-%COMP%]{border:solid 4px #2682fa;transform:scale(1.02)}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .wallpaper-select[_ngcontent-%COMP%]   .wallpaper-item[_ngcontent-%COMP%]:active   .bg[_ngcontent-%COMP%]{transform:scale(.98)}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .wallpaper-select[_ngcontent-%COMP%]   .wallpaper-item.active[_ngcontent-%COMP%]:before{content:"\\5f53\\524d\\58c1\\7eb8";position:absolute;left:16px;bottom:16px;background-color:#2682fa;border-radius:2px;color:#fff;z-index:1;padding:4px;font-size:12px}.wallpaper-setting[_ngcontent-%COMP%]   .wallpaper-setting-wrapper[_ngcontent-%COMP%]   .load-image[_ngcontent-%COMP%]{width:1px;height:1px;visibility:hidden;position:absolute;z-index:-1;pointer-events:none;left:0}']}),n})();var l=r(7340);const u_off={opacity:0,transform:"translateX(100%)"},u_duration="0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",P={slideAnim:(0,l.X$)("slideAnim",[(0,l.eR)(":enter",[(0,l.oB)(u_off),(0,l.jt)(u_duration,(0,l.oB)({opacity:1,transform:"translateX(0)"}))]),(0,l.eR)(":leave",[(0,l.jt)(u_duration,(0,l.oB)(u_off))])]),backStageAnim:(0,l.X$)("backStageAnim",[(0,l.SB)("default",(0,l.oB)({})),(0,l.SB)("backStage",(0,l.oB)({transform:"scale(0.95)"})),(0,l.eR)("default <=> backStage",[(0,l.jt)("0.4s cubic-bezier(0.4, 0.0, 0.2, 1)")])])};var it=r(9238),ot=r(8805),at=r(9593),st=r(4828);const rt=["eApp"];function ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onSettingClick(s))}),t._UZ(1,"i",12),t.TgZ(2,"div",13),t._uU(3),t.qZA()()}if(2&n){const e=a.$implicit;t.xp6(1),t.Q6J("icon",e.icon),t.xp6(2),t.Oqu(e.name)}}function lt(n,a){1&n&&t._UZ(0,"account-setting")}function pt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"time-setting",17),t.NdJ("back",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onBackClick())}),t.qZA()}}function gt(n,a){1&n&&t._UZ(0,"wallpaper-setting")}function ut(n,a){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,lt,1,0,"account-setting",15),t.YNc(2,pt,1,0,"time-setting",16),t.YNc(3,gt,1,0,"wallpaper-setting",15),t.qZA()),2&n){const e=t.oxw();t.Q6J("@slideAnim",void 0)("ngSwitch",e.activeSettingKey),t.xp6(1),t.Q6J("ngSwitchCase","account"),t.xp6(1),t.Q6J("ngSwitchCase","time"),t.xp6(1),t.Q6J("ngSwitchCase","wallpaper")}}const mt=function(n){return{value:n}};let ft=(()=>{class n{constructor(e,i){this.EAS=e,this.userSrv=i,this.menu=[{name:"\u6240\u6709\u8bbe\u7f6e",children:[]},{name:"\u5173\u4e8e",children:[{name:"Ethan\u7684\u5386\u53f2\u5de5\u4f5c\u9879\u76ee",click:()=>{this.EAS.launch("workProject")}},{name:"\u65e7\u7ad9-\u8bbe\u8ba1\u4f5c\u54c1\u96c6",click:()=>{this.EAS.launch("oldSite")}},{name:"\u5173\u4e8eEthanDesktop",click:()=>{this.EAS.launch("ethanDesktopIntroduction")}}]}],this.subscription=new y.w0,this.settings=[{key:"account",name:"\u8d26\u53f7\u7ba1\u7406",icon:"account_circle"},{key:"time",name:"\u65f6\u95f4\u8bbe\u7f6e",icon:"schedule"},{key:"wallpaper",name:"\u684c\u9762\u58c1\u7eb8",icon:"image"}],this.titleBarConfig={showBack:!1,showBorder:!1,backClick:()=>this.onBackClick()},this.EAS.setAppActionBarMenu("setting",this.menu),this.settings.map(o=>{this.menu[0].children.push({name:o.name,click:()=>{this.onSettingClick(o)}})})}ngOnInit(){}ngAfterViewInit(){this.subscription.add(this.EAS.eAppConfigChange.subscribe(e=>{"setting"==e.id&&e.config?.activeSettingKey&&this.onSettingClick({key:e.config.activeSettingKey})}))}ngOnDestroy(){this.subscription.unsubscribe()}onSettingClick(e){(0,g.gw)(()=>{this.activeSettingKey=e.key,this.titleBarConfig.showBack=!0,this.eApp.refreshTitleBarConfig()})}onBackClick(){(0,g.gw)(()=>{this.activeSettingKey=null,this.titleBarConfig.showBack=!1,this.changeTitleBarTheme("light"),this.eApp.refreshTitleBarConfig()})}changeTitleBarTheme(e){"dark"==e?(this.titleBarConfig.background="#444444",this.titleBarConfig.showBorder=!1,this.titleBarConfig.color="white"):(this.titleBarConfig.background="white",this.titleBarConfig.showBorder=!0,delete this.titleBarConfig.color)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(it.y),t.Y36(v.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(e,i){if(1&e&&t.Gf(rt,5),2&e){let o;t.iGM(o=t.CRH())&&(i.eApp=o.first)}},inputs:{activeSettingKey:"activeSettingKey"},decls:14,vars:11,consts:[[3,"titleBarConfig","titleBarConfigChange"],["eApp",""],[1,"setting","full-parent"],[1,"user-block","flex-column","align-center","justify-center","pt-md","mb-md"],["size","large","shape","circle",1,"mb-md",3,"src"],[1,"user-name"],[1,"user-account"],[1,"setting-block","p-md"],["class","setting-item flex-row align-center px-lg py-md mb-md",3,"click",4,"ngFor","ngForOf"],[3,"opacity","show"],["class","setting-panel full-parent-scroll",3,"ngSwitch",4,"ngIf"],[1,"setting-item","flex-row","align-center","px-lg","py-md","mb-md",3,"click"],["e-icon","","type","filled","size","medium",1,"icon","mr-md",3,"icon"],[1,"name"],[1,"setting-panel","full-parent-scroll",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"back",4,"ngSwitchCase"],[3,"back"]],template:function(e,i){1&e&&(t.TgZ(0,"e-app",0,1),t.NdJ("titleBarConfigChange",function(s){return i.titleBarConfig=s}),t.TgZ(2,"div",2)(3,"div",3),t._UZ(4,"e-image",4),t.TgZ(5,"b",5)(6,"h3"),t._uU(7),t.qZA()(),t.TgZ(8,"div",6),t._uU(9),t.qZA()(),t.TgZ(10,"div",7),t.YNc(11,ct,4,2,"div",8),t.qZA()(),t._UZ(12,"e-shade",9),t.YNc(13,ut,4,5,"div",10),t.qZA()),2&e&&(t.Q6J("titleBarConfig",i.titleBarConfig),t.xp6(2),t.Q6J("@backStageAnim",t.VKq(9,mt,i.activeSettingKey?"backStage":"default")),t.xp6(2),t.Q6J("src",i.userSrv.userInfo.header),t.xp6(3),t.Oqu(i.userSrv.userInfo.name),t.xp6(2),t.Oqu(i.userSrv.userInfo.account),t.xp6(2),t.Q6J("ngForOf",i.settings),t.xp6(1),t.Q6J("opacity",.5)("show",!!i.activeSettingKey),t.xp6(1),t.Q6J("ngIf",i.activeSettingKey))},dependencies:function(){return[p.sg,p.O5,p.RF,p.n9,ot.T,at.S,x.A,st.K,w,b,M]},styles:[".user-block[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]{margin-bottom:4px}.user-block[_ngcontent-%COMP%]   .user-account[_ngcontent-%COMP%]{opacity:.6}.setting-block[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]{border-radius:4px;border:solid rgba(0,0,0,.08) 1px;box-shadow:0 0 2px -2px #0000001a,0 2px 4px #0000000f;background-color:#fff;transition:box-shadow .2s ease,background-color .2s ease}.setting-block[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#42526e}.setting-block[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]:hover{box-shadow:0 2px 4px -2px #0000001f,0 2px 8px #00000014}.setting-block[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]:active{background-color:#f9f9f9;box-shadow:none}.setting-panel[_ngcontent-%COMP%]{position:absolute;left:0;top:0;background-color:#fff;box-shadow:-6px 0 16px -8px #00000014,-9px 0 28px #0000000d,-12px 0 48px 16px #00000008}"],data:{animation:[P.slideAnim,P.backStageAnim]}}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[A.m]}),n})()}}]);
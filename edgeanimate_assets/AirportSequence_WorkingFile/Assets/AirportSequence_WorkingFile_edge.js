
(function($,Edge,compId){var _=null,y=true,n=false,e61='${_Title_BodyText}',x38='hidden',e58='${_selectorIcons_unlock_icon}',dt='Default Timeline',x25='33',i='none',e54='${_selectorIcons_finder_icon}',lf='left',e49='${_TitleText}',bg='background-color',x19='rgba(106,195,226,1)',x5='rgba(106,195,226,1.00)',x36='rgba(255,255,255,1)',tp='top',e66='${_CSE_Airport_Layers_chopped-07}',ta='text-align',ov='overflow',xc='rgba(0,0,0,1)',e65='${_selectorIcons_comp_icon}',x35='stage',e39='${_CSE_Airport_Layers_chopped-08}',x2='GothamMedium',e41='${_CSE_Airport_Layers_chopped-03}',x1='GothamBook',c='color',x6='rgba(0,0,0,0)',e62='${_selectorIcons_atom_icon}',e60='${_Rectangle6}',g='image',po='center',e40='${_CSE_Airport_Layers_chopped-12}',e59='${_CSE_Airport_Layers_Wifi}',e47='${_CSE_Airport_Layers_chopped-06}',x21='rgba(243,120,32,1.00)',e53='${_Title_BoxHold}',e56='${_Title_BoxOverlay}',e55='${_Rectangle5}',x='text',e57='${_beginBtn_icon}',o='opacity',m='rect',zx='scaleX',e37='${_Stage}',h='height',zy='scaleY',t='transform',e52='${_selectorIcons_binoc_icon}',e51='${_CSE_Airport_Layers_chopped-05}',e50='${_CSE_Airport_Layers_chopped-11}',e48='${_CSE_Airport_Layers_chopped-10}',p='px',x46='pointer',e45='${_CSE_Airport_Layers_chopped-04}',x28='rgba(0,0,0,1.00)',e44='${_CSE_Airport_Layers_chopped-02}',e43='${_CSE_Airport_Layers_chopped-01}',e42='${_CSE_Airport_Layers_chopped-09}',e63='${_selectorIcons_wifi_icon}',e64='${_Rectangle}',fs='font-size',l='normal',x4='2.0.0.250',a='Base State',x26='rgba(255,255,255,1.00)',x3='2.0.0',w='width',ql='linear',x23='56',ff='font-family',s='style';var im='images/';var g17='CSE_Airport_Layers_chopped-02.svg',g31='selectorIcons_comp_icon.png',g27='beginBtn_icon.png',g9='CSE_Airport_Layers_chopped-08.svg',g34='selectorIcons_wifi_icon.png',g33='selectorIcons_unlock_icon.png',g29='selectorIcons_atom_icon.png',g30='selectorIcons_binoc_icon.png',g15='CSE_Airport_Layers_chopped-03.svg',g13='CSE_Airport_Layers_chopped-06.svg',g14='CSE_Airport_Layers_chopped-04.svg',g32='selectorIcons_finder_icon.png',g7='CSE_Airport_Layers_chopped-07.svg',g11='CSE_Airport_Layers_chopped-12.svg',g8='CSE_Airport_Layers_chopped-09.svg',g16='CSE_Airport_Layers_chopped-01.svg',g10='CSE_Airport_Layers_chopped-10.svg',g12='CSE_Airport_Layers_chopped-05.svg',g20='CSE_Airport_Layers_Wifi.svg',g18='CSE_Airport_Layers_chopped-11.svg';var s24="Welcome! You are traveling for government business and are currently sitting in <br>an airport waiting for your flight when you decide to connect to a WiFi hot <br>spot. Explore this graphic and click on the icons to learn more about threats, <br>risks and  how to protect your information.   ",s22="CYBER SECURITY AND WIRELESS TECHNOLOGIES";var fonts={};fonts[x1]='<style>@font-face {     font-family: GothamBook;    src: url(\'../../../fonts/GothamBook.otf\'); }</style>';fonts[x2]='<style>@font-face {     font-family: GothamMed;    src: url(\'../../../fonts/GothamMedium.otf\'); }</style>';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['-4px','634px','2561px','756px','auto','auto'],f:[x5],s:[0,xc,i]},{id:'CSE_Airport_Layers_chopped-07',t:g,r:['-1px','-11px','2561px','660px','auto','auto'],f:[x6,im+g7,'0px','0px']},{id:'CSE_Airport_Layers_chopped-09',t:g,r:['-486px','-151px','2473px','882px','auto','auto'],f:[x6,im+g8,'0px','0px']},{id:'CSE_Airport_Layers_chopped-08',t:g,r:['848px','16px','1934px','337px','auto','auto'],f:[x6,im+g9,'0px','0px']},{id:'CSE_Airport_Layers_chopped-10',t:g,r:['548px','190px','841px','344px','auto','auto'],f:[x6,im+g10,'0px','0px']},{id:'CSE_Airport_Layers_chopped-12',t:g,r:['-23px','-107px','2968px','810px','auto','auto'],f:[x6,im+g11,'0px','0px']},{id:'CSE_Airport_Layers_chopped-05',t:g,r:['1167px','-109px','649px','846px','auto','auto'],f:[x6,im+g12,'0px','0px']},{id:'CSE_Airport_Layers_chopped-06',t:g,r:['160px','402px','2739px','365px','auto','auto'],f:[x6,im+g13,'0px','0px']},{id:'CSE_Airport_Layers_chopped-04',t:g,r:['1380px','210px','1497px','1597px','auto','auto'],f:[x6,im+g14,'0px','0px']},{id:'CSE_Airport_Layers_chopped-03',t:g,r:['73px','508px','1023px','1078px','auto','auto'],f:[x6,im+g15,'0px','0px']},{id:'CSE_Airport_Layers_chopped-01',t:g,r:['1360px','1039px','475px','457px','auto','auto'],f:[x6,im+g16,'0px','0px']},{id:'CSE_Airport_Layers_chopped-02',t:g,r:['-3px','93px','1447px','1414px','auto','auto'],f:[x6,im+g17,'0px','0px']},{id:'CSE_Airport_Layers_chopped-11',t:g,r:['1996px','68px','979px','142px','auto','auto'],f:[x6,im+g18,'0px','0px']},{id:'Title_BoxOverlay',t:m,r:['7px','2px','2560px','1367px','auto','auto'],f:[x19],s:[0,"rgb(0, 0, 0)",i]},{id:'CSE_Airport_Layers_Wifi',t:g,r:['1124px','169px','344px','344px','auto','auto'],o:0.65,f:[x6,im+g20,'0px','0px']},{id:'Title_BoxHold',t:m,r:['506px','519px','1580px','115px','auto','auto'],f:[x21],s:[0,"rgb(0, 0, 0)",i],c:[{id:'TitleText',t:x,r:['-32px','24px','1640px','279px','auto','auto'],text:s22,align:"center",n:[x2,x23,"rgba(255,255,255,1.00)",l,i,""]}]},{id:'Title_BodyText',t:x,r:['655px','697px','1314px','548px','auto','auto'],text:s24,align:"left",n:[x1,x25,"rgba(255,255,255,1)",l,i,l]},{id:'Rectangle5',t:m,r:['1046px','955px','500px','1px','auto','auto'],f:[x26],s:[0,"rgb(0, 0, 0)",i]},{id:'beginBtn_icon',t:g,r:['1180px','994px','227px','75px','auto','auto'],cu:['pointer'],f:[x6,im+g27,'0px','0px']},{id:'Rectangle6',t:m,r:['-440px','-170px','3608px','1667px','auto','auto'],f:[x28],s:[0,"rgb(0, 0, 0)",i]},{id:'selectorIcons_atom_icon',t:g,r:['900px','800px','138px','120px','auto','auto'],f:[x6,im+g29,'0px','0px']},{id:'selectorIcons_binoc_icon',t:g,r:['1871px','474px','138px','120px','auto','auto'],f:[x6,im+g30,'0px','0px']},{id:'selectorIcons_comp_icon',t:g,r:['880px','254px','138px','120px','auto','auto'],f:[x6,im+g31,'0px','0px']},{id:'selectorIcons_finder_icon',t:g,r:['1849px','1032px','138px','120px','auto','auto'],f:[x6,im+g32,'0px','0px']},{id:'selectorIcons_unlock_icon',t:g,r:['1291px','611px','138px','120px','auto','auto'],f:[x6,im+g33,'0px','0px']},{id:'selectorIcons_wifi_icon',t:g,r:['1215px','367px','138px','120px','auto','auto'],f:[x6,im+g34,'0px','0px']}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1750,a:y,tt:[]}}}};var S1=symbols[x35];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e37).P(bg,x36,c).P(w,2560).P(h,1367).P(ov,x38);A1.A(e39).P(tp,16).P(lf,848);A1.A(e40).P(tp,-107).P(lf,-23);A1.A(e41).P(tp,508).P(lf,73);A1.A(e42).P(tp,-151).P(lf,-486);A1.A(e43).P(h,457).P(tp,1039).P(lf,1360).P(w,475);A1.A(e44).P(tp,93).P(lf,-3);A1.A(e45).P(tp,210).P(lf,1380);A1.A(e47).P(tp,402).P(lf,160);A1.A(e48).P(tp,190).P(lf,548);A1.A(e49).P(tp,24).P("letter-spacing",1).P(ta,po).P(lf,-32).P(c,x26,c).P(ff,x2).P("word-spacing",0).P(fs,56);A1.A(e50).P(tp,68).P(lf,1996);A1.A(e51).P(tp,-109).P(lf,1167);A1.A(e52).P(lf,1871).P(tp,474).P(zy,0,t,_,"").T(1.429,1,0.145,ql).P(zx,0,t).T(1.429,1,0.145);A1.A(e53).P(bg,x21,c).P(h,115).P(w,1580).P(tp,519).T(1.731,463,0.01,ql).P(o,1,_,_,"").T(0.75,0,0.605).P(lf,506,_,_,p).T(1.731,-2490,0.01);A1.A(e54).P(lf,1849).P(tp,1032).P(zy,0,t,_,"").T(1.429,1,0.145,ql).P(zx,0,t).T(1.429,1,0.145);A1.A(e55).P(tp,955).P(bg,x26,c).P(h,1).P(lf,1046).P(w,500).P(o,1,_,_,"").T(0.75,0,0.605,ql);A1.A(e56).P(tp,-118).T(0.75,-118).T(1.731,-174,0.01,ql).P(bg,x28,c).T(0.75,x28).P(h,1507).T(0.75,1507).P(o,0.5,_,_,"").T(0.75,0,0.989).P(lf,-226,_,_,p).T(0.75,-226).T(1.731,-3222,0.01).P(w,3020).T(0.75,3020);A1.A(e57).P("cursor",x46).P(tp,994).T(1.731,938,0.01,ql).P(o,1,_,_,"").T(0.75,0,0.605).P(lf,1180,_,_,p).T(1.731,-1816,0.01);A1.A(e58).P(lf,1291).P(tp,611).P(zx,0,t,_,"").T(1.5,1,0.145,ql).P(zy,0,t).T(1.5,1,0.145);A1.A(e59).P(h,344).P(w,344).P(tp,169).T(1.731,113,0.01,ql).P(o,0.65,_,_,"").T(0.75,0,0.605).P(lf,1124,_,_,p).T(1.731,-1872,0.01);A1.A(e60).P(bg,x28,c).P(tp,-170).T(0.658,-142,0.092,ql).P(o,1,_,_,"").T(0,0,0.658).P(lf,-440,_,_,p).T(0.658,-3852,0.092);A1.A(e61).P(ta,lf).P("line-height",55).P(ff,x1).P(fs,33).P(tp,697).T(1.731,641,0.01,ql).P(o,1,_,_,"").T(0.75,0,0.605).P(lf,655,_,_,p).T(1.731,-2341,0.01);A1.A(e62).P(lf,900).P(tp,800).P(zy,0,t,_,"").T(1.355,1,0.145,ql).P(zx,0,t).T(1.355,1,0.145);A1.A(e63).P(lf,1215).P(tp,367).P(zx,0,t,_,"").T(1.429,1,0.145,ql).P(zy,0,t).T(1.429,1,0.145);A1.A(e64).P(bg,x5,c).P(tp,634).P(h,756).P(lf,-4).P(w,2561).P("filter.blur",10,"subproperty").T(0.75,0,0.5,ql);A1.A(e65).P(lf,880).P(tp,254).P(zy,0,t,_,"").T(1.355,1,0.145,ql).P(zx,0,t).T(1.355,1,0.145);A1.A(e66).P(tp,-11).P(lf,-1).P("filter.blur",0,"subproperty").T(1.25,0);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-21219353");
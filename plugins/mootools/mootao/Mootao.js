/* Contao Open Source CMS, (C) 2005-2012 Leo Feyer, LGPL license */
Request.Contao=new Class({Extends:Request.JSON,options:{url:window.location.href},initialize:function(a){if(a)try{this.options.url=a.field.getParent("form").getAttribute("action")}catch(b){}this.parent(a)},success:function(a){var b;try{b=this.response.json=JSON.decode(a,this.options.secure)}catch(c){b={content:a}}b==null&&(b={content:""}),b.content!=""&&(b.content=b.content.stripScripts(function(a){b.javascript=a.replace(/<!--|\/\/-->|<!\[CDATA\[\/\/>|<!\]\]>/g,"")}),b.javascript&&this.options.evalScripts&&$exec(b.javascript)),this.onSuccess(b.content,b)}}),Request.Mixed=Request.Contao,Tips.Contao=new Class({Extends:Tips,options:{id:"tip",onShow:function(){this.tip.setStyle("display","block")},onHide:function(){this.tip.setStyle("display","none")},title:"title",text:"",showDelay:1e3,hideDelay:100,className:"tip-wrap",offset:{x:16,y:16},windowPadding:{x:0,y:0},fixed:!0,waiAria:!0,maxwidth:"600px"},position:function(a){this.tip||document.id(this);var b=window.getSize(),c=window.getScroll(),d={x:this.tip.offsetWidth,y:this.tip.offsetHeight},e={x:"left",y:"top"},f={y:!1,x2:!1,y2:!1,x:!1},g={};for(var h in e)g[e[h]]=a.page[h]+this.options.offset[h],g[e[h]]<0&&(f[h]=!0),g[e[h]]+d[h]-c[h]>b[h]-this.options.windowPadding[h]&&(h=="x"&&(g[e[h]]=a.page[h]-this.options.offset[h]-d[h]),f[h+"2"]=!0);var i=this.tip.getElement("div.tip-top");f.x2?(g["margin-left"]="24px",i.setStyles({left:"auto",right:"9px"})):(g["margin-left"]="-9px",i.setStyles({left:"9px",right:"auto"})),this.fireEvent("bound",f),this.tip.setStyles(g)}});
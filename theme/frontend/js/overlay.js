google.maps.__gjsload__('overlay', function(_){var Xw=_.oa("i"),Yw=_.n(),Zw=function(a){a.wh=a.wh||new Yw;return a.wh},$w=function(a){this.Ja=new _.ki(function(){var b=a.wh;if(a.getPanes()){if(a.getProjection()){if(!b.i&&a.onAdd)a.onAdd();b.i=!0;a.draw()}}else{if(b.i)if(a.onRemove)a.onRemove();else a.remove();b.i=!1}},0)},ax=function(a,b){function c(){return _.li(e.Ja)}var d=Zw(a),e=d.Yf;e||(e=d.Yf=new $w(a));_.B(d.Fa||[],_.N.removeListener);var f=d.Ra=d.Ra||new _.Yn,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.rj=d.rj||new Xw(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Fa=[_.N.addListener(a,"panes_changed",c),_.N.addListener(g,"zoom_changed",c),_.N.addListener(g,"offset_changed",c),_.N.addListener(b,"projection_changed",c),_.N.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.lf&&(_.jj(b,"Ox"),_.wo("Ox","-p",a))},
dx=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.Dh()}if(b&&b instanceof _.lf){var d=b.__gm;d.overlayLayer?a.__gmop=new bx(b,a,d.overlayLayer):d.i.then(function(e){e=e.nb;var f=new cx(b,e);e.yc(f);d.overlayLayer=f;dx(a)})}}},bx=function(a,b,c){this.map=a;this.lb=b;this.tn=c;this.Lf=!1;_.jj(this.map,"Ox");_.wo("Ox","-p",this.lb);c.j.push(this);c.i&&ex(this,c.i);c.o.kh()},ex=function(a,b){a.lb.get("projection")!=b&&(a.lb.bindTo("panes",a.map.__gm),a.lb.set("projection",
b))},cx=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.A(Xw,_.O);Xw.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.gd(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};_.A($w,_.O);bx.prototype.draw=function(){this.Lf||(this.Lf=!0,this.lb.onAdd&&this.lb.onAdd());this.lb.draw&&this.lb.draw()};bx.prototype.Dh=function(){_.xo("Ox","-p",this.lb);this.lb.unbindAll();this.lb.set("panes",null);this.lb.set("projection",null);_.ib(this.tn.j,this);this.Lf&&(this.Lf=!1,this.lb.onRemove?this.lb.onRemove():this.lb.remove())};cx.prototype.dispose=_.n();
cx.prototype.Pb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.Ro(this.H,this.o,_.n());k.Pb(a,b,c,d,e,f,g,h);a=_.Da(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,ex(b,k),b.draw()};_.Jf("overlay",{ni:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.lf||a.__gmop)dx(a);else{b=a.getMap();var c=Zw(a),d=c.Gm;c.Gm=b;d&&(c=Zw(a),(d=c.Ra)&&d.unbindAll(),(d=c.rj)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.B(c.Fa,_.N.removeListener),c.Fa=null,c.Yf&&(c.Yf.Ja.Nb(),c.Yf=null),_.xo("Ox","-p",a));b&&ax(a,b)}}},preventMapHitsFrom:function(a){_.Gp(a,{onClick:function(b){return _.Zo(b.event)},Ib:function(b){return _.Wo(b)},Ed:function(b){return _.Xo(b)},
Wb:function(b){return _.Xo(b)},Mb:function(b){return _.Yo(b)}}).Yd(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.he);a.addEventListener("contextmenu",_.he);a.addEventListener("dblclick",_.he);a.addEventListener("mousedown",_.he);a.addEventListener("mousemove",_.he);a.addEventListener("MSPointerDown",_.he);a.addEventListener("pointerdown",_.he);a.addEventListener("touchstart",_.he);a.addEventListener("wheel",_.he)}});});

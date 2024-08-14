// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_commonjsHelpers"],function(hc,Jd){var ic={exports:{}};(function(Ua){(function(T,Fa){Ua.exports&&(Ua.exports=Fa())})(Jd.commonjsGlobal,function(){function T(g,A,z,p){g=Error.call(this,g);Object.setPrototypeOf&&Object.setPrototypeOf(g,T.prototype);g.expected=A;g.found=z;g.location=p;g.name="SyntaxError";return g}function Fa(g,A,z){z=z||" ";if(g.length>A)return g;A-=g.length;z+=z.repeat(A);return g+z.slice(0,A)}(function(g,A){function z(){this.constructor=g}z.prototype=
A.prototype;g.prototype=new z})(T,Error);T.prototype.format=function(g){var A="Error: "+this.message;if(this.location){var z=null,p;for(p=0;p<g.length;p++)if(g[p].source===this.location.source){z=g[p].text.split(/\r\n|\n|\r/g);break}g=this.location.start;p=this.location.source&&"function"===typeof this.location.source.offset?this.location.source.offset(g):g;var F=this.location.source+":"+p.line+":"+p.column;if(z){var U=this.location.end,ca=Fa("",p.line.toString().length," ");z=z[g.line-1];U=(g.line===
U.line?U.column:z.length+1)-g.column||1;A+="\n --\x3e "+F+"\n"+ca+" |\n"+p.line+" | "+z+"\n"+ca+" | "+Fa("",g.column-1," ")+Fa("",U,"^")}else A+="\n at "+F}return A};T.buildMessage=function(g,A){function z(m){return m.charCodeAt(0).toString(16).toUpperCase()}function p(m){return m.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+z(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+
z(E)})}function F(m){return m.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(E){return"\\x0"+z(E)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(E){return"\\x"+z(E)})}function U(m){return ca[m.type](m)}var ca={literal:function(m){return'"'+p(m.text)+'"'},class:function(m){var E=m.parts.map(function(P){return Array.isArray(P)?F(P[0])+"-"+F(P[1]):F(P)});
return"["+(m.inverted?"^":"")+E.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(m){return m.description}};return"Expected "+function(m){m=m.map(U);var E,P;m.sort();if(0<m.length){for(P=E=1;E<m.length;E++)m[E-1]!==m[E]&&(m[P]=m[E],P++);m.length=P}switch(m.length){case 1:return m[0];case 2:return m[0]+" or "+m[1];default:return m.slice(0,-1).join(", ")+", or "+m[m.length-1]}}(g)+" but "+(A?'"'+p(A)+'"':"end of input")+" found."};return{SyntaxError:T,
parse:function(g,A){function z(c,d){d=void 0!==d?d:ca(l,b);throw new T(c,null,null,d);}function p(c,d){return{type:"literal",text:c,ignoreCase:d}}function F(c,d,e){return{type:"class",parts:c,inverted:d,ignoreCase:e}}function U(c){var d=Va[c],e;if(!d){for(e=c-1;!Va[e];)e--;d=Va[e];for(d={line:d.line,column:d.column};e<c;)10===g.charCodeAt(e)?(d.line++,d.column=1):d.column++,e++;Va[c]=d}return d}function ca(c,d,e){e=U(c);var f=U(d);return{source:Kd,start:{offset:c,line:e.line,column:e.column},end:{offset:d,
line:f.line,column:f.column}}}function m(c){b<Q||(b>Q&&(Q=b,Gb=[]),Gb.push(c))}function E(){var c=b;k();var d=B();d!==a?(k(),l=c,c=d):(b=c,c=a);return c}function P(){var c=b;var d=B();if(d!==a){var e=[];var f=b;var n=k();var q=Wa();if(q!==a){var t=k();var u=B();u!==a?f=n=[n,q,t,u]:(b=f,f=a)}else b=f,f=a;for(;f!==a;)e.push(f),f=b,n=k(),q=Wa(),q!==a?(t=k(),u=B(),u!==a?f=n=[n,q,t,u]:(b=f,f=a)):(b=f,f=a);l=c;c={type:"expression-list"};d=[d];for(f=0;f<e.length;f++)d.push(e[f][3]);c.value=d}else b=c,c=
a;return c}function B(){var c=b;var d=Hb();if(d!==a){var e=[];var f=b;var n=k();var q=jc();if(q!==a){var t=k();var u=Hb();u!==a?f=n=[n,q,t,u]:(b=f,f=a)}else b=f,f=a;for(;f!==a;)e.push(f),f=b,n=k(),q=jc(),q!==a?(t=k(),u=Hb(),u!==a?f=n=[n,q,t,u]:(b=f,f=a)):(b=f,f=a);l=c;c=Ga(d,e)}else b=c,c=a;return c}function Hb(){var c=b;var d=Xa();if(d!==a){var e=[];var f=b;var n=k();var q=Ya();if(q!==a){var t=k();var u=Xa();u!==a?f=n=[n,q,t,u]:(b=f,f=a)}else b=f,f=a;for(;f!==a;)e.push(f),f=b,n=k(),q=Ya(),q!==a?
(t=k(),u=Xa(),u!==a?f=n=[n,q,t,u]:(b=f,f=a)):(b=f,f=a);l=c;c=Ga(d,e)}else b=c,c=a;return c}function Xa(){var c=b;var d=Ha();if(d===a){d=b;if(33===g.charCodeAt(b)){var e=Ld;b++}else e=a,0===h&&m(Md);if(e!==a){var f=b;h++;if(61===g.charCodeAt(b)){var n=kc;b++}else n=a,0===h&&m(lc);h--;n===a?f=void 0:(b=f,f=a);f!==a?d=e=[e,f]:(b=d,d=a)}else b=d,d=a}d!==a?(e=k(),f=Xa(),f!==a?(l=c,c={type:"unary-expression",operator:"NOT",expr:f}):(b=c,c=a)):(b=c,c=a);if(c===a){d=b;c=V();if(c!==a){k();e=b;f=[];n=b;var q=
k();var t=mc();if(t!==a){var u=k();var da=V();da!==a?n=q=[q,t,u,da]:(b=n,n=a)}else b=n,n=a;if(n!==a)for(;n!==a;)f.push(n),n=b,q=k(),t=mc(),t!==a?(u=k(),da=V(),da!==a?n=q=[q,t,u,da]:(b=n,n=a)):(b=n,n=a);else f=a;f!==a&&(l=e,f={type:"arithmetic",tail:f});e=f;e===a&&(e=b,f=Ib(),f!==a?(k(),n=G(),n!==a?(k(),n=P(),n!==a?(k(),q=H(),q!==a?(l=e,e={op:f,right:n}):(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=Ib(),f!==a?(k(),n=G(),n!==a?(k(),n=H(),n!==a?(l=e,e={op:f,right:{type:"expression-list",
value:[]}}):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=Ib(),f!==a?(k(),n=Jb(),n!==a?(l=e,e={op:f,right:n}):(b=e,e=a)):(b=e,e=a))),e===a&&(e=b,q=Ha(),q!==a?(k(),f=nc(),f!==a?(k(),n=V(),n!==a?(k(),t=Ya(),t!==a?(k(),q=V(),q!==a?(l=e,e={op:"NOT"+f,right:{type:"expression-list",value:[n,q]}}):(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,q=nc(),q!==a?(k(),f=V(),f!==a?(k(),n=Ya(),n!==a?(k(),t=V(),t!==a?(l=e,e={op:q,right:{type:"expression-list",value:[f,t]}}):(b=e,e=a)):(b=e,e=a)):
(b=e,e=a)):(b=e,e=a)),e===a&&(e=b,f=oc(),f!==a?(k(),n=Ha(),n!==a?(k(),n=V(),n!==a?(l=e,e={op:f+"NOT",right:n}):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=oc(),f!==a?(k(),n=V(),n!==a?(l=e,e={op:f,right:n}):(b=e,e=a)):(b=e,e=a)),e===a&&(e=b,f=pc(),f!==a?(k(),n=ea(),n!==a?(k(),q=b,g.substr(b,6).toLowerCase()===Nd?(t=g.substr(b,6),b+=6):(t=a,0===h&&m(Od)),t!==a?(t=b,h++,u=r(),h--,u===a?t=void 0:(b=t,t=a),t!==a?(l=q,q="ESCAPE"):(b=q,q=a)):(b=q,q=a),q!==a?(k(),q=Kb(),q!==a?(l=e,e={op:f,right:n,escape:q.value}):
(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=pc(),f!==a?(k(),n=ea(),n!==a?(l=e,e={op:f,right:n,escape:""}):(b=e,e=a)):(b=e,e=a))))));e===a&&(e=null);l=d;d=e;""==d||void 0==d||null==d?d=c:(e=null,d=e="arithmetic"==d.type?Ga(c,d.tail):qc(d.op,c,d.right,d.escape))}else b=d,d=a;c=d}return c}function mc(){if(g.substr(b,2)===rc){var c=rc;b+=2}else c=a,0===h&&m(Pd);c===a&&(62===g.charCodeAt(b)?(c=Qd,b++):(c=a,0===h&&m(Rd)),c===a&&(g.substr(b,2)===sc?(c=sc,b+=2):(c=a,0===h&&m(Sd)),c===a&&(g.substr(b,
2)===tc?(c=tc,b+=2):(c=a,0===h&&m(Td)),c===a&&(60===g.charCodeAt(b)?(c=Ud,b++):(c=a,0===h&&m(Vd)),c===a&&(61===g.charCodeAt(b)?(c=kc,b++):(c=a,0===h&&m(lc)),c===a&&(g.substr(b,2)===uc?(c=uc,b+=2):(c=a,0===h&&m(Wd))))))));return c}function pc(){var c;var d=c=b;var e=Ha();if(e!==a){var f=k();var n=vc();n!==a?d=e=[e,f,n]:(b=d,d=a)}else b=d,d=a;d!==a&&(l=c,d=d[0]+" "+d[2]);c=d;c===a&&(c=vc());return c}function Ib(){var c;var d=c=b;var e=Ha();if(e!==a){var f=k();var n=Lb();n!==a?d=e=[e,f,n]:(b=d,d=a)}else b=
d,d=a;d!==a&&(l=c,d=d[0]+" "+d[2]);c=d;c===a&&(c=Lb());return c}function V(){var c=b;var d=Mb();if(d!==a){var e=[];var f=b;var n=k();var q=wc();if(q!==a){var t=k();var u=Mb();u!==a?f=n=[n,q,t,u]:(b=f,f=a)}else b=f,f=a;for(;f!==a;)e.push(f),f=b,n=k(),q=wc(),q!==a?(t=k(),u=Mb(),u!==a?f=n=[n,q,t,u]:(b=f,f=a)):(b=f,f=a);l=c;c=Ga(d,e)}else b=c,c=a;return c}function wc(){if(43===g.charCodeAt(b)){var c=Nb;b++}else c=a,0===h&&m(Ob);c===a&&(45===g.charCodeAt(b)?(c=Pb,b++):(c=a,0===h&&m(Qb)),c===a&&(g.substr(b,
2)===xc?(c=xc,b+=2):(c=a,0===h&&m(Xd))));return c}function Mb(){var c=b;var d=Rb();if(d!==a){var e=[];var f=b;var n=k();var q=yc();if(q!==a){var t=k();var u=Rb();u!==a?f=n=[n,q,t,u]:(b=f,f=a)}else b=f,f=a;for(;f!==a;)e.push(f),f=b,n=k(),q=yc(),q!==a?(t=k(),u=Rb(),u!==a?f=n=[n,q,t,u]:(b=f,f=a)):(b=f,f=a);l=c;c=Ga(d,e)}else b=c,c=a;return c}function yc(){if(42===g.charCodeAt(b)){var c=Yd;b++}else c=a,0===h&&m(Zd);c===a&&(47===g.charCodeAt(b)?(c=$d,b++):(c=a,0===h&&m(ae)));return c}function Rb(){var c=
Kb();if(c===a){var d=b;var e=b;var f=Za();if(f!==a){var n=zc();if(n!==a){var q=Ac();q!==a?(l=e,e=parseFloat(f+n+q)):(b=e,e=a)}else b=e,e=a}else b=e,e=a;e===a&&(e=b,f=Za(),f!==a?(n=zc(),n!==a?(l=e,e=parseFloat(f+n)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=Za(),f!==a?(n=Ac(),n!==a?(l=e,e=parseFloat(f+n)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=Za(),f!==a&&(l=e,f=parseFloat(f)),e=f)));var t=e;if(t!==a){var u=b;h++;var da=Sb();h--;da===a?u=void 0:(b=u,u=a);u!==a?(l=d,d={type:"number",value:t}):(b=d,d=a)}else b=
d,d=a;c=d;if(c===a){var fa=b;var Ca=b;if(g.substr(b,4).toLowerCase()===be){var $a=g.substr(b,4);b+=4}else $a=a,0===h&&m(ce);if($a!==a){var Ia=b;h++;var de=r();h--;de===a?Ia=void 0:(b=Ia,Ia=a);Ia!==a?Ca=$a=[$a,Ia]:(b=Ca,Ca=a)}else b=Ca,Ca=a;var ha=Ca;ha!==a&&(l=fa,ha={type:"boolean",value:!0});fa=ha;if(fa===a){fa=b;var Da=b;if(g.substr(b,5).toLowerCase()===ee){var ab=g.substr(b,5);b+=5}else ab=a,0===h&&m(fe);if(ab!==a){var Ja=b;h++;var ge=r();h--;ge===a?Ja=void 0:(b=Ja,Ja=a);Ja!==a?Da=ab=[ab,Ja]:(b=
Da,Da=a)}else b=Da,Da=a;ha=Da;ha!==a&&(l=fa,ha={type:"boolean",value:!1});fa=ha}c=fa;if(c===a){var he=b;var Ea=b;if(g.substr(b,4).toLowerCase()===ie){var bb=g.substr(b,4);b+=4}else bb=a,0===h&&m(je);if(bb!==a){var Ka=b;h++;var ke=r();h--;ke===a?Ka=void 0:(b=Ka,Ka=a);Ka!==a?Ea=bb=[bb,Ka]:(b=Ea,Ea=a)}else b=Ea,Ea=a;var Tb=Ea;Tb!==a&&(l=he,Tb={type:"null",value:null});c=Tb;if(c===a){var ia=b;if(Bc()!==a){k();var cb=ea();cb!==a?(l=ia,"string"===cb.type&&!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(cb.value)&&
z("Date literal is invalid"),ia={type:"date",value:cb.value}):(b=ia,ia=a)}else b=ia,ia=a;c=ia;if(c===a){var ja=b;if(Cc()!==a){k();var db=ea();db!==a?(l=ja,"string"===db.type&&!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(db.value)&&
z("Timestamp literal is invalid"),ja={type:"timestamp",value:db.value}):(b=ja,ja=a)}else b=ja,ja=a;c=ja;if(c===a){var C=b;var Ub=Dc();if(Ub!==a){k();if(45===g.charCodeAt(b)){var W=Pb;b++}else W=a,0===h&&m(Qb);W===a&&(43===g.charCodeAt(b)?(W=Nb,b++):(W=a,0===h&&m(Ob)));if(W!==a){k();var La=ea();if(La!==a){k();var Fc=Ec();Fc!==a?(l=C,C={type:"interval",value:La,qualifier:Fc,op:W}):(b=C,C=a)}else b=C,C=a}else b=C,C=a}else b=C,C=a;C===a&&(C=b,Ub=Dc(),Ub!==a?(k(),W=ea(),W!==a?(k(),La=Ec(),La!==a?(l=C,
C={type:"interval",value:W,qualifier:La,op:""}):(b=C,C=a)):(b=C,C=a)):(b=C,C=a));c=C;if(c===a){var ka=b;if(Gc()!==a){k();var eb=ea();eb!==a?(l=ka,"string"===eb.type&&!0!==/^(\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/.test(eb.value)&&z("Time literal is invalid"),ka={type:"time",value:eb.value}):(b=ka,ka=a)}else b=ka,ka=a;c=ka}}}}}}}var w=c;if(w===a){var J=b;var la=b;if(g.substr(b,7).toLowerCase()===le){var Hc=g.substr(b,7);b+=7}else Hc=a,0===h&&m(me);
if(Hc!==a){var fb=b;h++;var ne=r();h--;ne===a?fb=void 0:(b=fb,fb=a);fb!==a?(l=la,la="EXTRACT"):(b=la,la=a)}else b=la,la=a;if(la!==a){k();var oe=G();if(oe!==a){k();var K=Ic();if(K===a&&(K=Jc(),K===a&&(K=Kc(),K===a&&(K=Lc(),K===a&&(K=Mc(),K===a&&(K=ma(),K===a)))))){var na=b;if(g.substr(b,13).toLowerCase()===pe){var Nc=g.substr(b,13);b+=13}else Nc=a,0===h&&m(qe);if(Nc!==a){var gb=b;h++;var re=r();h--;re===a?gb=void 0:(b=gb,gb=a);gb!==a?(l=na,na="TIMEZONE_HOUR"):(b=na,na=a)}else b=na,na=a;K=na;if(K===
a){var oa=b;if(g.substr(b,15).toLowerCase()===se){var Oc=g.substr(b,15);b+=15}else Oc=a,0===h&&m(te);if(Oc!==a){var hb=b;h++;var ue=r();h--;ue===a?hb=void 0:(b=hb,hb=a);hb!==a?(l=oa,oa="TIMEZONE_MINUTE"):(b=oa,oa=a)}else b=oa,oa=a;K=oa}}var Pc=K;if(Pc!==a){k();var ve=Vb();if(ve!==a){k();var Qc=B();if(Qc!==a){k();var we=H();we!==a?(l=J,J={type:"function",name:"extract",args:{type:"expression-list",value:[{type:"string",value:Pc},Qc]}}):(b=J,J=a)}else b=J,J=a}else b=J,J=a}else b=J,J=a}else b=J,J=a}else b=
J,J=a;w=J;if(w===a){var L=b;var pa=b;if(g.substr(b,9).toLowerCase()===xe){var Rc=g.substr(b,9);b+=9}else Rc=a,0===h&&m(ye);if(Rc!==a){var ib=b;h++;var ze=r();h--;ze===a?ib=void 0:(b=ib,ib=a);ib!==a?(l=pa,pa="SUBSTRING"):(b=pa,pa=a)}else b=pa,pa=a;if(pa!==a){k();var Ae=G();if(Ae!==a){k();var Wb=B();if(Wb!==a){k();var Be=Vb();if(Be!==a){k();var Xb=B();if(Xb!==a){k();var X=b;var qa=b;if(g.substr(b,3).toLowerCase()===Ce){var Sc=g.substr(b,3);b+=3}else Sc=a,0===h&&m(De);if(Sc!==a){var jb=b;h++;var Ee=
r();h--;Ee===a?jb=void 0:(b=jb,jb=a);jb!==a?(l=qa,qa="FOR"):(b=qa,qa=a)}else b=qa,qa=a;var Ma=qa;if(Ma!==a){var Fe=k();var Tc=B();if(Tc!==a){var Ge=k();X=Ma=[Ma,Fe,Tc,Ge]}else b=X,X=a}else b=X,X=a;X===a&&(X=null);Ma=H();Ma!==a?(l=L,L={type:"function",name:"substring",args:{type:"expression-list",value:X?[Wb,Xb,X[2]]:[Wb,Xb]}}):(b=L,L=a)}else b=L,L=a}else b=L,L=a}else b=L,L=a}else b=L,L=a}else b=L,L=a;w=L;if(w===a){var y=b;var Yb=Uc();if(Yb!==a){k();var Zb=G();if(Zb!==a){k();var Y=Vc();Y===a&&(Y=null);
k();var Na=B();if(Na!==a){k();var $b=Vb();if($b!==a){k();var Wc=B();if(Wc!==a){k();var He=H();He!==a?(l=y,y={type:"function",name:"trim",args:{type:"expression-list",value:[{type:"string",value:null==Y?"BOTH":Y},Na,Wc]}}):(b=y,y=a)}else b=y,y=a}else b=y,y=a}else b=y,y=a}else b=y,y=a}else b=y,y=a;y===a&&(y=b,Yb=Uc(),Yb!==a?(k(),Zb=G(),Zb!==a?(k(),Y=Vc(),Y===a&&(Y=null),k(),Na=B(),Na!==a?(k(),$b=H(),$b!==a?(l=y,y={type:"function",name:"trim",args:{type:"expression-list",value:[{type:"string",value:null==
Y?"BOTH":Y},Na]}}):(b=y,y=a)):(b=y,y=a)):(b=y,y=a)):(b=y,y=a));w=y;if(w===a){var M=b;var ra=b;if(g.substr(b,8).toLowerCase()===Ie){var Xc=g.substr(b,8);b+=8}else Xc=a,0===h&&m(Je);if(Xc!==a){var kb=b;h++;var Ke=r();h--;Ke===a?kb=void 0:(b=kb,kb=a);kb!==a?(l=ra,ra="POSITION"):(b=ra,ra=a)}else b=ra,ra=a;if(ra!==a){k();var Le=G();if(Le!==a){k();var Yc=B();if(Yc!==a){k();var Me=Lb();if(Me!==a){k();var Zc=B();if(Zc!==a){k();var Ne=H();Ne!==a?(l=M,M={type:"function",name:"position",args:{type:"expression-list",
value:[Yc,Zc]}}):(b=M,M=a)}else b=M,M=a}else b=M,M=a}else b=M,M=a}else b=M,M=a}else b=M,M=a;w=M;if(w===a){var N=b;var sa=b;if(g.substr(b,4).toLowerCase()===Oe){var $c=g.substr(b,4);b+=4}else $c=a,0===h&&m(Pe);if($c!==a){var lb=b;h++;var Qe=r();h--;Qe===a?lb=void 0:(b=lb,lb=a);lb!==a?(l=sa,sa="CAST"):(b=sa,sa=a)}else b=sa,sa=a;if(sa!==a){k();var Re=G();if(Re!==a){k();var ad=B();if(ad!==a){k();var ta=b;if(g.substr(b,2).toLowerCase()===Se){var bd=g.substr(b,2);b+=2}else bd=a,0===h&&m(Te);if(bd!==a){var mb=
b;h++;var Ue=r();h--;Ue===a?mb=void 0:(b=mb,mb=a);mb!==a?(l=ta,ta="AS"):(b=ta,ta=a)}else b=ta,ta=a;var Ve=ta;if(Ve!==a){k();var v=b;var ua=b;if(g.substr(b,7).toLowerCase()===We){var cd=g.substr(b,7);b+=7}else cd=a,0===h&&m(Xe);if(cd!==a){var nb=b;h++;var Ye=r();h--;Ye===a?nb=void 0:(b=nb,nb=a);nb!==a?(l=ua,ua="INTEGER"):(b=ua,ua=a)}else b=ua,ua=a;var x=ua;x!==a&&(l=v,x={type:"data-type",value:{type:"integer"}});v=x;if(v===a){v=b;var va=b;if(g.substr(b,8).toLowerCase()===Ze){var dd=g.substr(b,8);b+=
8}else dd=a,0===h&&m($e);if(dd!==a){var ob=b;h++;var af=r();h--;af===a?ob=void 0:(b=ob,ob=a);ob!==a?(l=va,va="SMALLINT"):(b=va,va=a)}else b=va,va=a;x=va;x!==a&&(l=v,x={type:"data-type",value:{type:"smallint"}});v=x;if(v===a){v=b;var wa=b;if(g.substr(b,5).toLowerCase()===bf){var ed=g.substr(b,5);b+=5}else ed=a,0===h&&m(cf);if(ed!==a){var pb=b;h++;var df=r();h--;df===a?pb=void 0:(b=pb,pb=a);pb!==a?(l=wa,wa="FLOAT"):(b=wa,wa=a)}else b=wa,wa=a;x=wa;x!==a&&(l=v,x={type:"data-type",value:{type:"float"}});
v=x;if(v===a){v=b;var xa=b;if(g.substr(b,4).toLowerCase()===ef){var fd=g.substr(b,4);b+=4}else fd=a,0===h&&m(ff);if(fd!==a){var qb=b;h++;var gf=r();h--;gf===a?qb=void 0:(b=qb,qb=a);qb!==a?(l=xa,xa="REAL"):(b=xa,xa=a)}else b=xa,xa=a;x=xa;x!==a&&(l=v,x={type:"data-type",value:{type:"real"}});v=x;if(v===a&&(v=b,x=Bc(),x!==a&&(l=v,x={type:"data-type",value:{type:"date"}}),v=x,v===a&&(v=b,x=Cc(),x!==a&&(l=v,x={type:"data-type",value:{type:"timestamp"}}),v=x,v===a&&(v=b,x=Gc(),x!==a&&(l=v,x={type:"data-type",
value:{type:"time"}}),v=x,v===a)))){v=b;var ya=b;if(g.substr(b,7).toLowerCase()===hf){var gd=g.substr(b,7);b+=7}else gd=a,0===h&&m(jf);if(gd!==a){var rb=b;h++;var kf=r();h--;kf===a?rb=void 0:(b=rb,rb=a);rb!==a?(l=ya,ya="VARCHAR"):(b=ya,ya=a)}else b=ya,ya=a;x=ya;if(x!==a){k();var lf=G();if(lf!==a){k();var hd=za();if(hd!==a){k();var mf=H();mf!==a?(l=v,v={type:"data-type",value:{type:"varchar",size:parseInt(hd)}}):(b=v,v=a)}else b=v,v=a}else b=v,v=a}else b=v,v=a}}}}var id=v;if(id!==a){k();var nf=H();
nf!==a?(l=N,N={type:"function",name:"cast",args:{type:"expression-list",value:[ad,id]}}):(b=N,N=a)}else b=N,N=a}else b=N,N=a}else b=N,N=a}else b=N,N=a}else b=N,N=a;w=N;if(w===a){var Z=b;var O=b;var Oa=jd();Oa!==a&&(l=O);O=Oa;if(O===a)if(O=b,96===g.charCodeAt(b)?(Oa=kd,b++):(Oa=a,0===h&&m(ld)),Oa!==a){var sb=[];if(md.test(g.charAt(b))){var aa=g.charAt(b);b++}else aa=a,0===h&&m(nd);if(aa!==a)for(;aa!==a;)sb.push(aa),md.test(g.charAt(b))?(aa=g.charAt(b),b++):(aa=a,0===h&&m(nd));else sb=a;sb!==a?(96===
g.charCodeAt(b)?(aa=kd,b++):(aa=a,0===h&&m(ld)),aa!==a?(l=O,O=sb.join("")):(b=O,O=a)):(b=O,O=a)}else b=O,O=a;var od=O;if(od!==a){k();var of=G();if(of!==a){k();var tb=P();tb===a&&(tb=null);k();var pf=H();pf!==a?(l=Z,Z={type:"function",name:od,args:tb?tb:{type:"expression-list",value:[]}}):(b=Z,Z=a)}else b=Z,Z=a}else b=Z,Z=a;w=Z;if(w===a){var R;var D=b;var ac=ub();if(ac!==a){k();var Pa=B();if(Pa!==a){k();var Qa=[];for(R=vb();R!==a;)Qa.push(R),R=vb();R=k();var xb=wb();xb!==a?(l=D,D={type:"case-expression",
format:"simple",operand:Pa,clauses:Qa,else:null}):(b=D,D=a)}else b=D,D=a}else b=D,D=a;if(D===a)if(D=b,ac=ub(),ac!==a)if(k(),Pa=B(),Pa!==a){k();Qa=[];for(R=vb();R!==a;)Qa.push(R),R=vb();R=k();xb=pd();if(xb!==a){k();var qf=wb();qf!==a?(l=D,D={type:"case-expression",format:"simple",operand:Pa,clauses:Qa,else:xb.value}):(b=D,D=a)}else b=D,D=a}else b=D,D=a;else b=D,D=a;var bc=D;if(bc===a){var S;var I=b;var cc=ub();if(cc!==a){k();var Ra=[];for(S=yb();S!==a;)Ra.push(S),S=yb();S=k();var zb=wb();zb!==a?(l=
I,I={type:"case-expression",format:"searched",clauses:Ra,else:null}):(b=I,I=a)}else b=I,I=a;if(I===a)if(I=b,cc=ub(),cc!==a){k();Ra=[];for(S=yb();S!==a;)Ra.push(S),S=yb();S=k();zb=pd();if(zb!==a){k();var rf=wb();rf!==a?(l=I,I={type:"case-expression",format:"searched",clauses:Ra,else:zb.value}):(b=I,I=a)}else b=I,I=a}else b=I,I=a;bc=I}w=bc;if(w===a){var Aa=b;var sf=b;var Ab;var Sa=b;var qd=Sb();if(qd!==a){var rd=[];for(Ab=sd();Ab!==a;)rd.push(Ab),Ab=sd();l=Sa;Sa=qd+rd.join("")}else b=Sa,Sa=a;var td=
Sa;td!==a&&(l=sf);var ba=td;if(ba!==a){l=Aa;var dc=ba;ba=/^CURRENT_DATE$/i.test(dc)?{type:"current-time",mode:"date"}:/^CURRENT_TIMESTAMP$/i.test(dc)?{type:"current-time",mode:"timestamp"}:{type:"column-reference",table:"",column:dc}}Aa=ba;if(Aa===a){Aa=b;var Ba=b;if(Bb()!==a){var Cb;var tf=b;var ec=[];for(Cb=ud();Cb!==a;)ec.push(Cb),Cb=ud();l=tf;var uf=ec=ec.join("");var vf=Bb();vf!==a?(l=Ba,Ba=uf):(b=Ba,Ba=a)}else b=Ba,Ba=a;ba=Ba;ba!==a&&(l=Aa,ba={type:"column-reference",table:"",column:ba,delimited:!0});
Aa=ba}w=Aa;if(w===a&&(w=Jb(),w===a)){w=b;var wf=G();if(wf!==a){k();var fc=B();if(fc!==a){k();var xf=H();xf!==a?(l=w,fc.paren=!0,w=fc):(b=w,w=a)}else b=w,w=a}else b=w,w=a}}}}}}}}}return w}function jd(){var c;var d=b;var e=Sb();if(e!==a){var f=[];for(c=r();c!==a;)f.push(c),c=r();l=d;d=e+f.join("")}else b=d,d=a;return d}function Sb(){if(yf.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(zf);return c}function r(){if(Af.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(Bf);return c}
function sd(){if(vd.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(wd);return c}function ud(){if(vd.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(wd);if(c===a)if(c=b,Bb()!==a){var d=Bb();d!==a?(l=c,c='"'):(b=c,c=a)}else b=c,c=a;return c}function Bb(){if(Cf.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(Df);return c}function Jb(){var c;var d=c=b;if(64===g.charCodeAt(b)){var e=Ef;b++}else e=a,0===h&&m(Ff);if(e!==a){var f=jd();f!==a?d=e=[e,f]:(b=d,d=a)}else b=d,d=
a;d!==a&&(l=c,d={type:"parameter",value:d[1]});return d}function Vc(){var c=b;if(g.substr(b,7).toLowerCase()===Gf){var d=g.substr(b,7);b+=7}else d=a,0===h&&m(Hf);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="LEADING"):(b=c,c=a)}else b=c,c=a;c===a&&(c=b,g.substr(b,8).toLowerCase()===If?(d=g.substr(b,8),b+=8):(d=a,0===h&&m(Jf)),d!==a?(d=b,h++,e=r(),h--,e===a?d=void 0:(b=d,d=a),d!==a?(l=c,c="TRAILING"):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,g.substr(b,4).toLowerCase()===Kf?(d=g.substr(b,
4),b+=4):(d=a,0===h&&m(Lf)),d!==a?(d=b,h++,e=r(),h--,e===a?d=void 0:(b=d,d=a),d!==a?(l=c,c="BOTH"):(b=c,c=a)):(b=c,c=a)));return c}function Ec(){var c=b;var d=b;var e=Ta();if(e!==a){k();var f=G();if(f!==a)if(k(),f=Db(),f!==a){k();var n=H();n!==a?(l=d,d={type:"interval-period",period:e.value,precision:f,secondary:null}):(b=d,d=a)}else b=d,d=a;else b=d,d=a}else b=d,d=a;d===a&&(d=b,e=Ta(),e!==a&&(l=d,e={type:"interval-period",period:e.value,precision:null,secondary:null}),d=e);if(d!==a)if(k(),e=b,g.substr(b,
2).toLowerCase()===Mf?(f=g.substr(b,2),b+=2):(f=a,0===h&&m(Nf)),f!==a?(f=b,h++,n=r(),h--,n===a?f=void 0:(b=f,f=a),f!==a?(l=e,e="TO"):(b=e,e=a)):(b=e,e=a),e!==a){k();e=b;f=Ta();f!==a&&(l=e,f={type:"interval-period",period:f.value,precision:null,secondary:null});e=f;if(e===a){e=b;f=ma();if(f!==a)if(k(),f=G(),f!==a)if(k(),f=Db(),f!==a)if(k(),n=Wa(),n!==a)if(k(),n=Eb(),n!==a){k();var q=H();q!==a?(l=e,e={type:"interval-period",period:"second",precision:f,secondary:n}):(b=e,e=a)}else b=e,e=a;else b=e,e=
a;else b=e,e=a;else b=e,e=a;else b=e,e=a;e===a&&(e=b,f=ma(),f!==a?(k(),f=G(),f!==a?(k(),f=Db(),f!==a?(k(),n=H(),n!==a?(l=e,e={type:"interval-period",period:"second",precision:f,secondary:null}):(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,f=ma(),f!==a&&(l=e,f={type:"interval-period",period:"second",precision:null,secondary:null}),e=f))}e!==a?(l=c,c={type:"interval-qualifier",start:d,end:e}):(b=c,c=a)}else b=c,c=a;else b=c,c=a;c===a&&(c=b,e=Ta(),e!==a?(k(),d=G(),d!==a?(k(),d=Eb(),d!==a?(k(),
f=H(),f!==a?(l=c,c={type:"interval-period",period:e.value,precision:d,secondary:null}):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,e=Ta(),e!==a&&(l=c,e={type:"interval-period",period:e.value,precision:null,secondary:null}),c=e,c===a&&(c=b,e=ma(),e!==a?(k(),d=G(),d!==a?(k(),d=Db(),d!==a?(k(),f=Wa(),f!==a?(k(),e=Eb(),e!==a?(k(),f=H(),f!==a?(l=c,c={type:"interval-period",period:"second",precision:d,secondary:e}):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,
e=ma(),e!==a?(k(),d=G(),d!==a?(k(),d=Eb(),d!==a?(k(),f=H(),f!==a?(l=c,c={type:"interval-period",period:"second",precision:d,secondary:null}):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,e=ma(),e!==a&&(l=c,e={type:"interval-period",period:"second",precision:null,secondary:null}),c=e)))));return c}function Ta(){var c=b;var d=Kc();d!==a&&(l=c,d={type:"string",value:"day"});c=d;c===a&&(c=b,d=Lc(),d!==a&&(l=c,d={type:"string",value:"hour"}),c=d,c===a&&(c=b,d=Mc(),d!==a&&(l=c,d={type:"string",
value:"minute"}),c=d,c===a&&(c=b,d=Jc(),d!==a&&(l=c,d={type:"string",value:"month"}),c=d,c===a&&(c=b,d=Ic(),d!==a&&(l=c,d={type:"string",value:"year"}),c=d))));return c}function Eb(){var c=b;var d=za();d!==a&&(l=c,d=parseFloat(d));return d}function Db(){var c=b;var d=za();d!==a&&(l=c,d=parseFloat(d));return d}function ea(){var c=Kb();c===a&&(c=Jb());return c}function Kb(){var c=b;if(39===g.charCodeAt(b)){var d=xd;b++}else d=a,0===h&&m(yd);d===a&&(g.substr(b,2)===zd?(d=zd,b+=2):(d=a,0===h&&m(Of)));
if(d!==a){d=[];var e=b;if(g.substr(b,2)===Fb){var f=Fb;b+=2}else f=a,0===h&&m(Ad);f!==a&&(l=e,f="'");e=f;e===a&&(Bd.test(g.charAt(b))?(e=g.charAt(b),b++):(e=a,0===h&&m(Cd)));for(;e!==a;)d.push(e),e=b,g.substr(b,2)===Fb?(f=Fb,b+=2):(f=a,0===h&&m(Ad)),f!==a&&(l=e,f="'"),e=f,e===a&&(Bd.test(g.charAt(b))?(e=g.charAt(b),b++):(e=a,0===h&&m(Cd)));39===g.charCodeAt(b)?(e=xd,b++):(e=a,0===h&&m(yd));e!==a?(l=c,c={type:"string",value:d.join("")}):(b=c,c=a)}else b=c,c=a;return c}function yb(){var c=b;if(Dd()!==
a){k();var d=B();if(d!==a){k();var e=Ed();e!==a?(k(),e=B(),e!==a?(l=c,c={type:"when-clause",operand:d,value:e}):(b=c,c=a)):(b=c,c=a)}else b=c,c=a}else b=c,c=a;return c}function vb(){var c=b;if(Dd()!==a){k();var d=B();if(d!==a){k();var e=Ed();e!==a?(k(),e=B(),e!==a?(l=c,c={type:"when-clause",operand:d,value:e}):(b=c,c=a)):(b=c,c=a)}else b=c,c=a}else b=c,c=a;return c}function pd(){var c=b;var d=b;if(g.substr(b,4).toLowerCase()===Pf){var e=g.substr(b,4);b+=4}else e=a,0===h&&m(Qf);if(e!==a){e=b;h++;var f=
r();h--;f===a?e=void 0:(b=e,e=a);e!==a?(l=d,d="ELSE"):(b=d,d=a)}else b=d,d=a;d!==a?(k(),d=B(),d!==a?(l=c,c={type:"else-clause",value:d}):(b=c,c=a)):(b=c,c=a);return c}function Za(){var c=za();if(c===a){c=b;if(45===g.charCodeAt(b)){var d=Pb;b++}else d=a,0===h&&m(Qb);d===a&&(43===g.charCodeAt(b)?(d=Nb,b++):(d=a,0===h&&m(Ob)));if(d!==a){var e=za();e!==a?(l=c,c=d[0]+e):(b=c,c=a)}else b=c,c=a}return c}function zc(){var c=b;if(46===g.charCodeAt(b)){var d=Rf;b++}else d=a,0===h&&m(Sf);d!==a?(d=za(),d===a&&
(d=null),l=c,c="."+(null!=d?d:"")):(b=c,c=a);return c}function Ac(){var c;var d=c=b;if(Tf.test(g.charAt(b))){var e=g.charAt(b);b++}else e=a,0===h&&m(Uf);e!==a?(Vf.test(g.charAt(b))?(e=g.charAt(b),b++):(e=a,0===h&&m(Wf)),e===a&&(e=null),l=d,d="e"+(null===e?"":e)):(b=d,d=a);d!==a?(e=za(),e!==a?(l=c,c=d+e):(b=c,c=a)):(b=c,c=a);return c}function za(){var c=b;var d=[];var e=Fd();if(e!==a)for(;e!==a;)d.push(e),e=Fd();else d=a;d!==a&&(l=c,d=d.join(""));return d}function Fd(){if(Xf.test(g.charAt(b))){var c=
g.charAt(b);b++}else c=a,0===h&&m(Yf);return c}function Lb(){var c=b;if(g.substr(b,2).toLowerCase()===Zf){var d=g.substr(b,2);b+=2}else d=a,0===h&&m($f);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="IN"):(b=c,c=a)}else b=c,c=a;return c}function oc(){var c=b;if(g.substr(b,2).toLowerCase()===ag){var d=g.substr(b,2);b+=2}else d=a,0===h&&m(bg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="IS"):(b=c,c=a)}else b=c,c=a;return c}function vc(){var c=b;if(g.substr(b,
4).toLowerCase()===cg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(dg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="LIKE"):(b=c,c=a)}else b=c,c=a;return c}function Ha(){var c=b;if(g.substr(b,3).toLowerCase()===eg){var d=g.substr(b,3);b+=3}else d=a,0===h&&m(fg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="NOT"):(b=c,c=a)}else b=c,c=a;return c}function Ya(){var c=b;if(g.substr(b,3).toLowerCase()===gg){var d=g.substr(b,3);b+=3}else d=a,0===h&&m(hg);
if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="AND"):(b=c,c=a)}else b=c,c=a;return c}function jc(){var c=b;if(g.substr(b,2).toLowerCase()===ig){var d=g.substr(b,2);b+=2}else d=a,0===h&&m(jg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="OR"):(b=c,c=a)}else b=c,c=a;return c}function nc(){var c=b;if(g.substr(b,7).toLowerCase()===kg){var d=g.substr(b,7);b+=7}else d=a,0===h&&m(lg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="BETWEEN"):
(b=c,c=a)}else b=c,c=a;return c}function Vb(){var c=b;if(g.substr(b,4).toLowerCase()===mg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(ng);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="FROM"):(b=c,c=a)}else b=c,c=a;return c}function Uc(){var c=b;if(g.substr(b,4).toLowerCase()===og){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(pg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="TRIM"):(b=c,c=a)}else b=c,c=a;return c}function Cc(){var c=b;if(g.substr(b,9).toLowerCase()===
qg){var d=g.substr(b,9);b+=9}else d=a,0===h&&m(rg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="TIMESTAMP"):(b=c,c=a)}else b=c,c=a;return c}function Bc(){var c=b;if(g.substr(b,4).toLowerCase()===sg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(tg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="DATE"):(b=c,c=a)}else b=c,c=a;return c}function Gc(){var c=b;if(g.substr(b,4).toLowerCase()===ug){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(vg);if(d!==a){d=b;
h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="TIME"):(b=c,c=a)}else b=c,c=a;return c}function Dc(){var c=b;if(g.substr(b,8).toLowerCase()===wg){var d=g.substr(b,8);b+=8}else d=a,0===h&&m(xg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="INTERVAL"):(b=c,c=a)}else b=c,c=a;return c}function Ic(){var c=b;if(g.substr(b,4).toLowerCase()===yg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(zg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="YEAR"):(b=
c,c=a)}else b=c,c=a;return c}function Jc(){var c=b;if(g.substr(b,5).toLowerCase()===Ag){var d=g.substr(b,5);b+=5}else d=a,0===h&&m(Bg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="MONTH"):(b=c,c=a)}else b=c,c=a;return c}function Kc(){var c=b;if(g.substr(b,3).toLowerCase()===Cg){var d=g.substr(b,3);b+=3}else d=a,0===h&&m(Dg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="DAY"):(b=c,c=a)}else b=c,c=a;return c}function Lc(){var c=b;if(g.substr(b,4).toLowerCase()===
Eg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(Fg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="HOUR"):(b=c,c=a)}else b=c,c=a;return c}function Mc(){var c=b;if(g.substr(b,6).toLowerCase()===Gg){var d=g.substr(b,6);b+=6}else d=a,0===h&&m(Hg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="MINUTE"):(b=c,c=a)}else b=c,c=a;return c}function ma(){var c=b;if(g.substr(b,6).toLowerCase()===Ig){var d=g.substr(b,6);b+=6}else d=a,0===h&&m(Jg);if(d!==a){d=b;h++;
var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="SECOND"):(b=c,c=a)}else b=c,c=a;return c}function ub(){var c=b;if(g.substr(b,4).toLowerCase()===Kg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(Lg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="CASE"):(b=c,c=a)}else b=c,c=a;return c}function wb(){var c=b;if(g.substr(b,3).toLowerCase()===Mg){var d=g.substr(b,3);b+=3}else d=a,0===h&&m(Ng);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="END"):(b=c,c=a)}else b=
c,c=a;return c}function Dd(){var c=b;if(g.substr(b,4).toLowerCase()===Og){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(Pg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="WHEN"):(b=c,c=a)}else b=c,c=a;return c}function Ed(){var c=b;if(g.substr(b,4).toLowerCase()===Qg){var d=g.substr(b,4);b+=4}else d=a,0===h&&m(Rg);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?(l=c,c="THEN"):(b=c,c=a)}else b=c,c=a;return c}function Wa(){if(44===g.charCodeAt(b)){var c=Sg;b++}else c=
a,0===h&&m(Tg);return c}function G(){if(40===g.charCodeAt(b)){var c=Ug;b++}else c=a,0===h&&m(Vg);return c}function H(){if(41===g.charCodeAt(b)){var c=Wg;b++}else c=a,0===h&&m(Xg);return c}function k(){var c;var d=[];for(c=Gd();c!==a;)d.push(c),c=Gd();return d}function Gd(){if(Yg.test(g.charAt(b))){var c=g.charAt(b);b++}else c=a,0===h&&m(Zg);return c}function qc(c,d,e,f){c={type:"binary-expression",operator:c,left:d,right:e};void 0!==f&&(c.escape=f);return c}function Ga(c,d){for(var e=0;e<d.length;e++)c=
qc(d[e][1],c,d[e][3]);return c}A=void 0!==A?A:{};var a={},Kd=A.grammarSource,Hd={start:E},Id=E,Ld="!",kc="\x3d",rc="\x3e\x3d",Qd="\x3e",sc="\x3c\x3d",tc="\x3c\x3e",Ud="\x3c",uc="!\x3d",Nb="+",Pb="-",xc="||",Yd="*",$d="/",Ef="@",xd="'",zd="N'",Fb="''",Rf=".",ie="null",be="true",ee="false",Zf="in",ag="is",cg="like",Nd="escape",eg="not",gg="and",ig="or",kg="between",mg="from",Ce="for",xe="substring",le="extract",og="trim",Ie="position",qg="timestamp",sg="date",ug="time",Gf="leading",If="trailing",Kf=
"both",Oe="cast",Se="as",We="integer",Ze="smallint",bf="float",ef="real",hf="varchar",Mf="to",wg="interval",yg="year",pe="timezone_hour",se="timezone_minute",Ag="month",Cg="day",Eg="hour",Gg="minute",Ig="second",Kg="case",Mg="end",Og="when",Qg="then",Pf="else",Sg=",",Ug="(",Wg=")",kd="`",yf=/^[A-Za-z_\x80-\uFFFF]/,Af=/^[A-Za-z0-9_]/,vd=/^[A-Za-z0-9_.\x80-\uFFFF]/,Cf=/^["]/,Bd=/^[^']/,Xf=/^[0-9]/,Tf=/^[eE]/,Vf=/^[+\-]/,Yg=/^[ \t\n\r]/,md=/^[^`]/,Md=p("!",!1),lc=p("\x3d",!1),Pd=p("\x3e\x3d",!1),Rd=
p("\x3e",!1),Sd=p("\x3c\x3d",!1),Td=p("\x3c\x3e",!1),Vd=p("\x3c",!1),Wd=p("!\x3d",!1),Ob=p("+",!1),Qb=p("-",!1),Xd=p("||",!1),Zd=p("*",!1),ae=p("/",!1),zf=F([["A","Z"],["a","z"],"_",["\u0080","\uffff"]],!1,!1),Bf=F([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),wd=F([["A","Z"],["a","z"],["0","9"],"_",".",["\u0080","\uffff"]],!1,!1),Df=F(['"'],!1,!1),Ff=p("@",!1),yd=p("'",!1),Of=p("N'",!1),Ad=p("''",!1),Cd=F(["'"],!0,!1),Sf=p(".",!1),Yf=F([["0","9"]],!1,!1),Uf=F(["e","E"],!1,!1),Wf=F(["+","-"],!1,!1),
je=p("NULL",!0),ce=p("TRUE",!0),fe=p("FALSE",!0),$f=p("IN",!0),bg=p("IS",!0),dg=p("LIKE",!0),Od=p("ESCAPE",!0),fg=p("NOT",!0),hg=p("AND",!0),jg=p("OR",!0),lg=p("BETWEEN",!0),ng=p("FROM",!0),De=p("FOR",!0),ye=p("SUBSTRING",!0),me=p("EXTRACT",!0),pg=p("TRIM",!0),Je=p("POSITION",!0),rg=p("TIMESTAMP",!0),tg=p("DATE",!0),vg=p("TIME",!0),Hf=p("LEADING",!0),Jf=p("TRAILING",!0),Lf=p("BOTH",!0),Pe=p("CAST",!0),Te=p("AS",!0),Xe=p("INTEGER",!0),$e=p("SMALLINT",!0),cf=p("FLOAT",!0),ff=p("REAL",!0),jf=p("VARCHAR",
!0),Nf=p("TO",!0),xg=p("INTERVAL",!0),zg=p("YEAR",!0),qe=p("TIMEZONE_HOUR",!0),te=p("TIMEZONE_MINUTE",!0),Bg=p("MONTH",!0),Dg=p("DAY",!0),Fg=p("HOUR",!0),Hg=p("MINUTE",!0),Jg=p("SECOND",!0),Lg=p("CASE",!0),Ng=p("END",!0),Pg=p("WHEN",!0),Rg=p("THEN",!0),Qf=p("ELSE",!0),Tg=p(",",!1),Vg=p("(",!1),Xg=p(")",!1),Zg=F([" ","\t","\n","\r"],!1,!1),ld=p("`",!1),nd=F(["`"],!0,!1),b=0,l=0,Va=[{line:1,column:1}],Q=0,Gb=[],h=0;if("startRule"in A){if(!(A.startRule in Hd))throw Error("Can't start parsing from rule \""+
A.startRule+'".');Id=Hd[A.startRule]}var gc=Id();if(gc!==a&&b===g.length)return gc;gc!==a&&b<g.length&&m({type:"end"});throw function(c,d,e){return new T(T.buildMessage(c,d),c,d,e)}(Gb,Q<g.length?g.charAt(Q):null,Q<g.length?ca(Q,Q+1):ca(Q,Q));}}})})(ic);var $g=ic.exports;class ah{static parse(Ua){return $g.parse(Ua)}}hc.WhereGrammar=ah;Object.defineProperty(hc,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(b,d){var c={name:"ca",weekdays:"Diumenge Dilluns Dimarts Dimecres Dijous Divendres Dissabte".split(" "),weekdaysShort:"Dg. Dl. Dt. Dc. Dj. Dv. Ds.".split(" "),weekdaysMin:"Dg Dl Dt Dc Dj Dv Ds".split(" "),months:"Gener Febrer Mar\u00e7 Abril Maig Juny Juliol Agost Setembre Octubre Novembre Desembre".split(" "),monthsShort:"Gen. Febr. Mar\u00e7 Abr. Maig Juny Jul. Ag. Set. Oct. Nov. Des.".split(" "),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",
L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",ll:"D MMM YYYY",lll:"D MMM YYYY, H:mm",llll:"ddd D MMM YYYY, H:mm"},relativeTime:{future:"d'aqu\u00ed %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:function(a){return""+a+(1===a||3===a?"r":2===a?"n":4===a?"t":"\u00e8")}};d.d.locale(c,null,!0);b.default=c;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.30/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(b,d){var c={name:"nl",weekdays:"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),weekdaysShort:"zo. ma. di. wo. do. vr. za.".split(" "),weekdaysMin:"zo ma di wo do vr za".split(" "),months:"januari februari maart april mei juni juli augustus september oktober november december".split(" "),monthsShort:"jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),ordinal:function(a){return"["+a+(1===a||8===a||20<=a?"ste":
"de")+"]"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};d.d.locale(c,null,!0);b.default=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
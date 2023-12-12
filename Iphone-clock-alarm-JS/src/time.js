setInterval(function(){ time(); }, 1000);

i = 0;

h="";
m="";



function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 0 ; i <= theCookies.length; i++) {
        aString = i;
    }

    if(aString == 1){
        return 1;
    }else{
        return aString+1;
    }
}



function time(){
    var dataNow = new Date();
    var h=dataNow.getHours();
    var m=dataNow.getMinutes();
    var s=dataNow.getSeconds();

    if(s >= 0 && s < 10){
        s = "0"+s;
    }

    if(m >= 0 && m < 10){
        m = "0"+m;
    }

    if(h >= 0 && h < 10){
        h = "0"+h;
    }

    document.getElementById('midTime').innerHTML = h + ':'+ m  + ':' + s;
    document.getElementById('topTime').innerHTML = h + ':' + m;

    if(s == "00"){
        checkAlert(h+":"+m , listCookies());
    }

    return h+":"+m;
}

var split = document.cookie.split(';');

function kafel(){
    nazwa = "";

    if (document.cookie.length>2) {
        pary = document.cookie.split("; ");
        for (i=0;i<pary.length;i++) {
            nazwa = i;
            dane = pary[i].split("=");
            if (dane[0]==nazwa) {
                czas = dane[1].split(',');

                var element = document.createElement('div'); 
                element.id = 'bloczek' + i;
                element.className = 'bloczek';
                element.setAttribute('value' , czas[0] +":"+ czas[1]);

                element.innerHTML="<div class='flex alarm'><div class='w-50'><h1>"+ czas[0] +":"+ czas[1]+"</h1><span'>Cały tydzień</span></div> <div class='w-50'><label class='toggler-wrapper style-1'><input type='checkbox' id='b"+i+"'><div class='toggler-slider'><div class='toggler-knob'></div></div></label></div></div>";
                var parent = document.getElementById( 'budzik' ); 
                parent.appendChild(element);
            };  
        }
    }
}

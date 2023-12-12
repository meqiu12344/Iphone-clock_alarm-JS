var HUp =   document.getElementById('HUp');
var HDown = document.getElementById('HDown');
var MUp =   document.getElementById('MUp');
var MDown = document.getElementById('MDown');

// pobieranie godziny
function getH(){
    return document.getElementById('godzi');
}

// pobieranie minuty
function getM(){
    return document.getElementById('min');
}

// Zmiana pobranej godziny na int
function parseH(){
    return parseInt(getH().value);
}

// Zmiana podajen minuty na int
function parseM(){
    return parseInt(getM().value);
}

// Ustawianie godziny
function setH(godzina){
    getH().value = godzina;
}

// Ustawianie minuty
function setM(minuty){
    getM().value = minuty;
}




// Dodawanie godziny do góry
function upH(){
    if(HUp.value == 24){
        HUp.value = 1;
        HDown.value = 23;
        setH(24);
    }else if(HUp.value == 1){
        HUp.value = 2;
        HDown.value = 24;
        setH(1);
    }else{
        HUp.value = parseH()+2;
        HDown.value = parseH();
        setH(parseH()+1);
    }
}

// Odejmowanie godziny do dołu
function downH(){
    if(HDown.value == 1){
        HDown.value = 24;
        HUp.value = 2;
        setH(1);
    }else if(HDown.value == 24){
        HDown.value = 23;
        HUp.value = 1;
        setH(24);
    }else{
        HDown.value = parseH()-2;
        HUp.value = parseH();
        setH(parseH()-1);
    }
}




//Dodawanie minuty do góry
function upM(){

    if(MUp.value == 59){
        MUp.value = 0;
        MDown.value = 58;
        setM(59);
    }else if(MUp.value == 0){
        MUp.value = 1;
        MDown.value = 59;
        setM(0); 
    }else{
        MUp.value = parseM()+2;
        MDown.value = parseM();
        setM(parseM()+1);
    }

}

function downM(){

    if(MDown.value == 0){
        MDown.value = 59;
        MUp.value = 1;
        setM(0);
    }else if(MDown.value == 59){
        MDown.value = 58;
        MUp.value = 0;
        setM(59);
    }else{
        MDown.value = parseM()-2;
        MUp.value = parseM();
        setM(parseM()-1);
    }

}

//Dodawanie budzika
i = 0;
function Add(){
    h=document.getElementById('godzi')
    m=document.getElementById('min')

    if(m.value < 10){
        m.value = 0+m.value;
    }

    tab = [];
    tab.push(h.value)
    tab.push(m.value)

    cookie = document.cookie = i+"="+tab
    i++;
}
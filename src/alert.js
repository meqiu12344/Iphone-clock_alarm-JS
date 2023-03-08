function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        audioStop();
      }, 30000);
    });
  }


async function checkAlert(nowTime , listCookie){

    if(listCookie > 1){
        listCookie = listCookie-1;
    }

    for(var i = 0; i < listCookie;i++){
        var button = document.getElementById('b'+i).checked;
        
        console.log(button);

        if(button){
            const element = document.getElementById('bloczek'+i).getAttribute('value');
            console.log(nowTime , element)
            if(nowTime == element){
                audioStart();
                test = alert("BUDZIK | GODZINA: " + nowTime);
                console.log(test);
                const result = await resolveAfter2Seconds();
                
               
            }else{
               console.log("MOE");
            }
        }
    }

}

let dis1= document.getElementById('dis1')
let dis2= document.getElementById('dis2')
let button= document.getElementById('button')
let num= document.getElementById('num')




function car(){

  if (num.value.length > 4){
document.getElementById("dis1").innerHTML ='length=' +num.value.length +" <br>" + 'Trim=' + num.value.trim() + " <br>" +'Replace=' + num.value.replaceAll('3','9'); 

  }

else if(num.value.length < 4) {

    document.getElementById("dis2").innerHTML ='error';

  }


  




  
}


  

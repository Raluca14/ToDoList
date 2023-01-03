//for verify button

//const element = document.getElementById("verified")

window.onload=function(){ //a fost adaugat deoarece e[0] imi dadea null, adica se executa inainte ca dom sa se incarce complet
var e = document.getElementsByClassName("selector");
var v  = document.getElementsByClassName("element");
let i=0;
e[0].addEventListener('click', function(){
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    for(i=0;i<v.length;i=i+1){
        if(!v[i].classList.contains("item-closed")){
        if(v[i].classList.contains("item-checked") ){
            v[i].style.display="flex";
        }else{
            v[i].style.display="none";
        }
    }
    }
    }
    
}, false);

e[1].addEventListener('click', function(){
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    for(i=0;i<v.length;i=i+1){
            
            if(!v[i].classList.contains("item-closed")){
                v[i].style.display="flex";
            }
    }
    }
    
}, false);

e[2].addEventListener('click', function(){
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    for(i=0;i<v.length;i=i+1){
        if(!v[i].classList.contains("item-closed")){
        if(v[i].classList.contains("item-checked") ){
            v[i].style.display="none";
        }else{
            v[i].style.display="flex";
        }
    }
    }
    }
    
}, false);
//butonul arrow care selecteaza si deselecteaza toate elementele listei
var a = document.getElementsByClassName("arrow");
var a2 = document.getElementsByClassName("arrow-back");
let counter=0;

//butonul de selectare a tuturor elementelor
a[0].addEventListener('click', function(){
    counter=0;
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    for(i=0;i<v.length;i=i+1){
        if(!v[i].classList.contains("item-closed")){
            if(!v[i].classList.contains("item-checked")){
                v[i].classList.add("item-checked");
                counter=counter+1;
              } else{
                counter=counter+1;
              }
        }

    }
    }

    if(counter===lungime(v)  && lungime(v)!==0) {
        a[0].style.display="none";
        a2[0].style.display = "flex";
    }
    
    
}, false);

//butonul de deselectare a tuturor elementelor
a2[0].addEventListener('click', function(){
    counter=0;
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    console.log(counter);
        for(i=0;i<v.length;i=i+1){
            if(!v[i].classList.contains("item-closed") ){
                if(v[i].classList.contains("item-checked")){
                    v[i].classList.remove("item-checked");
                    counter=counter+1;
                  } else{
                    counter=counter+1;
                  }
            }
    
        }
        if(counter===lungime(v)) {
            a2[0].style.display="none";
            a[0].style.display = "flex";
        }
       
    } 
    }, false);  
    
 
var clear = document.getElementsByClassName("selector-clear");
clear[0].addEventListener('click', function(){
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
for(i=0;i<v.length;i=i+1){

    if(!v[i].classList.contains("item-closed") && v[i].classList.contains("item-checked")){
        v[i].classList.add("item-closed");
        if(a2[0].style.display==="flex")
        {
            a2[0].style.display="none";
            a[0].style.display="flex";
        }
       
    
    }
}

}
}, false); 

function lungime(v){ //functie care imi returneza numarul de .element din document, fara cele care au fost inchise
    let i=0;
    let counter=0;
    for(i=0;i<v.length;i++){
        if(!v[i].classList.contains("item-closed"))
        {
            counter=counter+1;
        }
    }
    return counter;

}

//realizare funtii pentru counter

function itemsLeft(v){
    let i=0;
    let counter=0;
    if(isHistoryActive() === 0){
        
   
    for(i=0;i<v.length;i++){
        if(!v[i].classList.contains("item-checked") && !v[i].classList.contains("item-closed"))
        {
            counter=counter+1;
        }
    }
    return counter;
    }
    else{
        return 0;
    }
}

var left = document.getElementsByClassName("items-left");
document.addEventListener('keypress', function (e) {
    if(isHistoryActive() === 1){
        alert("Curently you are in History Mode. Please close History Mode to use this filter");
    } else{
    if (e.key === 'Enter') {
        left[0].innerHTML = itemsLeft(v) + " items left";

    }
}

}, false); 
document.addEventListener('click', function(){

left[0].innerHTML = itemsLeft(v) + " items left";


}, false); 

/* make a history */
var history = document.getElementsByClassName("history");
var historyClose =   document.getElementsByClassName("history-close");
history[0].addEventListener('click', function(){
    for(i=0;i<v.length;i++){
        if(v[i].classList.contains("item-closed")){
            v[i].classList.remove("item-closed");
            v[i].classList.add("item-on-history");
            v[i].getElementsByClassName("close")[0].style.display = "none";
            v[i].getElementsByClassName("checked")[0].style.display = "none";
        } else{
            v[i].style.display = "none";
        }
    }
    historyClose[0].style.display="block";
    history[0].style.display = "none";
    

},false)

historyClose[0].addEventListener('click', function(){
    for(i=0;i<v.length;i++){
        if(v[i].classList.contains("item-on-history")){
            v[i].classList.add("item-closed");
            v[i].classList.remove("item-on-history");
            
        } else{
            v[i].style.display = "flex";
        }
    }
    history[0].style.display="block";
    historyClose[0].style.display = "none";
    

},false)

//functie pentru a verfica daca este history activ 
function  isHistoryActive(){
    var history = document.getElementsByClassName("history");
    if(history[0].style.display === "none") {
      return 1;
    }
    else{
      return 0;
    }
  }


}

  
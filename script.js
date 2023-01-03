document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    var item = document.createElement("div");
    item.classList.add("element");
    //item.classList.add("checked");
    inputValue = document.getElementById("MyInput").value;
    var t = document.createTextNode(inputValue);
    var p =document.createElement("div");
    p.classList.add("element-txt");
    p.appendChild(t);    
    var span = document.createElement("div");
    span.classList.add("close");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    item.appendChild(span);
    item.appendChild(p);

    var span2 = document.createElement("div");
    span2.classList.add("checked");
    var txt2 = document.createTextNode("\u2713");
    span2.appendChild(txt2);
    item.appendChild(span2);
    
    if(isHistoryActive() === 1){
      alert("Curently you are in History Mode. Please close History Mode to add another item");
    }else{

          if(isEmthy(inputValue)===0 ) {
              alert("Trebuie sa scrii ceva");
              

          }else{
                  
              document.getElementById("items").appendChild(item);
          }
          document.getElementById("MyInput").value ="";

  }
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          if(div.classList.contains("item-closed")){
            div.classList.remove("item-closed");
          } else{
            div.classList.add("item-closed");
          } 
        }
      }

      for (i = 0; i < checked.length; i++) {
        checked[i].onclick = function() {
          var parent = this.parentElement;
          //parent.style.backgroundColor = "#852999";
          if(parent.classList.contains("item-checked")){
            parent.classList.remove("item-checked");
          } else{
            parent.classList.add("item-checked");
          }
        }
      }    
      

}
});

//this is for the x button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    if(div.classList.contains("item-closed")){
      div.classList.remove("item-closed");
    } else{
      div.classList.add("item-closed");
    }  
  }
}

//this is for the cheked button
var checked = document.getElementsByClassName("checked");

for (i = 0; i < checked.length; i++) {
  
  checked[i].onclick = function() {
    var parent = this.parentElement;
    //parent.style.backgroundColor = "#852999";
    
    if(parent.classList.contains("item-checked")){
      parent.classList.remove("item-checked");
    } else{
      parent.classList.add("item-checked");
    }
  }
}

// functie pentru a verifica daca inputValue is emthy

function isEmthy(value){
  let counter=0;
  var i;
  for(i=0;i<value.length;i++){
    if(value[i]!==" "){
      counter=1;
    }
  }
  return counter;
}

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

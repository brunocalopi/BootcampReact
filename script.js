function Contact(){
  ModalContactus = document.querySelector("#modal-contactanos");
  ModalContactus.className = "show_modal";
 }
 
 function CloseContact(){
  ModalContactus = document.querySelector("#modal-contactanos");
  ModalContactus.className = "closemodal";
 }

 function change(element){
  squirrel_display = document.getElementById("display");
  squirrel_display.src = element.src;
 }
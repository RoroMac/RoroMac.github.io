(function(){
  document.getElementById('me').setAttribute('draggable', false);


  const header = document.querySelector("header");
  window.addEventListener("wheel", ()=>{
    let currentScroll = window.pageYOffset;
    let pos = 0;

    if (currentScroll > pos){
      header.style.top= "-50px";
      header.style.opacity="0";
      return;
    }
    else{
      header.style.top = "0px";
      header.style.opacity="1";
      return;
    }
  });
}());

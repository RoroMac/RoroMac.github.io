(function(){

  //header function
  let pos = 0;
  let dim = 1;
  let header = document.querySelector("header");
  window.addEventListener("wheel", ()=>{

    let currentScroll = window.pageYOffset;

    if (dim == 1) {
      header.style.top = "0px";
      header.style.opacity="1"
    }
    else{
      header.style.top= "-50px";
      header.style.opacity="0";
    }


    if (pos < currentScroll) {
      dim = 0
    }
    else if (pos > currentScroll) {
      dim = 1;
    }
    pos = currentScroll;
  });

}());

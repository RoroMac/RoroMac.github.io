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

  //change image
  let reflect = document.getElementById("photoaf");
  let dodo = document.querySelectorAll(".choice");
  let phocap = document.querySelector("#photogallery .caption");
  //choice divs
  let imgsel = document.querySelectorAll(".choice").forEach(item => {
    item.addEventListener("click",()=>{
      conversion = item.currentStyle || window.getComputedStyle(item, false),
      bi = conversion.backgroundImage.slice(4, -1).replace(/"/g, "");
      reflect.style.backgroundImage = 'url('+bi+')';

      var i =0;
      for(i=0; i < dodo.length; i++){
        if (dodo[i] == item){
          dodo[i].style.opacity = 1;

          if (i == 0){
            phocap.innerHTML = "Affinity Diagram - Different Methodologies of Waste";
          }
          else if(i == 1){
            phocap.innerHTML = "Affinity Diagram - Institutional Queries";
          }
          if(i == 2){
            phocap.innerHTML = "Affinity Diagram - Effect of Social Facilitation";
          }
          if(i == 3){
            phocap.innerHTML = "Affinity Diagram - Environmental Aids";
          }
          if(i == 4){
            phocap.innerHTML = "Affinity Diagram";
          }
        }
        else{
          dodo[i].style.opacity =0.2;
        }

      }


    });
  });


}());

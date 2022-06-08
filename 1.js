
    document.querySelector(".darkmode-btn").addEventListener('click',on);

          let nav=  document.querySelectorAll(".nav-link");
          let sectionHero=document.querySelector(".section-hero");
         let iconMenu=document.querySelector(".icon-menu");
    let x=false;
    function on(){
        if(x==false){
            document.body.style.backgroundColor="black";
            for(let items of nav)
            {
              items.style.color="white";
        }
        sectionHero.style.color="white";
        iconMenu.style.color="white";
            x=true;
        }
        else{
            document.body.style.backgroundColor="white";
            for(let items of nav)
            {
                items.style.color="black";
            }
            sectionHero.style.color="black";
            iconMenu.style.color="black";
            x=false;
        }

    }
      
   

 
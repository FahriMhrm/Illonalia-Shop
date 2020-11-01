window.addEventListener("load",function(){
    jumboText = document.querySelector('.display-4');
    jumboText.classList.add('text-focus-in');

    // aboutText =  document.querySelector(".about-text");
    // aboutText.classList.add('swing-in-right-fwd');
});


window.addEventListener("scroll", function(){
    const aboutText =  document.querySelector(".about-text")
    const wScroll = window.pageYOffset;
    const service = document.querySelector("#service");
    const card = document.querySelectorAll(".card");
   

    for(i=0; i<= card.length; i++){
        if(wScroll >= (service.offsetTop - 400)){
            card[0].classList.add('tilt-in-fwd-tr');
            card[1].classList.add('tilt-in-fwd-tr');
            card[2].classList.add('tilt-in-fwd-tr');
            card[1].style.animationDelay=".5s";
            card[2].style.animationDelay="1s";
        }
    }

    const product =  document.querySelector('.best-product');
    const classProduct = document.querySelectorAll(".product");
    for(x=0; x<= classProduct.length; x++){
        if(wScroll >= (product.offsetTop - 300)){
            classProduct[0].classList.add('bounce-in-top');
            classProduct[1].classList.add('bounce-in-top');
            classProduct[2].classList.add('bounce-in-top');
            classProduct[1].style.animationDelay=".5s";
            classProduct[2].style.animationDelay="1s";
        }
    } 

    if(wScroll >= (aboutText.offsetTop - 550)){
        aboutText.classList.add('swing-in-right-fwd');
    }

    
    const navbar = document.querySelector('.navbar');
    
    if(navbar.offsetTop >= 600){
        navbar.classList.remove('nav-transparent');
        navbar.classList.add('nav-colored');
    }else{
        navbar.classList.remove('nav-colored');
        navbar.classList.add('nav-transparent');
    }
});
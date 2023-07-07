$(document).ready(function(){

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor Full Stack "],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Desenvolvedor Full Stack "],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    const swiper = new Swiper('.swiper', {
        cssMode: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
        keyboard: true,

      });

});
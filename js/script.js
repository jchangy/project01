
/*슬라이드*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    loop:true,
});
 
/*양옆 버튼*/
let sp=0;
$('.btn-pause').click(function(){
    if(sp==0){
        $(this).attr({class:'btn-play'})
        swiper.autoplay.stop();
        sp=1;
    }else{
        $(this).attr({class:'btn-pause'})
        swiper.autoplay.start();
        sp=0;
    }
});


/*햄버거메뉴*/
const hamburger = document.getElementById('hamburger');
const phoneMenu = document.getElementById('phoneMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active'); // 햄버거 버튼의 X 표시 토글
    phoneMenu.classList.toggle('active'); // 모바일 메뉴 표시/숨김 토글
});


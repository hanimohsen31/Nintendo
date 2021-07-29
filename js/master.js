// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
        // 1400 and above
          slidesPerView: 5,
          spaceBetween: 20
      },
      1200: {
        // 1200 and above
          slidesPerView: 4,
          spaceBetween: 20
      },
      992: {
          // 992 and above

          slidesPerView: 3,
          spaceBetween: 20
      },
      768: {
          // 768 and above

          slidesPerView: 2,
          spaceBetween: 20
      },
      0: {
          // 0 and above

          slidesPerView: 1,
          spaceBetween: 20
      },
    }
  });
  // $mobile : 576 px ;
  // $medium : 768 px ;
  // $large : 992 px ;
  // $xlarge : 1200 px  ;
  // $xxlarge : 1400 px ;
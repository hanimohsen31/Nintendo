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


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
